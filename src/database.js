import mysql from "mysql2";

//let connection = undefined;
/*
host: "34.116.142.123",
  user: "hapi-server",
  password: "nanes-sql", //or 1QRtana1234!
  database: "buy-and-sell",

 host: "localhost", 
  user: "hapi-server", // "root" - works both
  password: "abc123!DaBc?rwg4554gv_%gfeR", //or nanes-sql or 1QRtana1234!
  database: "buy-an-sell", -is the one from workbench localhost33:06
*/

//need to process the .env variables
// create a new MySQL connection
export const connection = mysql.createConnection({
  host: "localhost",
  user: "hapi-server",
  password: "hapiserver1234",
  database: "buy-an-sell",
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL database:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});

connection.doQuery = (queryString, escapedValues) =>
  new Promise((resolve, reject) => {
    console.log(`...to database call...${resolve}`);
    connection.query(queryString, escapedValues, (error, results, fields) => {
      console.log(error);
      //console.log(results);
      if (error) reject(error);
      resolve({ results, fields });
      // close the MySQL connection
      //connection.end();
    });
  });

// export const db = {
//   connect: () => {
//     connection = mysql.createConnection({
//       host: process.env.INSTANCE_HOST,
//       port: process.env.DB_PORT,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASS,
//       database: process.env.DB_NAME,
//       socketPath: process.env.INSTANCE_UNIX_SOCKET,
//     });
//   },
//   query: (queryString, escapedValues) =>
//     new Promise((resolve, reject) => {
//       console.log(`...to database call...${resolve}`);
//       connection.query(queryString, escapedValues, (error, results, fields) => {
//         console.log(error);
//         console.log(results);
//         if (error) reject(error);
//         resolve({ results, fields });
//       });
//     }),
//   end: () => connection.end(),
// };
