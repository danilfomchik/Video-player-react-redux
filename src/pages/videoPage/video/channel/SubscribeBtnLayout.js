import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

import { useFirebase } from "../../../../app/useFirebase";

const SubscribeBtnLayout = ({ isSubscribed }) => {
    return (
        <Box>
            {isSubscribed ? <span>Subscribed</span> : <span>Subscribe</span>}
        </Box>
    );
};

export default SubscribeBtnLayout;
