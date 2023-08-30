import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import InfiniteScroll from "react-infinite-scroll-component";

import { Box } from "@chakra-ui/react";

import VideosListItem from "../video-list-item/VideosListItem";

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

    // --------------
    // style
    // if (videosLoadingStatus === "loading") {
    //     return <h1>Loading</h1>;
    // } else if (videosLoadingStatus === "error") {
    //     return <h1>error</h1>;
    // }
    // --------------

    useEffect(() => {
        dispatch(fetchVideos({ nextPageToken, filterParam }));
    }, []);

    return (
        <>
            {/* <Box className="videos-list"> */}
            <InfiniteScroll
                className="videos-list"
                dataLength={videos.length}
                next={() =>
                    dispatch(fetchVideos({ nextPageToken, filterParam }))
                }
                hasMore={nextPageToken ? true : false}
                scrollThreshold={0.9}
                // loader={
                //     <div className="loader" key={0}>
                //         Loading ...
                //     </div>
                // }
            >
                {videos.map((video, index) => (
                    <VideosListItem key={index} video={video} />
                ))}
            </InfiniteScroll>
            {/* </Box> */}
        </>
    );
};

export default VideosList;
