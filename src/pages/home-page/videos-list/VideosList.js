import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import VideosListItem from "../video-list-item/VideosListItem";
import Portal from "../../../components/Portal";
import StatusMessage from "../../../components/StatusMessage";
import VideoSkeleton from "../../../components/VideoSkeleton";

import { fetchVideos } from "../videosSlice";

import "./videos-list.scss";

const VideosList = () => {
    const [filterParam, setFilterParam] = useState("All");

    const videos = useSelector((state) => state.videos.videos);
    const videosFetchStatus = useSelector(
        (state) => state.videos.videosFetchStatus
    );
    const nextPageToken = useSelector((state) => state.videos.nextPageToken);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideos({ nextPageToken, filterParam }));
    }, []);

    const renderSkeletonList = () => {
        let skeletonList = [];

        for (let i = 0; i <= 8; i++) {
            skeletonList[i] = <VideoSkeleton key={i} />;
        }

        return skeletonList;
    };

    const renderVideosList = (videos) => {
        return videos.map((video, index) => (
            <VideosListItem key={index} video={video} />
        ));
    };

    const skeletonList = renderSkeletonList();
    const videosList = renderVideosList(videos);

    return (
        <>
            <InfiniteScroll
                className="videos-list"
                dataLength={videos.length}
                next={() =>
                    dispatch(fetchVideos({ nextPageToken, filterParam }))
                }
                hasMore={nextPageToken ? true : false}
                scrollThreshold={0.9}
            >
                {nextPageToken === "" ? skeletonList : videosList}
            </InfiniteScroll>
            {videosFetchStatus !== "idle" && (
                <Portal>
                    <StatusMessage status={videosFetchStatus} />
                </Portal>
            )}
        </>
    );
};

export default VideosList;
