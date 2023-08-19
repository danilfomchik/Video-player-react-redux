import { Box } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

import navBarItems from "./navBarItems";

import "./navbar.scss";

const Navbar = () => {
    return (
        <Box className="nav-bar">
            {navBarItems.map(({ name, svgPath, to }) => (
                <NavLink to={to}>
                    <Box className="nav-bar__item">
                        <c3-icon
                            style={{
                                color: "#ffffff",
                                fill: "currentColor",
                                stroke: "none",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                width="24"
                            >
                                <g>
                                    <path d={svgPath}></path>
                                </g>
                            </svg>
                        </c3-icon>
                        <p>{name}</p>
                    </Box>
                </NavLink>
            ))}
        </Box>
    );
};

export default Navbar;
