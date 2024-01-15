import React from "react";
import { useSelector } from "react-redux";
import { Box, Tooltip, Avatar } from "@chakra-ui/react";

import { useFirebase } from "../../../../app/useFirebase";

import "./channel.scss";

const Channel = ({ channel }) => {
    const {
        snippet: {
            title: channelTitle,
            thumbnails: {
                default: { url: channelThumbnail },
            },
        },
        statistics: { subscriberCount },
    } = channel;
    const uid = useSelector((state) => state.auth.user.uid);

    const { onAddDataToPlaylist } = useFirebase({ uid });

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

            <Box className="channel-subscribe__btn">
                <button
                    onClick={() =>
                        onAddDataToPlaylist(
                            {
                                channelTitle,
                                channelThumbnail,
                            },
                            "subscriptions"
                        )
                    }
                >
                    Subscribe
                </button>
            </Box>
        </Box>
    );
};

export default Channel;
