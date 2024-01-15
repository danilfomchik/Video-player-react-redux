import { useSelector } from "react-redux";
import { Box, Tooltip, Avatar } from "@chakra-ui/react";

import { useFirebase } from "../../../app/useFirebase";

import Channel from "./channel/Channel";
import LikeSvg from "../LikeSvg";
import SaveSvg from "./SaveSvg";

import "./video.scss";

const Video = ({ videoInfo, id }) => {
    const {
        video: {
            statistics: { likeCount },
            snippet: { title: videoTitle },
        },
        channel,
    } = videoInfo;

    return (
        <Box className="video">
            <Box className="video-player">
                <iframe
                    className="video-iframe"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&start=1`}
                    title={videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                ></iframe>
            </Box>

            <h1 className="video-title">{videoTitle}</h1>

            <Box className="video-info">
                <Channel channel={channel} />

                <Box className="video-actions">
                    <LikeSvg width={25} height={25} viewBox={`0 0 25 25`} />
                    <span className="video-likes-count">
                        {Intl.NumberFormat("en", {
                            notation: "compact",
                        }).format(likeCount)}{" "}
                        likes
                    </span>
                    <Box className="activity__btn add-to-library__btn">
                        <Tooltip
                            margin="0px 0px 10px"
                            label="Add to playlist"
                            bg="#6B7280"
                            color="#ffffff"
                            fontSize="15px"
                        >
                            <button
                            // onClick={() =>
                            //     onAddDataToPlaylist("new video", "likedVideos")
                            // }
                            >
                                <SaveSvg />
                                <span>Add to playlist</span>
                            </button>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Video;
