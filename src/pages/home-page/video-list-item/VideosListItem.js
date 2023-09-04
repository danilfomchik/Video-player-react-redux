import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Image, Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import moment from "moment";

import { loadMoreVideos } from "../videos-list/videosSlice";

import httpRequest from "../../../utils/httpRequest";
import { BASE_URL, API_KEY } from "../../../utils/constants";

import "./video-list-item.scss";

const VideosListItem = ({ video }) => {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
        },
        contentDetails,
        statistics: { viewCount },
    } = video;

    // console.log(video);

    const [channelIcon, setChannelIcon] = useState("");
    const { request } = httpRequest();

    // const _videoId = id?.videoId || contentDetails?.videoId || id;

    const seconds = moment.duration(contentDetails.duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    const get_channel_icon = async () => {
        const response = await request(
            BASE_URL + `/channels?part=snippet&id=${channelId}&key=${API_KEY}`
        );

        setChannelIcon(
            response?.items?.[0]?.snippet?.thumbnails?.default?.url || ""
        );
    };

    useEffect(() => {
        get_channel_icon();
    }, []);

    return (
        <Box className="videos-list__item" id={id}>
            <Box className="videos-list__item-preview">
                <Image
                    className="videos-list__item-thumbnail"
                    src={medium.url}
                    alt={title}
                />
                <Text className="videos-list__item-duration" fontSize="sm">
                    {_duration}
                </Text>
            </Box>
            <Flex padding="16px 5px 0px" style={{ gap: "0.5rem" }}>
                <Box id={channelId} className="videos-list__item-channel">
                    <Avatar
                        bg="#E11D48"
                        boxSize="35px"
                        name={channelTitle}
                        src={channelIcon ?? ""}
                    />
                </Box>
                <Box className="videos-list__item-info">
                    <Heading
                        className="videos-list__item-title"
                        as="h3"
                        size="sm"
                    >
                        {title.length > 30 ? title.slice(0, 60) + "..." : title}
                    </Heading>
                    <Text
                        className="videos-list__item_channel-name"
                        fontSize="sm"
                    >
                        {channelTitle}
                    </Text>
                    <Text fontSize="sm">
                        {Intl.NumberFormat("en", {
                            notation: "compact",
                        }).format(viewCount)}{" "}
                        views • {moment(publishedAt).fromNow()}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default VideosListItem;
