import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";
import { Box, Image, Flex, Heading, Text, Avatar } from "@chakra-ui/react";

import VideoPreviewSkeleton from "./VideoPreviewSkeleton";
import VideoDescriptionSkeleton from "./VideoDescriptionSkeleton";

import "./skeleton.scss";

const VideoSkeleton = () => {
    return (
        <Box className="videos-list__item skeleton">
            <VideoPreviewSkeleton />
            <VideoDescriptionSkeleton />
        </Box>
    );
};

export default VideoSkeleton;
