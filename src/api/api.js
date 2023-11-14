import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY, videosCount } from "../utils/constants";

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
        getSuggestedVideos: builder.query({
            query: (query) =>
                `/search?part=snippet&maxResults=8&type=video&q=${
                    query || ""
                }&order=viewCount&videoDuration=medium&key=${API_KEY}`,
            providesTags: ["SuggestedVideos"],
        }),
    }),
});

export const {
    useGetSuggestedVideosQuery,
    useGetChannelInfoQuery,
    useGetVideoInfoQuery,
} = api;
