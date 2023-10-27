import React from "react";
import { Box } from "@chakra-ui/react";

import httpRequest from "../../../utils/httpRequest";
import { BASE_URL, API_KEY } from "../../../utils/constants";

import "./video.scss";
import { useEffect } from "react";
import { useState } from "react";

const Video = ({ id }) => {
    const { request } = httpRequest();

    const [videoInfo, setVideoInfo] = useState({});

    const getVideoInfo = async () => {
        const data = await request({
            url:
                BASE_URL +
                `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`,
        });

        setVideoInfo(data);
    };

    useEffect(() => {
        getVideoInfo();
    }, []);

    return (
        <Box className="video">
            <div className="video-player">
                <iframe
                    className="video-iframe"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={id}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                ></iframe>
            </div>
            <div className="video-info">
                {videoInfo.items ? (
                    <h1 className="video-title">
                        {videoInfo?.items[0]?.snippet.title}
                    </h1>
                ) : (
                    <span>skeleton</span>
                )}
            </div>
        </Box>
    );
};

export default Video;
