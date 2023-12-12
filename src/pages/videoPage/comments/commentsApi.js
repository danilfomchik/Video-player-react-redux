import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY, videosCount } from "../../../utils/constants";

// топ статья для ртк квери https://habr.com/ru/companies/alfa/articles/705640/

// https://rohitbels.medium.com/pagination-infinite-loading-with-redux-toolkit-createapi-a265ac25c3bd

// https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&key=AIzaSyDAMRC-ugJH9eDkbTMNTxdAWW1K1nNAKwE&videoId=kcTV3G-Wi34&textFormat=plainText&pageToken=

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: ({ videoId, nextPageToken = "" }) =>
                `/commentThreads?part=snippet%2Creplies&order=relevance&videoId=${videoId}&textFormat=plainText&pageToken=${nextPageToken}&key=${API_KEY}`,
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
        }),
    }),
});

export const { useGetCommentsQuery } = commentsApi;
