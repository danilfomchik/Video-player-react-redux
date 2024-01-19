import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    Avatar,
    Popover,
    PopoverTrigger,
    Portal,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverCloseButton,
    PopoverBody,
    Button,
    Tooltip,
    Box,
} from "@chakra-ui/react";

import { useFirebase } from "../../app/useFirebase";

function withAuthenticated(WrappedComponent) {
    return function ({ channel }) {
        const uid = useSelector((state) => state.auth.user.uid);
        const {
            data: subscriptions = [],
            getUserData,
            onAddDataToPlaylist,
            onDeleteDataFromPlaylist,
        } = useFirebase({ uid });

        useEffect(() => {
            getUserData("subscriptions");
        }, []);

        const isSubscribed = subscriptions
            .map((subscribedChannel) => {
                return channel.id === subscribedChannel.id;
            })
            .some((channel) => channel);

        const buttonClasses = `popover-trigger channel-subscribe__btn ${
            isSubscribed ? "subscribed" : ""
        }`;

        // стилизовать каналы в панеле слева

        // сделать в библиотеке стилизацию акордеона с подписками
        // (если не получиться быстро сделать - оставить только в панеле слева, а сделать когда будет функционал по добавлению в библиотеку)

        return (
            <Button
                className={buttonClasses}
                onClick={() => {
                    if (isSubscribed) {
                        onDeleteDataFromPlaylist(channel, "subscriptions");
                    } else {
                        onAddDataToPlaylist(channel, "subscriptions");
                    }
                }}
            >
                <WrappedComponent isSubscribed={isSubscribed} />
            </Button>
        );
    };
}

export default withAuthenticated;
