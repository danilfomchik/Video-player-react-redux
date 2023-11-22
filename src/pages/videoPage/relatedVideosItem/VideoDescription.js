import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import moment from "moment";
import VideoDescriptionSkeleton from "./VideoDescriptionSkeleton";

const VideoDescription = ({ channelInfo, videoInfo, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <VideoDescriptionSkeleton />
            ) : (
                <Flex className="video-description">
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
                        <Text
                            className="videos-list__item-statistics"
                            fontSize="sm"
                        >
                            <span>
                                {Intl.NumberFormat("en", {
                                    notation: "compact",
                                }).format(
                                    +videoInfo?.items[0]?.statistics?.viewCount
                                )}
                            </span>{" "}
                            •{" "}
                            <span>
                                {moment(
                                    videoInfo?.items[0]?.snippet?.publishedAt
                                ).fromNow()}
                            </span>
                        </Text>
                    </Box>
                </Flex>
            )}
        </>
    );
};

export default VideoDescription;
