import { Box } from "@chakra-ui/react";

import "./navbar.scss";

const Navbar = () => {
    const navBarItems = [
        {
            name: "Home page",
            svgPath: "M4,21V10.08l8-6.96l8,6.96V21h-6v-6h-4v6H4z",
        },
        {
            name: "Library",
            svgPath: "M4,21V10.08l8-6.96l8,6.96V21h-6v-6h-4v6H4z",
        },
        {
            name: "Shorts",
            svgPath: "M4,21V10.08l8-6.96l8,6.96V21h-6v-6h-4v6H4z",
        },
    ];

    return (
        <div className="nav-bar">
            {navBarItems.map(({ name, svgPath }) => (
                <>
                    <div className="nav-bar__item">
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
                    </div>
                </>
            ))}
        </div>
    );
};

export default Navbar;
