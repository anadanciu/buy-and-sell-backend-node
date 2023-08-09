import { addViewToListingRoute } from "./addViewToListings";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { updatedListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";
import { staticFilesRoute, filesRoute } from "./files";

export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updatedListingRoute,
  deleteListingRoute,
  staticFilesRoute,
  ...filesRoute,
];
