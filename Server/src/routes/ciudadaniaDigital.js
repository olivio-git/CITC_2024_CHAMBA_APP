//@categorias
require("dotenv").config();
const {
  ISSUER,
  CLIENT_ID,
  CLIENT_SECRET,
  URL_CALLBACK,
  URL_CALLBACK_LOGOUT,
  CLIENT_SCOPE,
} = process.env;

const express = require("express");
const { Issuer, generators } = require("openid-client");

const router = express.Router();

const issuer = ISSUER;
const clientId = CLIENT_ID;
const clientSecret = CLIENT_SECRET;
const urlCallback = URL_CALLBACK;
const urlCallbackLogout = URL_CALLBACK_LOGOUT;
const clientScope = CLIENT_SCOPE;

router.get("/session/login", async (req, res) => {
    console.log(issuer,clientId,clientSecret,urlCallback,clientScope,urlCallbackLogout)
  try { 
    const clientCiudadania = await Issuer.discover(issuer);
    const client = new clientCiudadania.Client({
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uris: [urlCallback],
      response_types: ["code"],
    });

    const nonce = generators.nonce();
    const state = generators.state();

    const authorizationUrl = client.authorizationUrl({
      scope: clientScope,
      state: state,
      nonce: nonce,
    });

    res.json({
      mensaje: "Redireccionando a la pagina de autenticacion",
      urlCiudadania: authorizationUrl,
      nonce,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ mensaje: "No se puede iniciar sesión!" });
  }
});

router.post("/verificar-sesion", async (req, res) => {
  try {
    const { query, nonce } = req.body;
    
    // Descubrir el servidor de identidad
    const clienteCiudadania = await Issuer.discover(issuer);
    
    // Configurar el cliente
    const client = new clienteCiudadania.Client({
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uris: [urlCallback],
      response_types: ["code"]
    });

    // Realizar la llamada de callback
    const callback = await client.callback(urlCallback, query, {
      state: query.state,
      nonce: nonce
    });

    // Procesar la respuesta
    if (!callback.error) {
      const idToken = callback.id_token;
      const claims = await client.userinfo(callback.access_token);
      
      // Extraer información del perfil del usuario
      const usuario = claims.profile.documento_identidad.numero_documento;
      const nombreCompleto = [];
      if (claims.profile.nombre.nombres) nombreCompleto.push(claims.profile.nombre.nombres);
      if (claims.profile.nombre.primer_apellido) nombreCompleto.push(claims.profile.nombre.primer_apellido);
      if (claims.profile.nombre.segundo_apellido) nombreCompleto.push(claims.profile.nombre.segundo_apellido);
      
      const email = claims.email;
      const fechaNacimiento = claims.fecha_nacimiento;

      const datosUsuario = {
        usuario: usuario,
        nombreCompleto: nombreCompleto.join(" "),
        email,
        fechaNacimiento,
        idToken,
        accessToken: callback.access_token
      };

      // Generar el token JWT
      const token = jwt.sign(datosUsuario, JWT_SECRET, {
        expiresIn: "1h"
      });

      res.json({
        mensaje: "Sesión verificada exitosamente",
        ...datosUsuario,
        token
      });
    } else {
      throw new Error(`Error en la verificación de sesión: ${callback.error}`);
    }
  } catch (error) {
    console.error("Error al verificar la sesión:", error.message);
    res.status(500).json({ mensaje: "No se pudo verificar la sesión" });
  }
});


router.post("/cerrar-sesion", async (req, res) => {
  try {
    const { idToken } = req.body;
    const clienteCiudadania = await Issuer.discover(issuer);
    const client = new clienteCiudadania.Client({
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uris: [urlCallback],
      post_logout_redirect_uris: [urlCallbackLogout],
      response_types: ["code"],
    });
    const urlLogout = client.endSessionUrl({ id_token_hint: idToken });

    res.json({
      mensaje: "cerrar sesión!",
      urlLogout,
    });
  } catch (error) {
    res.status(500).json({ mensaje: "No se pudo verificar la sesión" });
  }
});

module.exports = router;
