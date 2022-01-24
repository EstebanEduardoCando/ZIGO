const http = require("http");
const express = require("express");
const cors = require("cors");
const webServerConfig = require("../config/web-server.js");
const router = require("../router/router.js");

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/api", router);
    httpServer = http.createServer(app);
    httpServer
      .listen(webServerConfig.port)
      .on("request", () => {
        console.log("Nueva request");
      })
      .on("connection", () => {
        console.log("Nueva connection");
      })
      .on("socket", (e) => {
        console.log("Nuevo socket", e);
      })
      .on("listening", () => {
        console.log(
          `Web server listening on localhost:${webServerConfig.port}`
        );
        resolve();
      })
      .on("error", (err) => {
        console.error(
          null,
          `Error in web-server: ${JSON.stringify(err.message)}`
        );
        reject(err);
      });
  });
}

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        console.error(
          null,
          `Error in web-server: ${JSON.stringify(err.message)}`
        );
        reject(err);
        return;
      }

      resolve();
    });
  });
}

module.exports.close = close;

module.exports.initialize = initialize;
