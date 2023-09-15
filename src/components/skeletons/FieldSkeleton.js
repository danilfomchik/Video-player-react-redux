import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";

const FieldSkeleton = (props) => {
    const { width, height, item } = props;

    return (
        <ContentLoader
            speed={2}
            viewBox={`0 0 ${+width + 5} ${+height + 5}`}
            backgroundColor="#909192"
            foregroundColor="#ecebeb"
            width={+width + 5}
            height={+height + 5}
            className={`${item}-skeleton`}
        >
            <rect {...props} />
        </ContentLoader>
    );
};

export default FieldSkeleton;
