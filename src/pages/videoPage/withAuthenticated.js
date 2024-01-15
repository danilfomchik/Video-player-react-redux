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
        const { onAddDataToPlaylist } = useFirebase({ uid });

        return (
            <Button
                className="popover-trigger"
                onClick={() => onAddDataToPlaylist(channel, "subscriptions")}
            >
                <WrappedComponent />
            </Button>
        );
    };
}

export default withAuthenticated;
