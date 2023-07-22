import { v4 as uuidv4 } from "uuid";
import { db } from "../database";

export const createNewListingRoute = {
  method: "POST",
  path: "/api/listings",
  handler: async (req, h) => {
    const id = uuidv4();
    const { name = "", description = "", price = 0 } = req.payload;
    const userId = "12345";
    const views = 0;

    console.warn(id, name, description, price, userId, views);
    try {
      await db.query(
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
