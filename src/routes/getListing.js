import Boom from "@hapi/boom";
import { connection } from "../database";

export const getListingRoute = {
  method: "GET",
  path: "/api/listings/{id}",
  handler: async (req, h) => {
    const id = req.params.id;
    console.log("getListing + id: ", id);
    const { results } = await connection.doQuery(
      "SELECT * FROM listings WHERE id=?",
      [id]
    ); //doing it with the ? and not string concatenation as in js, is beacuse  the ? prevents the sql injection
    const listing = results[0];
    if (!listing) throw Boom.notFound(`Listing does not exist with id: ${id}`);
    return listing;
  },
};
