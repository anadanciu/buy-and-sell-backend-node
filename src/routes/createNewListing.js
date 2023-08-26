import { v4 as uuid } from "uuid";
import * as admin from "firebase-admin";
import { connection } from "../database";

export const createNewListingRoute = {
  method: "POST",
  path: "/api/listings",
  handler: async (req, h) => {
    const id = uuid();
    const { name = "", description = "", price = 0 } = req.payload;
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = user.user_id;
    const views = 0;

    try {
      await connection.doQuery(
        `INSERT INTO listings (id, name, description, price, user_id, views)
    VALUES (?, ?, ?, ?, ?, ?)`,
        [id, name, description, price, userId, views]
      );
    } catch (error) {
      console.warn(error);
    }

    return { id, name, description, price, user_id: userId, views };
  },
};
