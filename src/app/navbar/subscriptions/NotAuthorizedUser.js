import { Box } from "@chakra-ui/react";

import LogInButton from "../../../components/logInButton/LogInButton";

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

export default NotAuthorizedUser;
