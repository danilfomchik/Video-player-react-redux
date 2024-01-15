import React from "react";
import { Box, Flex, Heading, Text, Avatar, Tooltip } from "@chakra-ui/react";

import VideoStatistics from "../../components/videoStatistics/VideoStatistics";
import VideoDescriptionSkeleton from "../../components/skeleton/video/VideoDescriptionSkeleton";

const VideoDescription = ({ channelInfo, videoInfo, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <VideoDescriptionSkeleton />
            ) : (
                <Flex padding="16px 5px 0px" style={{ gap: "0.5rem" }}>
                    <Box
                        id={channelInfo?.items[0]?.id}
                        className="videos-list__item-channel"
                    >
                        <Tooltip
                            margin="10px 0px 0px"
                            label={channelInfo?.items[0]?.snippet?.title}
                            bg="#6B7280"
                            color="#ffffff"
                        >
                            <Avatar
                                bg="#E11D48"
                                boxSize="35px"
                                name={channelInfo?.items[0]?.snippet?.title}
                                src={
                                    channelInfo?.items[0]?.snippet?.thumbnails
                                        ?.default?.url
                                }
                            />
                        </Tooltip>
                    </Box>
                    <Box className="videos-list__item-info">
                        <Heading
                            className="videos-list__item-title"
                            as="h3"
                            size="sm"
                        >
                            {videoInfo?.items[0]?.snippet?.title}
                        </Heading>
                        <Tooltip
                            margin="0px 0px 10px"
                            label={channelInfo?.items[0]?.snippet?.title}
                            placement="bottom-start"
                            bg="#6B7280"
                            color="#ffffff"
                        >
                            <Text
                                className="videos-list__item_channel-name"
                                fontSize="sm"
                            >
                                {channelInfo?.items[0]?.snippet?.title}
                            </Text>
                        </Tooltip>

                        <VideoStatistics
                            viewCount={
                                videoInfo?.items[0]?.statistics?.viewCount
                            }
                            publishedAt={
                                videoInfo?.items[0]?.snippet?.publishedAt
                            }
                        />
                    </Box>
                </Flex>
            )}
        </>
    );
};

export default VideoDescription;
