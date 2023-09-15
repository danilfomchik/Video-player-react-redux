const Spinner = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                margin: "auto",
                background: "none",
                display: "block",
                shapeRendering: "auto",
            }}
            width="217px"
            height="217px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle
                cx="50"
                cy="50"
                r="26"
                strokeWidth="3"
                stroke="#24262a"
                strokeDasharray="40.840704496667314 40.840704496667314"
                fill="none"
                strokeLinecap="round"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="1.2195121951219512s"
                    repeatCount="indefinite"
                    keyTimes="0;1"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle
                cx="50"
                cy="50"
                r="22"
                strokeWidth="3"
                stroke="#ffffff"
                strokeDasharray="34.55751918948772 34.55751918948772"
                strokeDashoffset="34.55751918948772"
                fill="none"
                strokeLinecap="round"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="1.2195121951219512s"
                    repeatCount="indefinite"
                    keyTimes="0;1"
                    values="0 50 50;-360 50 50"
                ></animateTransform>
            </circle>
        </svg>
    );
};

export default Spinner;
