import { connection } from "../database";
import * as admin from "firebase-admin";

export const deleteListingRoute = {
  method: "DELETE",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    const { id } = req.params;
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = user.user_id;
    //console.log(req.params);
    await connection.doQuery(`DELETE FROM listings WHERE id=? AND user_id=?`, [
      id,
      userId,
    ]);
    return { message: "Success!" };
  },
};
