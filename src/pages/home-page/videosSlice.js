import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import httpRequest from "../../utils/httpRequest";

import { BASE_URL, API_KEY } from "../../utils/constants";

const initialState = {
    videos: [],
    videosLoadingStatus: "idle",
    nextPageToken: "",
};

export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    ({ nextPageToken = "", filterParam }) => {
        const { request } = httpRequest();

        if (filterParam === "All") {
            return request(
                `${BASE_URL}/videos?part=snippet,contentDetails,statistics&maxResults=8&chart=mostPopular&regionCode=UA&pageToken=${
                    nextPageToken ?? ""
                }&videoDuration=medium&key=${API_KEY}`
            );
        } else {
            return request(
                `${BASE_URL}/search?part=snippet&maxResults=8&type=video&q=${filterParam}&pageToken=${
                    nextPageToken ?? ""
                }&videoDuration=medium&key=${API_KEY}`
            );
        }
    }
);

const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        // loadMoreVideos: (state, action) => {
        //     state.videos += action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.videosLoadingStatus = "loading";
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                // console.log(action.payload.items);

                state.videosLoadingStatus = "idle";
                state.nextPageToken = action.payload.nextPageToken;

                state.videos = [...state.videos, ...action.payload.items];
                // state.videos.push(...action.payload.items);
            })
            .addCase(fetchVideos.rejected, (state) => {
                state.videosLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { reducer, actions } = videosSlice;

export const { loadMoreVideos } = actions;

export default reducer;
