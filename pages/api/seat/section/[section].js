import nc from "next-connect";
import { getSeat, getSection } from "../../../../controller/seat";

const handler = nc();
handler.get(getSection);
// handler.get(getSeat);
// handler.put(updateSeat);

export default handler;
