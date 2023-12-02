import { configureStore } from "@reduxjs/toolkit";

import { videosApi } from "./api/videosApi";
import { api } from "./api/api";
import { relatedVideosApi } from "./api/relatedVideosApi";

import search from "../src/app/header/search/searchSlice";
import videos from "../src/pages/home/videosSlice";
import categories from "../src/pages/home/categories-filter/categoriesSlice";

const store = configureStore({
    reducer: {
        videos,
        categories,
        search,
        [api.reducerPath]: api.reducer,
        [relatedVideosApi.reducerPath]: relatedVideosApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(api.middleware)
            .concat(relatedVideosApi.middleware),
});

export default store;
