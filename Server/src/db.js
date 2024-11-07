require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
const {
  User,
  Employer,
  Worker,
  JobOffer,
  JobApplication,
  Skill,
  WorkerSkill,
  JobCategory,
  JobOfferCategory,
} = sequelize.models;

// Relaciones

// User - Worker (One-to-One)
User.hasOne(Worker, { foreignKey: "userId" });
Worker.belongsTo(User, { foreignKey: "userId" });

// Employer - JobOffer (One-to-Many)
Employer.hasMany(JobOffer, { foreignKey: "employerId" });
JobOffer.belongsTo(Employer, { foreignKey: "employerId" });

// Worker - JobApplication (One-to-Many)
Worker.hasMany(JobApplication, { foreignKey: "workerId" });
JobApplication.belongsTo(Worker, { foreignKey: "workerId" });

// JobOffer - JobApplication (One-to-Many)
JobOffer.hasMany(JobApplication, { foreignKey: "offerId" });
JobApplication.belongsTo(JobOffer, { foreignKey: "offerId" });

// Worker - Skill (Many-to-Many)
Worker.belongsToMany(Skill, { through: WorkerSkill, foreignKey: "workerId" });
Skill.belongsToMany(Worker, { through: WorkerSkill, foreignKey: "skillId" });

// JobOffer - JobCategory (Many-to-Many)
JobOffer.belongsToMany(JobCategory, {
  through: JobOfferCategory,
  foreignKey: "offerId",
});
JobCategory.belongsToMany(JobOffer, {
  through: JobOfferCategory,
  foreignKey: "categoryId",
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
