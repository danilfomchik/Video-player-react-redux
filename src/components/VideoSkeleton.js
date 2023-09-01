import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";

const VideoSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            viewBox="0 0 310 280"
            backgroundColor="#909192"
            foregroundColor="#ecebeb"
            width={310}
            height={280}
            // className="videos-list__item"
        >
            <rect x="0" y="5" rx="6" ry="6" width="310" height="180" />
            <rect x="0" y="206" rx="100" ry="100" width="35" height="35" />
            <rect x="50" y="206" rx="4" ry="4" width="250" height="20" />
            <rect x="50" y="234" rx="3" ry="3" width="160" height="10" />
            <rect x="50" y="248" rx="3" ry="3" width="210" height="10" />
        </ContentLoader>
    );
};

export default VideoSkeleton;
