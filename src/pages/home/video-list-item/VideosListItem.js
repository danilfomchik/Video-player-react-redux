import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { Box, Image, Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import moment from "moment";
import ContentLoader, { Facebook } from "react-content-loader";

import VideoPreview from "./VideoPreview";
import VideoPreviewSkeleton from "../../../components/skeleton/VideoPreviewSkeleton";

import VideoDescription from "./VideoDescription";
import VideoDescriptionSkeleton from "../../../components/skeleton/VideoDescriptionSkeleton";

import { loadMoreVideos } from "../videos-list/videosSlice";

import { useGetChannelInfoQuery, useGetVideoInfoQuery } from "../../../api/api";

import useDataFetching from "../../../hooks/useDataFetching";
import httpRequest from "../../../utils/httpRequest";
import { BASE_URL, API_KEY } from "../../../utils/constants";

import "./video-list-item.scss";

const VideosListItem = ({ video }) => {
    const navigate = useNavigate();

    const {
        id,
        snippet: { channelId },
        contentDetails,
    } = video;

    const _videoId = id?.videoId || contentDetails?.videoId || id;

    const {
        data: channelInfo,
        isLoading: isChannelInfoLoading,
        isFetching: isChannelInfoFetching,
    } = useGetChannelInfoQuery(channelId, { refetchOnReconnect: true });

    const {
        data: videoInfo,
        isLoading: isVideoInfoLoading,
        isFetching: isVideoInfoFetching,
    } = useGetVideoInfoQuery(_videoId, { refetchOnReconnect: true });

    const givenDuration = videoInfo?.items[0]?.contentDetails?.duration;

    const seconds = moment.duration(givenDuration).asSeconds();
    const _duration = moment
        .utc(seconds * 1000)
        .format(givenDuration?.includes("H") ? "h:mm:ss" : "mm:ss");

    return (
        <Box
            className="videos-list__item"
            id={_videoId}
            onClick={() => {
                navigate(`/watch?id=${_videoId}`, {
                    state: {
                        video: videoInfo.items[0],
                        channel: channelInfo.items[0],
                    },
                });
            }}
        >
            <Box className="videos-list__item-preview">
                {isVideoInfoFetching ? (
                    <VideoPreviewSkeleton />
                ) : (
                    <VideoPreview
                        alt={videoInfo?.items[0]?.snippet?.title}
                        src={
                            videoInfo?.items[0]?.snippet?.thumbnails?.medium.url
                        }
                    />
                )}

                <Text className="videos-list__item-duration">{_duration}</Text>
            </Box>

            {isChannelInfoFetching ? (
                <VideoDescriptionSkeleton />
            ) : (
                <VideoDescription
                    channelInfo={channelInfo}
                    videoInfo={videoInfo}
                />
            )}
        </Box>
    );
};

export default VideosListItem;
