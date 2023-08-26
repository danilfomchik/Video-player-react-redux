import { configureStore } from "@reduxjs/toolkit";
import videos from "./pages/home-page/videosSlice";

const store = configureStore({
    reducer: { videos },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
