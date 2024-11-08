const {
  createUserService,
  findAll,
  deleteUserService,
  updateUserService,
  findByEmailService,
  LoginService,
} = require("../services/usuario.service");
const { ClientError } = require("../utils/errors");
const response = require("../utils/response");
const jwt = require("jsonwebtoken");

module.exports = {
  // Crear un nuevo usuario
  createUser: async (req, res, next) => {
    const { name, lastname, password, email, ci, state } = req.body;
    try {
      if (!name || !lastname || !password || !email) {
        throw new ClientError("Todos los datos son requeridos", 400);
      }
      const create = await createUserService({
        name,
        lastname,
        password,
        email,
        ci,
        state,
      });
      response(res, 201, {
        success: true,
        message: "Usuario creado exitosamente",
        data: create,
      });
    } catch (error) {
      if (error instanceof ClientError) {
        response(res, error.status, {
          success: false,
          message: error.message,
        });
        return;
      }
      next(error);
    }
  },

  // Obtener todos los usuarios
  findAll: async (req, res, next) => {
    try {
      const usuariosList = await findAll();
      if (!usuariosList || usuariosList.length === 0) {
        response(res, 204, {
          success: true,
          message: "No se encontraron usuarios",
          data: [],
        });
        return;
      }
      response(res, 200, {
        success: true,
        message: "Usuarios encontrados exitosamente",
        data: usuariosList,
      });
    } catch (error) {
      next(error);
    }
  },

  // Buscar usuario por email
  findByEmail: async (req, res, next) => {
    const { email } = req.params;
    try {
      if (!email) {
        throw new ClientError("El email es requerido", 400);
      }

      const user = await findByEmailService(email);

      if (!user) {
        response(res, 404, {
          success: false,
          message: "Usuario no encontrado",
        });
        return;
      }

      response(res, 200, {
        success: true,
        message: "Usuario encontrado exitosamente",
        data: user,
      });
    } catch (error) {
      if (error instanceof ClientError) {
        response(res, error.status, {
          success: false,
          message: error.message,
        });
        return;
      }
      next(error);
    }
  },

  // Eliminar un usuario
  deleteUser: async (req, res, next) => {
    const { id } = req.params;
    try {
      if (!id) {
        throw new ClientError("El ID es requerido", 400);
      }

      const deleted = await deleteUserService(id);

      if (!deleted) {
        response(res, 404, {
          success: false,
          message: `Usuario con ID ${id} no encontrado`,
        });
        return;
      }

      response(res, 200, {
        success: true,
        message: `Usuario con ID ${id} eliminado exitosamente`,
        data: deleted,
      });
    } catch (error) {
      if (error instanceof ClientError) {
        response(res, error.status, {
          success: false,
          message: error.message,
        });
        return;
      }
      next(error);
    }
  },

  // Actualizar un usuario
  updateUser: async (req, res, next) => {
    const { id } = req.params;
    const { password } = req.body;
    try {
      if (!id) {
        throw new ClientError("El ID es requerido", 400);
      }

      if (!password) {
        throw new ClientError("La contraseña es requerida", 400);
      }

      const updated = await updateUserService(id, password);

      if (!updated) {
        response(res, 404, {
          success: false,
          message: `Usuario con ID ${id} no encontrado`,
        });
        return;
      }

      response(res, 200, {
        success: true,
        message: "Usuario actualizado exitosamente",
        data: updated,
      });
    } catch (error) {
      if (error instanceof ClientError) {
        response(res, error.status, {
          success: false,
          message: error.message,
        });
        return;
      }
      next(error);
    }
  },
  login: async (req, res, next) => {
    console.log("first");
    const { email, password } = req.body;
    try {
      const result = await LoginService(email, password);
      if (result.email);
      const token = await jwt.sign(result.email, "clave");
      res.cookie("token", token, {
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 año
        httpOnly: true,
      });
      response(res, 200, { token:token,message:"Login exitoso!" });
    } catch (error) {
      next(error);
    }
  },
};
