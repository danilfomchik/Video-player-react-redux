import React, { useEffect, useState } from "react";
import { Box, Spinner, Input, Avatar } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

import Comment from "../comment/Comment";

import { useGetCommentsQuery } from "./commentsApi";

import "./comments.scss";

const Comments = ({ videoId, commentCount }) => {
    // https://www.googleapis.com/youtube/v3/commentThreads?key=******************&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50

    // юрл для комментариев - https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&key=AIzaSyDAMRC-ugJH9eDkbTMNTxdAWW1K1nNAKwE&videoId=kcTV3G-Wi34&textFormat=plainText&pageToken=

    const [newCommentValue, setNewCommentValue] = useState("");
    const [nextPageToken, setNextPageToken] = useState("");

    const { data, isError, isLoading, isFetching } = useGetCommentsQuery({
        videoId,
        nextPageToken,
    });

    const comments = data?.items || [];

    // Релоад он фокус сделать для комментариев

    return (
        <InfiniteScroll
            dataLength={comments.length}
            next={() => {
                setNextPageToken(data?.nextPageToken);
            }}
            hasMore={data?.nextPageToken ? true : false}
            scrollThreshold={0.95}
        >
            <Box className="video-comments">
                <p className="video-statistics__title">
                    {parseInt(commentCount).toLocaleString()} Comment(s)
                </p>

                {/* вынести в отдельный компонент и добавить логику */}
                <Box className="new-comment__input">
                    {/* аватар - аватар авторизированного пользователя */}
                    <Avatar bg="#E11D48" boxSize="35px" />
                    <Input
                        variant="flushed"
                        placeholder="Enter comment"
                        focusBorderColor="#E11D48"
                        color="white"
                        value={newCommentValue}
                        onChange={(e) => setNewCommentValue(e.target.value)}
                        name="new-comment-input"
                    />
                </Box>
                {/* вынести в отдельный компонент и добавить логику */}

                <Box className="video-comments__list">
                    {comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </Box>

                {isFetching && <Spinner style={{ margin: "20px auto 0px" }} />}
            </Box>
        </InfiniteScroll>
    );
};

export default Comments;
