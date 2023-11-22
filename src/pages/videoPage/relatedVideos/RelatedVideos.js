import React, { memo, useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import img from "../../../assets/icon.png";

import VideosListItemLayout from "../../../app/videosListItem/VideosListItemLayout";
import VideoDescription from "../relatedVideosItem/VideoDescription";

// import VideosListItem from "../../home/video-list-item/VideosListItem";
// import SuggestedVideosItemLayout from "../suggestedVideosItem/SuggestedVideosItemLayout";
import withListItem from "../../../app/videosListItem/withListItem";

import httpRequest from "../../../utils/httpRequest";

import { BASE_URL, API_KEY } from "../../../utils/constants";
import { useGetRelatedVideosQuery } from "../../../api/api";

import "./related-videos.scss";

const RelatedVideos = memo(({ query }) => {
    const {
        data: relatedVideos,
        isError,
        isLoading,
        isFetching,
        refetch: refetchRelatedVideos,
    } = useGetRelatedVideosQuery(encodeURIComponent(query));

    // НУЖНО СОХРАНЯТЬ NEXT PAGE TOKEN ДЛЯ ПАГИНАЦИИ.
    // при подгрузке менять NEXT PAGE TOKEN и делать рефетч
    // при клике на видео нужно скролить страницу вверх

    // -----------------------

    const RelaedVideosItem = withListItem(
        VideosListItemLayout,
        VideoDescription
    );

    return (
        <Box className="related-videos">
            {relatedVideos?.items.map((video, index) => (
                <RelaedVideosItem
                    key={index}
                    video={video}
                    type="relatedVideos"
                />
            ))}
        </Box>
    );
});

export default RelatedVideos;
