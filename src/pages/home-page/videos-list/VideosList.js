import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import VideosListItem from "../video-list-item/VideosListItem";

import { fetchVideos } from "../videosSlice";

import "./videos-list.scss";

const VideosList = () => {
    // для пагинации используется pageToken (nextPageToken, prevPageToken)
    const videos = useSelector((state) => state.videos.videos);
    const dispatch = useDispatch();

    useEffect(() => {
        // два параметра в обьект нужно
        dispatch(fetchVideos({ nextPageToken: "", filterParam: "All" }));
    }, []);

    return (
        <Box className="videos-list">
            {videos.map((video, index) => {
                return <VideosListItem key={index} video={video} />;
            })}
        </Box>
    );
};

export default VideosList;
