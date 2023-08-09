import { db } from "../database";
import * as admin from "firebase-admin";

export const getUserListingsRoute = {
  method: "GET",
  path: "/api/users/{userId}/listings",
  handler: async (req, h) => {
    const token = req.headers.authtoken;
    const userId = req.params.userId;
    const { results } = await db.query(
      "SELECT * FROM listings WHERE user_id=?",
      [userId]
    );
    console.log(`it gets to /api/users/{userId}/listings`);
    return results;
  },
};
