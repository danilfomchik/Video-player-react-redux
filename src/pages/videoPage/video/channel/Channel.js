import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Tooltip, Avatar } from "@chakra-ui/react";

import SubscribeBtnLayout from "./SubscribeBtnLayout";
import withUnauthenticated from "../../withUnauthenticated";
import withAuthenticated from "../../withAuthenticated";

import "./channel.scss";

const Channel = ({ channel }) => {
    const {
        id: channelId,
        snippet: {
            title: channelTitle,
            thumbnails: {
                default: { url: channelThumbnail },
            },
        },
        statistics: { subscriberCount },
    } = channel;

    const isAuth = useSelector((state) => state.auth.isAuth);

    const NotAuthentificatedBtn = withUnauthenticated(SubscribeBtnLayout);
    const AuthentificatedBtn = withAuthenticated(SubscribeBtnLayout);

    return (
        <Box className="channel">
            <Box className="channel-info">
                <Avatar
                    bg="#E11D48"
                    boxSize="40px"
                    name={channelTitle}
                    src={channelThumbnail}
                />
                <Box className="channel-statistics">
                    <Tooltip
                        margin="0px 0px 10px"
                        label={channelTitle}
                        placement="bottom-start"
                        bg="#6B7280"
                        color="#ffffff"
                        fontSize="15px"
                    >
                        <span className="channel-title">{channelTitle}</span>
                    </Tooltip>

                    <span className="channel-subs-count">
                        {Intl.NumberFormat("en", {
                            notation: "compact",
                            maximumSignificantDigits: 5,
                        }).format(+subscriberCount)}{" "}
                        subscribers
                    </span>
                </Box>
            </Box>

            {isAuth ? (
                <AuthentificatedBtn
                    channel={{
                        id: channelId,
                        channelTitle,
                        channelThumbnail,
                    }}
                />
            ) : (
                <NotAuthentificatedBtn />
            )}
        </Box>
    );
};

export default Channel;
