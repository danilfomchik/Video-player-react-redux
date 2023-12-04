import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "query-string";

import { Input, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import SuggestionsDropDown from "../suggestionsDropDown/SuggestionsDropDown";

import { onSearch } from "./searchSlice";

const Search = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.search.searchValue);

    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    const inputRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const { searchQuery } = qs.parse(document.location.search);

        if (searchQuery) {
            setValue(searchQuery);
        }
    }, []);

    return (
        <div className="header__search">
            <form
                ref={formRef}
                className="header__search"
                onSubmit={(e) => {
                    console.log("submit");
                    e.preventDefault();

                    navigate(`/`);
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
                    onFocus={() => setIsFocus(true)}
                    onBlur={(e) => {
                        setTimeout(() => {
                            setIsFocus(false);
                        }, 100);
                    }}
                    name="search-input"
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

                <SuggestionsDropDown
                    isVisible={isFocus}
                    setVisibility={setIsFocus}
                    query={value}
                    setValue={setValue}
                />
            </form>
        </div>
    );
};

export default Search;
