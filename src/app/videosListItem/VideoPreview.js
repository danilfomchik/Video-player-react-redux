import React from "react";
import { Image } from "@chakra-ui/react";

import VideoPreviewSkeleton from "../../components/skeleton/video/VideoPreviewSkeleton";

const VideoPreview = ({ src, isLoading, ...rest }) => {
    return (
        <>
            {isLoading ? (
                <VideoPreviewSkeleton />
            ) : (
                <Image
                    className="videos-list__item-thumbnail"
                    src={src}
                    {...rest}
                />
            )}
        </>
    );
};

export default VideoPreview;
