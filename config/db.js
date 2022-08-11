const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "seat_booking",
});

pool.getConnection((error) => {
  if (error) {
    console.log("Error connecting to db...");
  }
  console.log("Successfully connected to database");
});

const executeQuery = (query, arrayParams) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrayParams, (error, data) => {
        if (error) {
          console.log("error in executing query");
          reject(error);
        }
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { executeQuery };
