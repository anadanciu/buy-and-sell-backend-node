import mysql from "mysql";

let connection = undefined;
/*
host: "34.116.142.123",
  user: "hapi-server",
  password: "nanes-sql", //or 1QRtana1234!
  database: "buy-and-sell",

 host: "localhost", 
  user: "hapi-server",
  password: "abc123!DaBc?rwg4554gv_%gfeR", //or nanes-sql or 1QRtana1234!
  database: "buy-an-sell", -is the one from workbench localhost33:06
*/

export const db = {
  connect: () => {
    connection = mysql.createConnection({
      host: process.env.INSTANCE_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      socketPath: process.env.INSTANCE_UNIX_SOCKET,
    });
  },
  query: (queryString, escapedValues) =>
    new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues, (error, results, fields) => {
        if (error) reject(error);
        resolve({ results, fields });
      });
    }),
  end: () => connection.end(),
};
