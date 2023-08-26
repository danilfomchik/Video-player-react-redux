import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import httpRequest from "../../utils/httpRequest";

import { BASE_URL, API_KEY } from "../../utils/constants";

const initialState = {
    videos: [],
    issuesLoadingStatus: "idle",
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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.issuesLoadingStatus = "loading";
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.issuesLoadingStatus = "idle";
                state.videos = action.payload.items;
            })
            .addCase(fetchVideos.rejected, (state) => {
                state.issuesLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { reducer } = videosSlice;

export default reducer;
