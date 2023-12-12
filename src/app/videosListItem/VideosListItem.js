import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import moment from "moment";

import { relatedVideosApi } from "../../pages/videoPage/relatedVideos/relatedVideosApi";

import { useGetChannelInfoQuery, useGetVideoInfoQuery } from "./listItemApi";

import VideoPreview from "./VideoPreview";

const VideosListItem = ({
    video,
    VideoDescription,
    type,
    onItemClick = () => {},
}) => {
    const dispatch = useDispatch();
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

    let classList = "videos-list__item";

    if (type) {
        classList += ` ${type}-videos-list__item`;
    }

    return (
        <Box
            className={classList}
            id={_videoId}
            onClick={() => {
                // additional onClick functionality
                onItemClick();

                // clear cache relatedVideosApi items
                dispatch(relatedVideosApi.util.resetApiState());

                navigate(`/watch?id=${_videoId}`, {
                    state: {
                        video: videoInfo.items[0],
                        channel: channelInfo.items[0],
                    },
                });
            }}
        >
            <Box className="videos-list__item-preview">
                <VideoPreview
                    alt={videoInfo?.items[0]?.snippet?.title}
                    src={videoInfo?.items[0]?.snippet?.thumbnails?.medium.url}
                    isLoading={isVideoInfoLoading}
                />
                <Text className="videos-list__item-duration">{_duration}</Text>
            </Box>

            <VideoDescription
                channelInfo={channelInfo}
                videoInfo={videoInfo}
                isLoading={isChannelInfoLoading}
            />
        </Box>
    );
};

export default VideosListItem;
