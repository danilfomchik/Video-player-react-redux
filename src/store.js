import { configureStore } from "@reduxjs/toolkit";

import videos from "../src/pages/home-page/videos-list/videosSlice";
import categories from "../src/pages/home-page/categories-filter/categoriesSlice";

const store = configureStore({
    reducer: { videos, categories },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
