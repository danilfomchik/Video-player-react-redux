import React from "react";
import {
    Box,
    Avatar,
    Accordion,
    AccordionPanel,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
} from "@chakra-ui/react";
import moment from "moment";

import LikeSvg from "../LikeSvg";

import "./comment.scss";

const Comment = ({ comment }) => {
    return (
        <Box className="comment-wrapper">
            <Box className="comment-container">
                <Avatar
                    className="author-avatar"
                    bg="#E11D48"
                    boxSize="35px"
                    name={
                        comment?.snippet?.topLevelComment?.snippet?.channelId ||
                        comment?.snippet?.channelId
                    }
                    src={
                        comment?.snippet?.topLevelComment?.snippet
                            ?.authorProfileImageUrl ||
                        comment?.snippet?.authorProfileImageUrl
                    }
                />

                <Box className="comment-info">
                    <Box className="author-header">
                        <span className="author-nickname">
                            {comment?.snippet?.topLevelComment?.snippet
                                ?.authorDisplayName ||
                                comment?.snippet?.authorDisplayName}
                        </span>
                        <span className="posted-at">
                            {moment(
                                comment?.snippet?.topLevelComment?.snippet
                                    ?.publishedAt ||
                                    comment?.snippet?.publishedAt
                            ).fromNow()}
                        </span>
                    </Box>
                    <p className="comment-body">
                        {comment?.snippet?.topLevelComment?.snippet
                            ?.textDisplay || comment?.snippet?.textDisplay}
                    </p>

                    <Box className="toolbar">
                        <Box className="likes">
                            <LikeSvg
                                width={20}
                                height={20}
                                viewBox={`0 0 25 25`}
                            />
                            {comment?.snippet?.topLevelComment?.snippet
                                ?.likeCount > 0 ||
                            comment?.snippet?.likeCount > 0
                                ? comment?.snippet?.topLevelComment?.snippet
                                      ?.likeCount || comment?.snippet?.likeCount
                                : null}
                        </Box>
                        <Box className="dislikes">
                            <LikeSvg
                                width={20}
                                height={20}
                                viewBox={`0 0 25 25`}
                                type="dislike"
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>

            {comment?.snippet?.totalReplyCount > 0 && (
                <Accordion allowToggle>
                    <AccordionItem mt={2}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" textAlign="left">
                                    {comment?.replies?.comments.length}{" "}
                                    reply(ies)
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {comment?.replies?.comments.map((reply) => (
                                <Comment key={comment.id} comment={reply} />
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            )}
        </Box>
    );
};

export default Comment;
