import { connection } from "../database";
import * as admin from "firebase-admin";

export const getUserListingsRoute = {
  method: "GET",
  path: "/api/users/{userId}/listings",
  handler: async (req, h) => {
    const token = req.headers.authtoken;
    const userId = req.params.userId;
    const { results } = await connection.doQuery(
      "SELECT * FROM listings WHERE user_id=?",
      [userId]
    );
    return results;
  },
};
