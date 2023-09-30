import { configureStore } from "@reduxjs/toolkit";

import search from "../src/app/header/search/searchSlice";
import videos from "../src/pages/home-page/videos-list/videosSlice";
import categories from "../src/pages/home-page/categories-filter/categoriesSlice";

const store = configureStore({
    reducer: { videos, categories, search },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
