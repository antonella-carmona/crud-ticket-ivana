const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT;

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    console.log(`levantado en ${port}`); // eslint-disable-line no-console
  });
});

//force : true cuando estamos armando
//alter: true cuano ya mas o menos lo tenemos armado//para que nos guarde algo en base de datos
//falta uno force en false para que era?
// force: false cuando lo terminamos
