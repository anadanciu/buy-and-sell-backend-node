import dotenv from "dotenv";
dotenv.config();
import Hapi from "@hapi/hapi";
import routes from "./routes";
import { connection } from "./database";
import * as admin from "firebase-admin";
import credentials from "../credentials.json";
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

let server;

const start = async () => {
  server = Hapi.server({
    port: 8000,
    host: "localhost",
  });
  connection.connect();
  await server.start();
  routes.forEach((route) => server.route(route));
  console.log(`server is listening at ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

//kill the server
process.on("SIGINT", async () => {
  await server.stop({ timeout: 10000 });
  console.log("Stopping server...");
  connection.end();
  console.log("Server stopped!");
  process.exit(0);
});

start();
