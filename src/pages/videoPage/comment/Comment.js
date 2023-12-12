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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import LikeSvg from "../LikeSvg";

import "./comment.scss";

const Comment = ({ comment }) => {
    return (
        <Box className="comment-wrapper">
            <Box className="comment-container">
                <Avatar className="author-avatar" bg="#E11D48" boxSize="35px" />

                <Box className="comment-info">
                    <Box className="author-header">
                        <span className="author-nickname">@nick</span>
                        <span className="posted-at">posted</span>
                    </Box>
                    <p className="comment-body">
                        comment text comment text comment text comment text
                        comment text comment text
                    </p>

                    <Box className="toolbar">
                        <Box className="likes">
                            <LikeSvg
                                width={20}
                                height={20}
                                viewBox={`0 0 25 25`}
                            />
                            1 k
                        </Box>
                        <Box className="dislikes">
                            <LikeSvg
                                width={20}
                                height={20}
                                viewBox={`0 0 25 25`}
                                type="dislike"
                            />
                            2 k
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Accordion allowToggle>
                <AccordionItem mt={2}>
                    <h2>
                        <AccordionButton>
                            <Box as="span" textAlign="left">
                                100 replies
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};

export default Comment;
