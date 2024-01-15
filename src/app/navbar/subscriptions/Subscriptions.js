import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LogInButton from "../../../components/logInButton/LogInButton";
import { Box } from "@chakra-ui/react";

import { useFirebase } from "../../useFirebase";

import "./subscriptions.scss";

const Subscriptions = () => {
    const uid = useSelector((state) => state.auth.user.uid);

    const { data: subscriptions = [], getUserData } = useFirebase({ uid });

    useEffect(() => {
        getUserData("subscriptions");
    }, []);

    return (
        <Box className="subscriptions-list">
            {/* {!isAuth ? <NotAuthorizedUser /> : null} */}
            {subscriptions.map((channel) => (
                <p>{channel.channelTitle}</p>
            ))}
        </Box>
    );
};

export default Subscriptions;

// сделать компонентом в который передавать свг, тайтл, описание и кнопку
const NotAuthorizedUser = () => {
    return (
        <Box className="not-authorized-user">
            <p>
                Sign in to rate videos, add comments and subscribe to channels.
            </p>
            <LogInButton style={{ margin: "10px 0px 0px" }} />
        </Box>
    );
};
