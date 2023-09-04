import { configureStore } from "@reduxjs/toolkit";
import videos from "../src/pages/home-page/videos-list/videosSlice";

const store = configureStore({
    reducer: { videos },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
