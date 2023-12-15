require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
// const Ticket = require("./models/Ticket");
//_______________________________________________________________________________
const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gestionTickets`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

//____________________________DEPLOY___________________________________________________
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, PORT } = process.env;

//postgres:MgCN35CzbJr92iPZScsu@containers-us-west-70.railway.app:6957/railway


//_______________________________________________________________________________
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
// Para relacionarlos hacemos un destructuring
const { Ticket } = sequelize.models;

// Establecer relación en Ticket (asumiendo que cada ticket pertenece a un usuario)
Ticket.belongsTo(Ticket, { foreignKey: 'usuarioId' });


module.exports = {
  ...sequelize.models,
  conn: sequelize, 
};
