import React from "react";
import { Box, Flex, Heading, Text, Avatar } from "@chakra-ui/react";

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
                        <Avatar
                            bg="#E11D48"
                            boxSize="35px"
                            name={channelInfo?.items[0]?.snippet?.title}
                            src={
                                channelInfo?.items[0]?.snippet?.thumbnails
                                    ?.default?.url
                            }
                        />
                    </Box>
                    <Box className="videos-list__item-info">
                        <Heading
                            className="videos-list__item-title"
                            as="h3"
                            size="sm"
                        >
                            {videoInfo?.items[0]?.snippet?.title}
                        </Heading>
                        <Text
                            className="videos-list__item_channel-name"
                            fontSize="sm"
                        >
                            {channelInfo?.items[0]?.snippet?.title}
                        </Text>

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
