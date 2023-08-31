import React from "react";

const StatusMessage = ({ status }) => {
    return (
        <div className="status-message">
            {status === "loading" ? (
                <p>Loading data process...</p>
            ) : (
                <p>Failed to load data...</p>
            )}
        </div>
    );
};

export default StatusMessage;
