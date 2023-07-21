import { addViewToListingRoute } from "./addViewToListings";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { updatedListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";

export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updatedListingRoute,
  deleteListingRoute,
];
