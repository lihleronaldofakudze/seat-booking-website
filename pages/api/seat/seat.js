import nc from "next-connect";
import { getAllSeats } from "../../../controller/seat";

const handler = nc();
handler.get(getAllSeats);

export default handler;
