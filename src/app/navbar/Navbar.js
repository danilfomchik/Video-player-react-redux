import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import Subscriptions from "./subscriptions/Subscriptions";
import NotAuthorizedUser from "./subscriptions/NotAuthorizedUser";
import navBarItems from "./navBarItems";

import "./navbar.scss";

const Navbar = () => {
    const location = useLocation();
    const isAuth = useSelector((state) => state.auth.isAuth);

    const setActiveClass = ({ isActive }) =>
        isActive ? "nav-bar__item nav-bar__item_active" : "nav-bar__item";

    return (
        <Box className="aside-bar">
            <Box className="nav-bar">
                {navBarItems.map(
                    ({ name, svgPath, onActivePath, to }, index) => (
                        <NavLink
                            end
                            key={index}
                            to={to}
                            className={setActiveClass}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                width="24"
                                style={
                                    location.pathname === to
                                        ? {
                                              color: "#ffffff",
                                          }
                                        : {}
                                }
                            >
                                <g>
                                    <path
                                        d={
                                            location.pathname === to
                                                ? onActivePath
                                                : svgPath
                                        }
                                    ></path>
                                </g>
                            </svg>
                            <p>{name}</p>
                        </NavLink>
                    )
                )}
            </Box>

            <Box className="divider"></Box>

            {isAuth ? <Subscriptions /> : <NotAuthorizedUser />}
        </Box>
    );
};

export default Navbar;
