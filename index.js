const webServer = require("./services/web-server");

async function startup() {
  console.log("Starting application");
  try {
    console.log("Inicializar Base de Datos");
    //await database.initialize();
  } catch (err) {
    console.error(err);
    process.exit(1); // Non-zero failure code
  }
  try {
    console.log("Inicializar web server");
    await webServer.initialize();
  } catch (err) {
    console.log("Error inicializar");
    console.error(err);
    process.exit(1); // Non-zero failure code
  }
}

startup();
