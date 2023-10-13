import { useState, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useParams } from "react-router-dom";
import qs from "query-string";

import { Input, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import { resetVideosList } from "../../../pages/home-page/videos-list/videosSlice";
import { onSearch, resetSearchValue } from "./searchSlice";

const Search = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.search.searchValue);

    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        const { searchQuery } = qs.parse(document.location.search);

        if (searchQuery) {
            setValue(searchQuery);
        }
    }, []);

    return (
        <form
            className="header__search"
            onSubmit={(e) => {
                e.preventDefault();

                if (searchValue !== value) {
                    dispatch(onSearch(inputRef.current.value));
                }
            }}
        >
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
                className="form-controlls"
                style={
                    !value
                        ? { justifyContent: "flex-end" }
                        : { justifyContent: "space-between" }
                }
            >
                {value && (
                    <>
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => {
                                setValue("");
                                inputRef.current.focus();
                            }}
                        />
                        <div className="divider"></div>
                    </>
                )}

                <button className="fa-wrapper" type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </Box>
        </form>
    );
};

export default Search;
