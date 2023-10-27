import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY, videosCount } from "../utils/constants";

export const videosApi = createApi({
    reducerPath: "videosApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getAllVideosList: builder.query({
            query: (nextPageToken) =>
                `/videos?part=snippet,contentDetails,statistics&maxResults=${videosCount}&chart=mostPopular&regionCode=UA&relevanceLanguage=uk&pageToken=${
                    nextPageToken ?? ""
                }&videoDuration=medium&key=${API_KEY}`,
        }),
        getAllVideosListBySearch: builder.query({
            query: (searchValue, nextPageToken) =>
                `/search?part=snippet&chart=mostPopular&relevanceLanguage=uk&maxResults=${videosCount}&q=${searchValue}&type=video&regionCode=UA&pageToken=${
                    nextPageToken ?? ""
                }&videoDuration=medium&key=${API_KEY}`,
        }),
        getVideosListWithParams: builder.query({
            query: (searchValue, currentCategory, nextPageToken) =>
                `/search?part=snippet&relevanceLanguage=uk&maxResults=${videosCount}&q=${searchValue}&videoCategoryId=${currentCategory}&type=video&regionCode=UA&pageToken=${
                    nextPageToken ?? ""
                }&videoDuration=medium&key=${API_KEY}`,
        }),
    }),
});

export const {
    useGetAllVideosListQuery,
    useGetAllVideosListBySearchQuery,
    useGetVideosListWithParamsQuery,
} = videosApi;

// из-за того что пагинация идет не постранично, а дозагрузкой - такой подход не получиться
