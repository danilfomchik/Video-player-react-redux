import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    Box,
    Tabs,
    Tab,
    TabList,
    TabIndicator,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import qs from "query-string";

import { scrollToTop } from "../../utils/helpers";

import Video from "./video/Video";
import Comments from "./comments/Comments";
import RelatedVideos from "./relatedVideos/RelatedVideos";
import VideoStatistics from "../../components/videoStatistics/VideoStatistics";

import { commentsApi } from "./comments/commentsApi";

import "./video-page.scss";

const VideoPage = () => {
    const dispatch = useDispatch();
    const [tabIndex, setTabIndex] = useState(0);

    const { state: videoInfo } = useLocation();
    const { id: videoId } = qs.parse(document.location.search);

    const {
        video: {
            id,
            snippet: { title, description, publishedAt },
            statistics: { viewCount, commentCount },
        },
    } = videoInfo;

    const wrapperRef = useRef(null);

    const handleTabsChange = (index) => {
        if (tabIndex === 0) {
            dispatch(commentsApi.util.resetApiState());
        }

        setTabIndex(index);
    };

    useEffect(() => {
        scrollToTop(wrapperRef);
        handleTabsChange(0);
    }, [videoId]);

    return (
        <section>
            <div ref={wrapperRef}></div>
            <Box className="video-page">
                <Box className="video-column">
                    {id && <Video videoInfo={videoInfo} id={videoId} />}

                    <Tabs
                        position="relative"
                        variant="unstyled"
                        index={tabIndex}
                        onChange={handleTabsChange}
                        isLazy
                    >
                        <TabList style={{ borderBottom: "1px solid #29292E" }}>
                            <Tab className="video-description">Description</Tab>
                            <Tab className="video-comments">Comments</Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="1px"
                            bg="#E11D48"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel style={{ whiteSpace: "pre-wrap" }}>
                                <VideoStatistics
                                    viewCount={viewCount}
                                    publishedAt={publishedAt}
                                    className="video-statistics__title"
                                />
                                <p>{description}</p>
                            </TabPanel>
                            <TabPanel>
                                <Comments
                                    commentCount={commentCount}
                                    videoId={videoId}
                                />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <RelatedVideos videoId={videoId} query={title} />
            </Box>
        </section>
    );
};

export default VideoPage;
