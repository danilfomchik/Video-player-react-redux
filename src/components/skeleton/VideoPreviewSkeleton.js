import React from "react";
import { Image } from "@chakra-ui/react";

import previewSkeleton from "./preview-skeleton.png";

const VideoPreviewSkeleton = () => {
    return (
        <Image
            className="videos-list__item-thumbnail skeleton"
            src={previewSkeleton}
            alt="Video preview skeleton"
        />
    );
};

export default VideoPreviewSkeleton;
