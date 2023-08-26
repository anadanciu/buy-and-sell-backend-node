import { connection } from "../database";

export const getAllListingsRoute = {
  method: "GET",
  path: "/api/listings",
  handler: async (req, h) => {
    console.log("it gets here");
    const { results } = await connection.doQuery("SELECT * FROM listings");
    console.log(`it gets to api/listings, fetching ${results}`);
    return results;
  },
};
