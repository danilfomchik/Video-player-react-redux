import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    BASE_URL,
    API_KEY,
    RAPIDAPI_KEY,
    videosCount,
} from "../utils/constants";

// топ статья для ртк квери https://habr.com/ru/companies/alfa/articles/705640/

// https://youtube-v3-lite.p.rapidapi.com/search?relatedToVideoId=arj7oStGLkU&part=id%2Csnippet&type=video

export const relatedVideosApi = createApi({
    reducerPath: "relatedVideosApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (builder) => ({
        getRelatedVideos: builder.query({
            query: ({ query, nextPageToken }) => {
                return `/search?part=snippet&maxResults=8&type=video&q=${
                    query || ""
                }&pageToken=${nextPageToken}&videoDuration=medium&key=${API_KEY}`;
            },
            serializeQueryArgs: ({ originalArgs }) => {
                const newQueryArgs = { ...originalArgs };
                if (newQueryArgs.nextPageToken) {
                    delete newQueryArgs.nextPageToken;
                }

                return newQueryArgs;
            },
            merge: (currentCache, newItems) => {
                if (currentCache.items) {
                    return {
                        ...currentCache,
                        ...newItems,
                        items: [...currentCache.items, ...newItems.items],
                    };
                }
                return newItems;
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },
            providesTags: ["RelatedVideos"],
        }),
    }),
});

// codepen
// https://codesandbox.io/p/sandbox/react-rtk-query-inifinite-scroll-xhhmt5?file=%2Fsrc%2FApp.js%3A13%2C74

// https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=0S3Bzw-n2e4&type=video&key=AIzaSyD5M3tfBDKqVJTjCPS6yOMa9LBlDQvIjGI

export const { useGetRelatedVideosQuery } = relatedVideosApi;
