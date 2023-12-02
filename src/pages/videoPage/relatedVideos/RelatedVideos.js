import React, { memo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";

import img from "../../../assets/icon.png";

import VideosListItemLayout from "../../../app/videosListItem/VideosListItemLayout";
import VideoDescription from "../relatedVideosItem/VideoDescription";
import withListItem from "../../../app/videosListItem/withListItem";

import httpRequest from "../../../utils/httpRequest";

import { BASE_URL, API_KEY } from "../../../utils/constants";
import {
    api,
    useGetRelatedVideosQuery,
    useLazyGetRelatedVideosQuery,
} from "../../../api/api";

import "./related-videos.scss";

const RelatedVideos = memo(({ videoId, query }) => {
    const dispatch = useDispatch();
    // console.log("mount");

    const [nextPageToken, setNextPageToken] = useState("");
    // const [relatedVideos, setRelatedVideos] = useState([]);

    const {
        data,
        isError,
        isLoading,
        isFetching,
        refetch: refetchRelatedVideos,
    } = useGetRelatedVideosQuery({
        query: encodeURIComponent(query),
        nextPageToken,
    });

    useEffect(() => {
        setNextPageToken("");
    }, [videoId]);

    const relatedVideos = data?.items || [];

    const RelatedVideosItem = withListItem(
        VideosListItemLayout,
        VideoDescription
    );

    return (
        <Box className="related-videos">
            {relatedVideos.map((video, index) => (
                <RelatedVideosItem
                    key={index}
                    video={video}
                    type="relatedVideos"
                />
            ))}

            {isFetching && <h1>LOADING...</h1>}

            {relatedVideos.length > 0 && (
                <button
                    onClick={() => {
                        setNextPageToken(data.nextPageToken);
                    }}
                >
                    LOAD MORE
                </button>
            )}
        </Box>
    );
});

export default RelatedVideos;
