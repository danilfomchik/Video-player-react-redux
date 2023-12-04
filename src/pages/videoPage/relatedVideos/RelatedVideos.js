import React, { memo, useState } from "react";
import { Box, Spinner } from "@chakra-ui/react";

import VideoDescription from "../relatedVideosItem/VideoDescription";
import VideosListItem from "../../../app/videosListItem/VideosListItem";

import { useGetRelatedVideosQuery } from "../../../api/relatedVideosApi";

import "./related-videos.scss";

const RelatedVideos = memo(({ query }) => {
    const [nextPageToken, setNextPageToken] = useState("");

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

    // когда делаю серч с главной страницы категория остается - !!!правильное поведение!!!
    // НО, когда делаю серч со страницы с видео нужно обнулять категорию

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

            {relatedVideos.length > 0 && (
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
