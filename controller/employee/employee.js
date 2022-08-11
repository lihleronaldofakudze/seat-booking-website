import pool, { executeQuery } from "../../config/db";

const getAllEmployees = async (req, res) => {
  let employeeData = await executeQuery("select * from users", []);
  res.send(employeeData);
};

export { getAllEmployees };
