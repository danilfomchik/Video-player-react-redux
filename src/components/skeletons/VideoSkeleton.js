import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";

const VideoSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            viewBox="0 0 330 327"
            backgroundColor="#909192"
            foregroundColor="#ecebeb"
            width={330}
            height={327}
            className="videos-list__item"
        >
            <rect x="5" y="5" rx="6" ry="6" width="320" height="190" />
            <rect x="5" y="216" rx="100" ry="100" width="35" height="35" />
            <rect x="50" y="216" rx="4" ry="4" width="260" height="20" />
            <rect x="50" y="245" rx="3" ry="3" width="170" height="15" />
            <rect x="50" y="264" rx="3" ry="3" width="220" height="15" />
        </ContentLoader>
    );
};

export default VideoSkeleton;
