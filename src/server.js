import Hapi from "@hapi/hapi";
import routes from "./routes";
import { db } from "./database";

let server;
const start = async () => {
  server = Hapi.server({
    port: 8000,
    host: "localhost",
  });

  db.connect();
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
  db.end();
  console.log("Server stopped!");
  process.exit(0);
});

start();
