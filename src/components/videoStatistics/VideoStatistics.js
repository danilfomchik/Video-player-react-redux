import React from "react";
import { Text } from "@chakra-ui/react";
import moment from "moment";

const VideoStatistics = ({ viewCount, publishedAt, ...props }) => {
    return (
        <Text fontSize="sm" {...props}>
            <span>
                {Intl.NumberFormat("en", {
                    notation: "compact",
                }).format(+viewCount)}
            </span>
            <span> view(s)&nbsp;•&nbsp;</span>
            <span>{moment(publishedAt).fromNow()}</span>
        </Text>
    );
};

export default VideoStatistics;
