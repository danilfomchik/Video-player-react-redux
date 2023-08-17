import { Avatar, Input, Image } from "@chakra-ui/react";

import logo from "../../images/icon.png";

import "./header.scss";

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <Image
                            boxSize="48px"
                            fit="contain"
                            src={logo}
                            alt="Logo"
                        />
                    </div>
                    <div className="header-search">
                        <Input
                            variant="flushed"
                            placeholder="Enter a request"
                            focusBorderColor="#E11D48"
                            color="white"
                        />
                    </div>
                    <div className="header-user">
                        <Avatar bg="#E11D48" size="md" />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
