import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentLoader, { Facebook } from "react-content-loader";

import VideosListItem from "../video-list-item/VideosListItem";
import Portal from "../../../components/Portal";
import StatusMessage from "../../../components/StatusMessage";

import { fetchVideos } from "../videosSlice";

import "./videos-list.scss";

const VideosList = () => {
    const [filterParam, setFilterParam] = useState("All");

    const videos = useSelector((state) => state.videos.videos);
    const videosLoadingStatus = useSelector(
        (state) => state.videos.videosLoadingStatus
    );
    const nextPageToken = useSelector((state) => state.videos.nextPageToken);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideos({ nextPageToken, filterParam }));
    }, []);

    return (
        <>
            {/* {nextPageToken === "" && (
                <ContentLoader
                    speed={2}
                    viewBox="0 0 400 160"
                    backgroundColor="#909192"
                    foregroundColor="#ecebeb"
                    width={400}
                    height={160}
                >
                    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                </ContentLoader>
            )} */}
            <InfiniteScroll
                className="videos-list"
                dataLength={videos.length}
                next={() =>
                    dispatch(fetchVideos({ nextPageToken, filterParam }))
                }
                hasMore={nextPageToken ? true : false}
                scrollThreshold={0.9}
            >
                {videos.map((video, index) => (
                    <VideosListItem key={index} video={video} />
                ))}
            </InfiniteScroll>
            {videosLoadingStatus !== "idle" && (
                <Portal>
                    <StatusMessage status={videosLoadingStatus} />
                </Portal>
            )}
        </>
    );
};

export default VideosList;
