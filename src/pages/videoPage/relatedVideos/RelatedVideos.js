import React, { memo, useState, useRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

import VideoDescription from "../relatedVideosItem/RelatedVideosItemDescription";
import VideosListItem from "../../../app/videosListItem/VideosListItem";

import { useGetRelatedVideosQuery } from "../../../api/relatedVideosApi";

import "./related-videos.scss";
import { useEffect } from "react";

const RelatedVideos = memo(({ query }) => {
    const [nextPageToken, setNextPageToken] = useState("");
    const firstRenderRef = useRef(true);

    const {
        data,
        isError,
        isLoading,
        isFetching,
        refetch: refetchRelatedVideos,
    } = useGetRelatedVideosQuery({
        query: encodeURIComponent(query),
        nextPageToken,
    });

    const relatedVideos = data?.items || [];

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
        }
    }, []);

    // когда делаю серч с главной страницы категория остается - !!!правильное поведение!!!
    // НО, когда делаю серч со страницы с видео нужно обнулять категорию
    console.log(data?.pageInfo?.totalResults, relatedVideos.length);

    return (
        <Box className="related-videos">
            <div className="related-videos__list">
                {relatedVideos.map((video, index) => (
                    <VideosListItem
                        key={index}
                        video={video}
                        VideoDescription={VideoDescription}
                        type="related"
                        onItemClick={() => {
                            setNextPageToken("");
                        }}
                    />
                ))}
            </div>

            {isFetching && <Spinner style={{ margin: "20px auto 0px" }} />}

            {data?.nextPageToken !== nextPageToken &&
                relatedVideos.length > 0 && (
                    <div
                        className="activity__btn load-more__btn"
                        onClick={() => {
                            setNextPageToken(data.nextPageToken);
                        }}
                    >
                        <button>LOAD MORE</button>
                    </div>
                )}
        </Box>
    );
});

export default RelatedVideos;
