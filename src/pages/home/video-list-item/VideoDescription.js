import React from "react";
import { Box, Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import moment from "moment";

const VideoDescription = ({ channelInfo, videoInfo }) => {
    return (
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
                        channelInfo?.items[0]?.snippet?.thumbnails?.default?.url
                    }
                />
            </Box>
            <Box className="videos-list__item-info">
                <Heading className="videos-list__item-title" as="h3" size="sm">
                    {videoInfo?.items[0]?.snippet?.title}
                </Heading>
                <Text className="videos-list__item_channel-name" fontSize="sm">
                    {channelInfo?.items[0]?.snippet?.title}
                </Text>
                <Text fontSize="sm">
                    <span>
                        {Intl.NumberFormat("en", {
                            notation: "compact",
                        }).format(+videoInfo?.items[0]?.statistics?.viewCount)}
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
    );
};

export default VideoDescription;
