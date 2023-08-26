import mysql from "mysql2";
import "dotenv/config";

// create a new MySQL connection
export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  socketPath: process.env.INSTANCE_UNIX_SOCKET,
  port: process.env.DB_PORT,
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
    //console.log(`...to database call...`);
    connection.query(queryString, escapedValues, (error, results, fields) => {
      //console.log("error...", error);
      if (error) reject(error);
      resolve({ results, fields });
    });
  });
