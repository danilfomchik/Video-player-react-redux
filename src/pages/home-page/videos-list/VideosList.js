import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "@chakra-ui/react";

import VideosListItem from "../video-list-item/VideosListItem";
import Portal from "../../../components/Portal";
import StatusMessage from "../../../components/StatusMessage";
import VideoSkeleton from "../../../components/VideoSkeleton";

import { videosCount } from "../../../utils/constants";
import { fetchVideos, resetVideosList } from "./videosSlice";

import "./videos-list.scss";

const VideosList = () => {
    const videos = useSelector((state) => state.videos.videos);
    const videosFetchStatus = useSelector(
        (state) => state.videos.videosFetchStatus
    );
    const nextPageToken = useSelector((state) => state.videos.nextPageToken);
    const currentCategory = useSelector(
        (state) => state.categories.currentCategory
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideos({ nextPageToken, currentCategory }));

        return () => dispatch(resetVideosList());
    }, [currentCategory]);

    const renderSkeletonList = () => {
        let skeletonList = [];

        for (let i = 0; i < videosCount; i++) {
            skeletonList[i] = <VideoSkeleton key={i} />;
        }

        return skeletonList;
    };

    const renderVideosList = useCallback(
        (videos) => {
            return videos.map((video, index) => (
                <VideosListItem key={index} video={video} />
            ));
        },
        [nextPageToken]
    );

    // const skeletonList = renderSkeletonList();
    const videosList = renderVideosList(videos);

    return (
        <>
            <InfiniteScroll
                // className="videos-list"
                dataLength={videos.length}
                next={() =>
                    dispatch(fetchVideos({ nextPageToken, currentCategory }))
                }
                hasMore={nextPageToken ? true : false}
                scrollThreshold={0.9}
            >
                <div className="videos-list">
                    {nextPageToken === "" && videos.length < videosCount
                        ? renderSkeletonList()
                        : videosList}
                </div>
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
