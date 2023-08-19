import { Avatar, Input, Image, Box } from "@chakra-ui/react";

import logo from "../../assets/icon.png";

import "./header.scss";

const Header = () => {
    return (
        <>
            <header className="header">
                <Box className="header-wrapper" data-role="header">
                    <Box className="header-logo">
                        <Image
                            boxSize="35px"
                            fit="contain"
                            src={logo}
                            alt="Logo"
                        />
                    </Box>
                    <Box className="header-search">
                        <Input
                            variant="flushed"
                            placeholder="Enter a request"
                            focusBorderColor="#E11D48"
                            color="white"
                        />
                    </Box>
                    <Box className="header-user">
                        <Avatar bg="#E11D48" boxSize="35px" />
                    </Box>
                </Box>
            </header>
        </>
    );
};

export default Header;
