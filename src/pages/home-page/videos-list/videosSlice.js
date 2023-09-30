import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import httpRequest from "../../../utils/httpRequest";

import { BASE_URL, API_KEY, videosCount } from "../../../utils/constants";

const initialState = {
    videos: [],
    videosFetchStatus: "idle",
    nextPageToken: "",
};

export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    ({ nextPageToken = "", currentCategory, searchValue }) => {
        const { request } = httpRequest();

        if (currentCategory === "0" && !searchValue) {
            return request(
                `${BASE_URL}/videos?part=snippet,contentDetails,statistics&maxResults=${videosCount}&chart=mostPopular&regionCode=UA&relevanceLanguage=uk&pageToken=${
                    nextPageToken ?? ""
                }&videoDuration=medium&key=${API_KEY}`
            );
        } else if (currentCategory === "0" && searchValue) {
            return request(
                `${BASE_URL}/search?part=snippet&chart=mostPopular&relevanceLanguage=uk&maxResults=${videosCount}&q=${searchValue}&type=video&regionCode=UA&pageToken=${
                    nextPageToken ?? ""
                }&videoDuration=medium&key=${API_KEY}`
            );
        } else if (currentCategory !== "0") {
            return request(
                `${BASE_URL}/search?part=snippet&relevanceLanguage=uk&maxResults=${videosCount}&q=${searchValue}&videoCategoryId=${currentCategory}&type=video&regionCode=UA&pageToken=${
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
