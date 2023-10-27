import React from "react";
import { Box } from "@chakra-ui/react";

import img from "../../../assets/icon.png";

import "./suggested-videos.scss";

const SuggestedVideos = () => {
    return (
        <Box className="suggested-videos">
            <Box className="suggested-videos__item">
                <img className="video-preview" src={img} alt="img" />
                <h3>title</h3>
                <p>channel</p>
                <p>views</p>
            </Box>

            <Box className="suggested-videos__item">
                <img className="video-preview" src={img} alt="img" />
                <h3>title</h3>
                <p>channel</p>
                <p>views</p>
            </Box>

            <Box className="suggested-videos__item">
                <img className="video-preview" src={img} alt="img" />
                <h3>title</h3>
                <p>channel</p>
                <p>views</p>
            </Box>
        </Box>
    );
};

export default SuggestedVideos;
