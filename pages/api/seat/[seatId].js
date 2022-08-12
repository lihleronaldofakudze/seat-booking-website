import nc from "next-connect";
import { getSeat, updateSeat } from "../../../controller/seat";

const handler = nc();
handler.get(getSeat);
handler.put(updateSeat);

export default handler;
