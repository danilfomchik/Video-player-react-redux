import { Avatar, Input, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "../../assets/icon.png";

import "./header.scss";

const Header = () => {
    return (
        <>
            <header className="header">
                <Box className="header__wrapper" data-role="header">
                    <Box className="header__logo">
                        <Link to="/">
                            <Image
                                boxSize="35px"
                                fit="contain"
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                    </Box>
                    <Box className="header__search">
                        <Input
                            variant="flushed"
                            placeholder="Enter a request"
                            focusBorderColor="#E11D48"
                            color="white"
                        />
                    </Box>
                    <Box className="header__user">
                        <Avatar bg="#E11D48" boxSize="35px" />
                    </Box>
                </Box>
            </header>
        </>
    );
};

export default Header;
