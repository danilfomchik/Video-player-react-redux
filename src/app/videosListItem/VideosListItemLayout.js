import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

import VideoPreview from "./VideoPreview";

import { api } from "../../api/api";

const VideosListItemLayout = ({
    VideoDescription,
    type,
    videoId,
    channelInfo,
    isChannelInfoLoading,
    videoInfo,
    isVideoInfoLoading,
    duration,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let classList = "videos-list__item";

    if (type === "relatedVideos") {
        classList += " suggested-videos-list__item";
    }

    return (
        <Box
            className={classList}
            id={videoId}
            onClick={() => {
                dispatch(api.util.resetApiState());
                navigate(`/watch?id=${videoId}`, {
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
                <Text className="videos-list__item-duration">{duration}</Text>
            </Box>

            <VideoDescription
                channelInfo={channelInfo}
                videoInfo={videoInfo}
                isLoading={isChannelInfoLoading}
            />
        </Box>
    );
};

export default VideosListItemLayout;
