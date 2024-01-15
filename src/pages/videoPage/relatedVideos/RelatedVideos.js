import React, { memo, useState, useRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

import VideoDescription from "../relatedVideosItem/RelatedVideosItemDescription";
import VideosListItem from "../../../app/videosListItem/VideosListItem";

import { useGetRelatedVideosQuery } from "./relatedVideosApi";

import "./related-videos.scss";
import { useEffect } from "react";

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

            {data?.nextPageToken && data?.nextPageToken !== nextPageToken && (
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
