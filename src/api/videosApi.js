import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY, videosCount } from "../utils/constants";

export const videosApi = createApi({
    reducerPath: "videosApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getVideosList: builder.query({
            query: (currentCategory, searchValue = "", nextPageToken) => {
                // console.log(currentCategory, searchValue, nextPageToken);

                if (currentCategory === "0" && !searchValue) {
                    console.log('currentCategory === "0" && !searchValue');

                    return `${BASE_URL}/videos?part=snippet,contentDetails,statistics&type=video&maxResults=${videosCount}&chart=mostPopular&regionCode=UA&pageToken=${
                        nextPageToken ?? ""
                    }&videoDuration=medium&key=${API_KEY}`;
                } else if (currentCategory === "0" && searchValue) {
                    console.log('currentCategory === "0" && searchValue');

                    return `${BASE_URL}/search?part=snippet&chart=mostPopular&maxResults=${videosCount}&q=${searchValue}&type=video&regionCode=UA&pageToken=${
                        nextPageToken ?? ""
                    }&videoDuration=medium&key=${API_KEY}`;
                } else {
                    console.log("else");

                    return `${BASE_URL}/search?part=snippet&maxResults=${videosCount}&q=${searchValue}&videoCategoryId=${currentCategory}&type=video&regionCode=UA&pageToken=${
                        nextPageToken ?? ""
                    }&videoDuration=medium&key=${API_KEY}`;
                }
            },
            async onQueryStarted(
                { currentCategory, searchValue = "", nextPageToken, ...body },
                { dispatch, queryFulfilled }
            ) {
                const patchResult = dispatch(
                    videosApi.util.updateQueryData(
                        "getVideosList",
                        currentCategory,
                        searchValue,
                        nextPageToken,
                        (draft) => Object.assign(draft, body)
                    )
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
            // serializeQueryArgs: ({ endpointName }) => {
            //     return endpointName;
            // },
            // merge: (currentCache, newItems) => {
            //     currentCache.results.push(...newItems.results);
            // },
            // forceRefetch(currentArg, previousArg) {
            //     return currentArg !== previousArg;
            // },
        }),
    }),
});

export const { useGetVideosListQuery } = videosApi;
