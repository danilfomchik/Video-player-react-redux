import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { resetVideosList } from "../../../pages/home-page/videos-list/videosSlice";
import { onSearch, resetSearchValue } from "./searchSlice";

const Search = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    return (
        <Box className="header__search">
            <Input
                variant="flushed"
                placeholder="Enter your request"
                focusBorderColor="#E11D48"
                color="white"
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <Box
                className="fa-wrapper"
                onClick={() => {
                    dispatch(onSearch(inputRef.current.value));
                }}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Box>
        </Box>
    );
};

export default Search;
