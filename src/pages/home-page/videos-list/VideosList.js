import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Box } from "@chakra-ui/react";

import VideosListItem from "../video-list-item/VideosListItem";
import Portal from "../../../components/Portal";
import StatusMessage from "../../../components/StatusMessage";
import VideoSkeleton from "../../../components/skeletons/VideoSkeleton";

import { videosCount } from "../../../utils/constants";
import { fetchVideos, resetVideosList } from "./videosSlice";

import skeletonList from "../../../components/skeletons/skeletonList";

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

        // return () => dispatch(resetVideosList());
    }, [currentCategory]);

    // const renderVideosList = useCallback(() => {
    //     return videos.map((video, index) => (
    //         <CSSTransition
    //             nodeRef={itemRefs.current[index + 1]}
    //             key={index}
    //             timeout={900}
    //             mountOnEnter={true}
    //             classNames="item"
    //         >
    //             <VideosListItem key={index} video={video} />
    //         </CSSTransition>
    //     ));
    // }, [currentCategory]);

    let itemRefs = useRef([]);

    // const videosList = renderVideosList();

    // console.log(videos);
    return (
        <>
            <InfiniteScroll
                dataLength={videos.length}
                next={() =>
                    dispatch(fetchVideos({ nextPageToken, currentCategory }))
                }
                hasMore={nextPageToken ? true : false}
                scrollThreshold={0.97}
            >
                <Box className="videos-list">
                    {nextPageToken === "" &&
                        videos.length < videosCount &&
                        skeletonList}
                    <TransitionGroup component={null} appear={true}>
                        {videos.map((video, index) => (
                            <CSSTransition
                                nodeRef={itemRefs.current[index + 1]}
                                key={index}
                                timeout={900}
                                mountOnEnter={true}
                                classNames="item"
                            >
                                <VideosListItem key={index} video={video} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </Box>
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
