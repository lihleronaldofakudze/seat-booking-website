import { executeQuery } from "../config/db";

const updateSeat = async (req, res) => {
  await executeQuery("UPDATE seats SET is_booked = ? WHERE id = ?", [
    req.body.is_booked,
    req.query.seatId,
  ]);
  res.send({ message: true });
};

const getAllSeats = async (req, res) => {
  let seat = await executeQuery("SELECT * FROM seats", []);
  res.send(seat);
};
const getSection = async (req, res) => {
  let seat = await executeQuery("SELECT * FROM seats WHERE section = ?", [
    req.query.section,
  ]);
  res.send(seat);
};

const getSeat = async (req, res) => {
  let seat = await executeQuery("SELECT * FROM seats WHERE id = ?", [
    req.query.seatId,
  ]);
  res.send(seat);
};

export { updateSeat, getSeat, getAllSeats, getSection };
