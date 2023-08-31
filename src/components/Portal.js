import { createPortal } from "react-dom";

const Portal = (props) => {
    return createPortal(
        <div className="portal">{props.children}</div>,
        document.body
    );
};

export default Portal;
