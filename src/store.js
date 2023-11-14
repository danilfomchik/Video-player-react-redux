import { configureStore } from "@reduxjs/toolkit";

import { videosApi } from "./api/videosApi";
import { api } from "./api/api";

import search from "../src/app/header/search/searchSlice";
import videos from "../src/pages/home/videos-list/videosSlice";
import categories from "../src/pages/home/categories-filter/categoriesSlice";

const store = configureStore({
    reducer: {
        videos,
        categories,
        search,
        [api.reducerPath]: api.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
