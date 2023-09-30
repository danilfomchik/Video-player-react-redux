import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { Box, Image, Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import moment from "moment";

import FieldSkeleton from "../../../components/skeletons/FieldSkeleton";

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
            title: videoTitle,
            publishedAt,
            thumbnails: { medium },
        },
        contentDetails,
    } = video;

    const currentCategory = useSelector(
        (state) => state.categories.currentCategory
    );
    const videosFetchStatus = useSelector(
        (state) => state.videos.videosFetchStatus
    );

    const [channelIcon, setChannelIcon] = useState("");
    const [videoStatistics, setVideoStatistics] = useState({});

    const { request } = httpRequest();

    const _videoId = id?.videoId || contentDetails?.videoId || id;

    const seconds = moment
        .duration(videoStatistics?.contentDetails?.duration)
        .asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    // const getChannelIcon = async () => {
    //     const response = await request(
    //         BASE_URL + `/channels?part=snippet&id=${channelId}&key=${API_KEY}`
    //     );

    //     setChannelIcon(
    //         response?.items?.[0]?.snippet?.thumbnails?.default?.url || ""
    //     );
    // };

    // const getVideoStatistics = async (videoId) => {
    //     const response = await request(
    //         BASE_URL +
    //             `/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`
    //     );

    //     setVideoStatistics(response?.items?.[0]);
    // };

    // useEffect(() => {
    //     getVideoStatistics(_videoId);
    //     getChannelIcon();
    // }, [video]);

    return (
        <Box className="videos-list__item" id={_videoId}>
            <Box className="videos-list__item-preview">
                <Image
                    className="videos-list__item-thumbnail"
                    src={medium.url}
                    alt={videoTitle}
                />
                {videoStatistics.contentDetails && (
                    <Text className="videos-list__item-duration">
                        {_duration}
                    </Text>
                )}
            </Box>
            <Flex padding="16px 5px 0px" style={{ gap: "0.5rem" }}>
                <Box id={channelId} className="videos-list__item-channel">
                    {channelIcon ? (
                        <Avatar
                            bg="#E11D48"
                            boxSize="35px"
                            name={channelTitle}
                            src={channelIcon}
                        />
                    ) : (
                        <FieldSkeleton
                            item="avatar"
                            x="2"
                            y="0"
                            rx="100"
                            ry="100"
                            width="35"
                            height="35"
                        />
                    )}
                </Box>
                <Box className="videos-list__item-info">
                    <Heading
                        className="videos-list__item-title"
                        as="h3"
                        size="sm"
                    >
                        {videoTitle.length > 30
                            ? videoTitle.slice(0, 60) + "..."
                            : videoTitle}
                    </Heading>
                    <Text
                        className="videos-list__item_channel-name"
                        fontSize="sm"
                    >
                        {channelTitle}
                    </Text>
                    <Text fontSize="sm">
                        {videoStatistics.statistics ? (
                            <>
                                <span>
                                    {Intl.NumberFormat("en", {
                                        notation: "compact",
                                    }).format(
                                        videoStatistics.statistics
                                            ? videoStatistics?.statistics
                                                  ?.viewCount
                                            : ""
                                    )}
                                </span>{" "}
                                • <span>{moment(publishedAt).fromNow()}</span>
                            </>
                        ) : (
                            <FieldSkeleton
                                item="text"
                                x="0"
                                y="5"
                                rx="3"
                                ry="3"
                                width="220"
                                height="15"
                            />
                        )}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default VideosListItem;
