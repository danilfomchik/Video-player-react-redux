import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY, videosCount } from "../utils/constants";

// топ статья для ртк квери https://habr.com/ru/companies/alfa/articles/705640/

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getVideoInfo: builder.query({
            query: (videoId) =>
                `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`,
            providesTags: ["VideoInfo"],
        }),
        getChannelInfo: builder.query({
            query: (channelId) =>
                `/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${API_KEY}`,
            providesTags: ["ChannelInfo"],
        }),
    }),
});

export const { useGetChannelInfoQuery, useGetVideoInfoQuery } = api;
