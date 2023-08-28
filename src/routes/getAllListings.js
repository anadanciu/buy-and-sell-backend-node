import { db } from "../database";

export const getAllListingsRoute = {
  method: "GET",
  path: "/api/listings",
  handler: async (req, h) => {
    console.log("it gets here");
    const { results } = await db.query("SELECT * FROM listings");
    console.log(`it gets to api/listings, fetching ${results}`);
    return results;
  },
};
