import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import moment from "moment";
import RelatedVideosItemDescriptionSkeleton from "./RelatedVideosItemDescriptionSkeleton";
import VideoStatistics from "../../../components/videoStatistics/VideoStatistics";

const RelatedVideosItemDescription = ({
    channelInfo,
    videoInfo,
    isLoading,
}) => {
    return (
        <>
            {isLoading ? (
                <RelatedVideosItemDescriptionSkeleton />
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

                        <VideoStatistics
                            viewCount={
                                videoInfo?.items[0]?.statistics?.viewCount
                            }
                            publishedAt={
                                videoInfo?.items[0]?.snippet?.publishedAt
                            }
                            className="videos-list__item-statistics"
                        />
                    </Box>
                </Flex>
            )}
        </>
    );
};

export default RelatedVideosItemDescription;
