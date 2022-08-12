import nc from "next-connect";
import { getAllUsers, addUser } from "../../../controller/user";

const handler = nc();
handler.get(getAllUsers);
handler.post(addUser);

export default handler;
