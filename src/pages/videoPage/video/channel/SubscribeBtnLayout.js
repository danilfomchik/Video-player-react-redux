import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

import { useFirebase } from "../../../../app/useFirebase";

const SubscribeBtnLayout = ({ channel }) => {
    // const uid = useSelector((state) => state.auth.user.uid);
    // const { onAddDataToPlaylist } = useFirebase({ uid });

    return (
        <Box className="channel-subscribe__btn">
            {/* <button
                onClick={() => onAddDataToPlaylist(channel, "subscriptions")}
            > */}
            Subscribe
            {/* </button> */}
        </Box>
    );
};

export default SubscribeBtnLayout;
