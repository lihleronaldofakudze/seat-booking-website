import { executeQuery } from "../config/db";

const addUser = async (req, res) => {
  await executeQuery(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [req.body.username, req.body.email, req.body.password]
  );
  res.send({ result: true });
};

const getAllUsers = async (req, res) => {
  let employeeData = await executeQuery("SELECT * FROM users", []);
  res.send(employeeData);
};

const getUser = async (req, res) => {
  let employeeData = await executeQuery("select * from users where id = ?", [
    req.query.userId,
  ]);
  res.send(employeeData);
};
const updateUser = async (req, res) => {
  let employeeData = await executeQuery(
    "UPDATE users SET username = ? , email = ?, password = ? WHERE id = ?",
    [req.body.username, req.body.email, req.body.password, req.query.userId]
  );
  res.send(employeeData);
};

const deleteUser = async (req, res) => {
  await executeQuery("DELETE FROM users WHERE id = ?", [req.query.userId]);
  res.send({ result: true });
};

export { getAllUsers, deleteUser, getUser, addUser, updateUser };
