import { configureStore } from "@reduxjs/toolkit";

import { listItemApi } from "./videosListItem/listItemApi";
import { relatedVideosApi } from "../pages/videoPage/relatedVideos/relatedVideosApi";
import { commentsApi } from "../pages/videoPage/comments/commentsApi";

import search from "./header/search/searchSlice";
import videos from "../pages/home/videosSlice";
import categories from "../pages/home/categories-filter/categoriesSlice";
import auth from "./authSlice";

const store = configureStore({
    reducer: {
        videos,
        categories,
        search,
        auth,
        [listItemApi.reducerPath]: listItemApi.reducer,
        [relatedVideosApi.reducerPath]: relatedVideosApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(listItemApi.middleware)
            .concat(relatedVideosApi.middleware)
            .concat(commentsApi.middleware),
});

export default store;
