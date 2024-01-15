import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { onLogin } from "../../app/authSlice";

import "./log-in-button.scss";

const LogInButton = (props) => {
    const dispatch = useDispatch();

    return (
        <button
            className="log-in__btn"
            onClick={() => {
                dispatch(onLogin());
            }}
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style={{
                    pointerEvents: "none",
                    display: "block",
                    fill: "currentcolor",
                    margin: "0px 10px 0px 0px",
                }}
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1c4.96 0 9 4.04 9 9 0 1.42-.34 2.76-.93 3.96-1.53-1.72-3.98-2.89-7.38-3.03A3.996 3.996 0 0016 9c0-2.21-1.79-4-4-4S8 6.79 8 9c0 1.97 1.43 3.6 3.31 3.93-3.4.14-5.85 1.31-7.38 3.03C3.34 14.76 3 13.42 3 12c0-4.96 4.04-9 9-9zM9 9c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 12c-3.16 0-5.94-1.64-7.55-4.12C6.01 14.93 8.61 13.9 12 13.9c3.39 0 5.99 1.03 7.55 2.98C17.94 19.36 15.16 21 12 21z"></path>
            </svg>
            <span>Log in</span>
        </button>
    );
};

export default LogInButton;
