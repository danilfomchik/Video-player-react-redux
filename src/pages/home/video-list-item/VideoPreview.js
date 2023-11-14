import React from "react";
import { Image } from "@chakra-ui/react";

const VideoPreview = ({ src, ...rest }) => {
    return (
        <Image className="videos-list__item-thumbnail" src={src} {...rest} />
    );
};

export default VideoPreview;
