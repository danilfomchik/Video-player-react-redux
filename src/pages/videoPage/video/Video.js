import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

import LikeSvg from "./LikeSvg";
import SaveSvg from "./SaveSvg";

import useDataFetching from "../../../hooks/useDataFetching";

import { API_KEY } from "../../../utils/constants";

import "./video.scss";

const Video = ({ videoInfo, id }) => {
    const {
        video: {
            statistics: { likeCount },
            snippet: { title: videoTitle },
        },
        channel: {
            snippet: {
                title: channelTitle,
                thumbnails: {
                    default: { url: channelThumbnail },
                },
            },
            statistics: { subscriberCount },
        },
    } = videoInfo;

    return (
        <Box className="video">
            <Box className="video-player">
                <iframe
                    className="video-iframe"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`}
                    title={videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                ></iframe>
            </Box>

            <h1 className="video-title">{videoTitle}</h1>

            <Box className="video-info">
                <Box className="channel">
                    <Box className="channel-info">
                        <Avatar
                            bg="#E11D48"
                            boxSize="40px"
                            name={channelTitle}
                            src={channelThumbnail}
                        />
                        <Box className="channel-statistics">
                            <span className="channel-title">
                                {channelTitle}
                            </span>
                            <span className="channel-subs-count">
                                {Intl.NumberFormat("en", {
                                    notation: "compact",
                                    maximumSignificantDigits: 5,
                                }).format(+subscriberCount)}{" "}
                                subscribers
                            </span>
                        </Box>
                    </Box>

                    <Box className="channel-subscribe__btn">
                        <button>Subscribe</button>
                    </Box>
                </Box>

                <Box className="video-actions">
                    <LikeSvg />
                    <span className="video-likes-count">
                        {Intl.NumberFormat("en", {
                            notation: "compact",
                        }).format(likeCount)}{" "}
                        likes
                    </span>
                    <Box className="add-to-playlist__btn">
                        <button>
                            <SaveSvg />
                            <span>Add to playlist</span>
                        </button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Video;
