import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Avatar, Icon, IconButton, CheckIcon } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

import LogInButton from "../../../components/logInButton/LogInButton";

import { useFirebase } from "../../useFirebase";

import "./subscriptions.scss";

const Subscriptions = () => {
    const uid = useSelector((state) => state.auth.user.uid);

    const {
        data: subscriptions = [],
        getUserData,
        onDeleteDataFromPlaylist,
    } = useFirebase({ uid });

    useEffect(() => {
        getUserData("subscriptions");
    }, []);

    return (
        <Box className="subscriptions-list">
            <h3 className="subscriptions__title">Subscriptions</h3>
            {subscriptions.map((channel, i) => (
                <div className="subscription nav-bar__item" key={channel.id}>
                    <Avatar
                        bg="#E11D48"
                        boxSize="20px"
                        name={channel.channelTitle}
                        src={channel.channelThumbnail}
                    />
                    <p className="subscription__title">
                        {channel.channelTitle}
                    </p>
                    {/* <Icon as={SmallCloseIcon} /> */}
                    <IconButton
                        className="unsubscribe-icon"
                        aria-label="Unsubscribe"
                        icon={<SmallCloseIcon />}
                        onClick={() =>
                            onDeleteDataFromPlaylist(channel, "subscriptions")
                        }
                    />
                </div>
            ))}
        </Box>
    );
};

export default Subscriptions;
