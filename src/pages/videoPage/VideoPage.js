import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
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

import httpRequest from "../../utils/httpRequest";
import { BASE_URL, API_KEY } from "../../utils/constants";

import Video from "./video/Video";
import Comments from "./comments/Comments";
import RelatedVideos from "./relatedVideos/RelatedVideos";

import "./video-page.scss";

const VideoPage = () => {
    const { state: videoInfo } = useLocation();
    const { id: videoId } = qs.parse(document.location.search);

    const {
        video: {
            id,
            snippet: { title, description },
        },
    } = videoInfo;

    return (
        <section>
            <Box className="video-page">
                <Box className="video-column">
                    {/*сделать скелетон при загрузке  */}
                    {id && <Video videoInfo={videoInfo} id={videoId} />}

                    <Tabs position="relative" variant="unstyled">
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
                                {description}
                            </TabPanel>
                            <TabPanel>
                                <Comments />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <RelatedVideos query={title} />
            </Box>
        </section>
    );
};

export default VideoPage;
