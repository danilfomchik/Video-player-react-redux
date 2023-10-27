import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import qs from "query-string";

import Video from "./video/Video";
import Comments from "./comments/Comments";
import SuggestedVideos from "./suggestedVideos/SuggestedVideos";

import "./video-page.scss";

const VideoPage = () => {
    const { id } = qs.parse(document.location.search);

    // при монтировании делать запрос по айди видео

    // компонент с видео (добавить комментарии под видео, справа список предложеных видео)

    // https://www.googleapis.com/youtube/v3/commentThreads?key=******************&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50

    // юрл для комментариев - https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&key=AIzaSyDAMRC-ugJH9eDkbTMNTxdAWW1K1nNAKwE&videoId=kcTV3G-Wi34&textFormat=plainText&pageToken=

    // юрл для предложеных видео - https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&type=video&q= КВЕРИ ЭТО НАЗВАНИЕ ТЕКУЩЕГО ВИДЕО &order=viewCount&videoDuration=medium&key=

    return (
        <section>
            <Box className="video-page">
                <div className="video-column">
                    <Video id={id} />
                    <Comments />
                </div>
                <SuggestedVideos />
            </Box>
        </section>
    );
};

export default VideoPage;
