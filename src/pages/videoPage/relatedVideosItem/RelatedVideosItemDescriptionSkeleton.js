import React from "react";
import { Box, Flex, Heading, Text, Avatar } from "@chakra-ui/react";

const VideoDescriptionSkeleton = () => {
    return (
        <Flex
            padding="0px 5px 0px"
            style={{ gap: "0.5rem" }}
            className="skeleton"
        >
            <Box className="videos-list__item-info">
                <Heading
                    className="videos-list__item-title"
                    as="h3"
                    size="sm"
                    height="39px"
                    margin="0px 5px 8px 0px"
                    borderRadius="4px"
                    background={"#909192"}
                ></Heading>
                <Text
                    className="videos-list__item_channel-name"
                    fontSize="sm"
                    width="170px"
                    height="15px"
                    margin="0px 0px 4px"
                    borderRadius="3px"
                    background={"#909192"}
                ></Text>
                <Text
                    fontSize="sm"
                    width="220px"
                    height="15px"
                    borderRadius="3px"
                    background={"#909192"}
                ></Text>
            </Box>
        </Flex>
    );
};

export default VideoDescriptionSkeleton;
