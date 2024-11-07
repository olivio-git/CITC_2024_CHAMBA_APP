require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed6
  // dialectOptions: {
  //   ssl: {
  //     require: false,
  //     rejectUnauthorized: false 
  //   }
  // },
});//para poder conectarse a una base de datos con ssl
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Usuario, 
} = sequelize.models;
// Dato_Evento.hasMany(QR, {
//   foreignKey: 'id_Evento',
//   onDelete: 'CASCADE',
//   hooks: true
// });
// QR.belongsTo(Dato_Evento, { foreignKey: 'id_Evento' });

// Dato_Evento.hasMany(Consigna_Evento, {
//   foreignKey: 'id_Evento',
//   onDelete: 'CASCADE',
//   hooks: true
// });
// Consigna_Evento.belongsTo(Dato_Evento, { foreignKey: 'id_Evento' });

// Usuario.hasMany(Publicacion);
// Publicacion.belongsTo(Usuario);

// Usuario.hasMany(Evento);
// Evento.belongsTo(Usuario);

// Evento.hasMany(Dato_Evento, {
//   onDelete: 'CASCADE',
//   hooks: true
// });
// Dato_Evento.belongsTo(Evento);

// Usuario.hasMany(Evento_Predefinido);
// Evento_Predefinido.belongsTo(Usuario);

// Usuario.hasMany(Programa);
// Programa.belongsTo(Usuario);

// // Usuario.hasMany(Credencial);
// // Credencial.belongsTo(Usuario);

// Usuario.hasMany(Podcast);
// Podcast.belongsTo(Usuario);

// Usuario.hasMany(Testimonios);
// Testimonios.belongsTo(Usuario);

// Usuario.hasMany(Ambientes);
// Ambientes.belongsTo(Usuario);

// Ambientes.hasMany(Gallery);
// Gallery.belongsTo(Ambientes);

// Programa.hasOne(ProgramPrices);
// ProgramPrices.belongsTo(Programa);

// Usuario.hasMany(Beca);
// Beca.belongsTo(Usuario);

// QR.hasMany(Fecha_Lectura);
// Fecha_Lectura.belongsTo(QR);

module.exports = {// para poder importar los modelos así: const { Product, User } = require('./db.js');
  ...sequelize.models,
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};