import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { db } from "../../../firebase-config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { useFirebase } from "../../useFirebase";

import { onLogout } from "../../authSlice";

import "./user.scss";

const User = ({ isAuth }) => {
    const dispatch = useDispatch();

    const avatar = useSelector((state) => state.auth.user.photoURL);
    const email = useSelector((state) => state.auth.user.email);
    const displayName = useSelector((state) => state.auth.user.displayName);
    const uid = useSelector((state) => state.auth.user.uid);

    const { onAddUserToDatabase } = useFirebase({ uid });

    useEffect(() => {
        onAddUserToDatabase({
            displayName,
            email,
            uid,
            lastLogin: serverTimestamp(),
        });
    }, []);

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button className="popover-trigger">
                    <Tooltip
                        margin="10px 0px 0px"
                        label={displayName}
                        bg="#6B7280"
                        color="#ffffff"
                    >
                        <Avatar
                            bg="#E11D48"
                            className="header__user"
                            src={avatar}
                            boxSize="35px"
                        />
                    </Tooltip>
                </Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    {/* <PopoverArrow /> */}
                    <PopoverHeader>
                        <Avatar
                            bg="#E11D48"
                            className="header__user"
                            src={avatar || ""}
                            boxSize="35px"
                        />
                        <Box className="user-info">
                            <p>{displayName}</p>
                            <p>{email}</p>
                        </Box>
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody onClick={() => dispatch(onLogout())}>
                        {/* <a
                            href="https://myaccount.google.com/u/0/"
                            target="_blank"
                        > */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 24 24"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            focusable="false"
                            style={{
                                pointerEvents: "none",
                                display: "block",
                                fill: "#ffffff",
                            }}
                        >
                            <path d="M20 3v18H8v-1h11V4H8V3h12zm-8.9 12.1.7.7 4.4-4.4L11.8 7l-.7.7 3.1 3.1H3v1h11.3l-3.2 3.3z"></path>
                        </svg>
                        <span>Log out</span>
                        {/* </a> */}
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    );
};

export default User;
