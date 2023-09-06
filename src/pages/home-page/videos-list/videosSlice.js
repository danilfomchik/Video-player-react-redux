import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import httpRequest from "../../../utils/httpRequest";

import { BASE_URL, API_KEY } from "../../../utils/constants";

const initialState = {
    videos: [],
    videosFetchStatus: "idle",
    nextPageToken: "",
};

export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    ({ nextPageToken = "", currentCategory }) => {
        const { request } = httpRequest();

        if (currentCategory === "all") {
            return request(
                `${BASE_URL}/videos?part=snippet,contentDetails,statistics&maxResults=24&chart=mostPopular&regionCode=UA&pageToken=${
                    nextPageToken ?? ""
                }&videoDuration=medium&key=${API_KEY}`
            );
        } else {
            // using for filter by query and by category
            return request(
                `${BASE_URL}/search?part=snippet&maxResults=24&type=video&chart=mostPopular&regionCode=UA&q=${currentCategory}&pageToken=${
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
        resetVideosList: (state, action) => {
            state.videos = [];
            state.nextPageToken = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.videosFetchStatus = "loading";
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.videosFetchStatus = "idle";
                state.nextPageToken = action.payload.nextPageToken;

                state.videos = [...state.videos, ...action.payload.items];
            })
            .addCase(fetchVideos.rejected, (state) => {
                state.videosFetchStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { reducer, actions } = videosSlice;

export const { resetVideosList } = actions;

export default reducer;
