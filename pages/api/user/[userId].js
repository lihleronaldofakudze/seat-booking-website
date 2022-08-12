import nc from "next-connect";
import { getUser, deleteUser, updateUser } from "../../../controller/user";

const handler = nc();
handler.get(getUser);
handler.put(updateUser);
handler.delete(deleteUser);

export default handler;
