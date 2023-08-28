import mysql from "mysql2";
import "dotenv/config";

let pool;
// create a new MySQL connection
export const db = {
  connect: () => {
    pool = mysql.createPool({
      connectionLimit: 100,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      socketPath: process.env.INSTANCE_UNIX_SOCKET,
      port: process.env.DB_PORT,
    });
  },

  query: (queryString, escapedValues) =>
    new Promise((resolve, reject) => {
      pool.query(queryString, escapedValues, (error, results, fields) => {
        if (error) reject(error);
        resolve({ results, fields });
      });
    }),
  end: () => {
    pool.end();
  },
};
