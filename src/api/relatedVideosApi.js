import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    BASE_URL,
    API_KEY,
    RAPIDAPI_KEY,
    videosCount,
} from "../utils/constants";

// топ статья для ртк квери https://habr.com/ru/companies/alfa/articles/705640/

const relatedVideosHeader = {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: relatedVideosHeader });

// https://youtube-v3-lite.p.rapidapi.com/search?relatedToVideoId=arj7oStGLkU&part=id%2Csnippet&type=video

export const relatedVideosApi = createApi({
    reducerPath: "relatedVideosApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://youtube-v3-alternative.p.rapidapi.com/related",
    }),
    endpoints: (builder) => ({
        getRelatedVideos: builder.query({
            query: (id) =>
                createRequest(
                    // `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`
                    `?id=${id}&geo=UA`
                ),
        }),
    }),
});

// https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=0S3Bzw-n2e4&type=video&key=AIzaSyD5M3tfBDKqVJTjCPS6yOMa9LBlDQvIjGI

export const {
    useGetRelatedVideosQuery,
    // useGetChannelInfoQuery,
    // useGetVideoInfoQuery,
} = relatedVideosApi;
