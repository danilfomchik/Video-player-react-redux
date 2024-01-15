import { Image, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Search from "./search/Search";
import User from "./user/User";
import LogInButton from "../../components/logInButton/LogInButton";

import logo from "../../assets/icon.png";

import "./header.scss";

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    // попробовать через апи геолокации получать код страны

    // сделать компонент который будет показываться если пользователь не аутентифицировался
    // в панеле слева если пользователь не вошел в аккаунт будет тоже писаться предупреждение, чтобы он вошел

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
                    <Search />
                    {isAuth ? <User isAuth={isAuth} /> : <LogInButton />}
                </Box>
            </header>
        </>
    );
};

export default Header;
