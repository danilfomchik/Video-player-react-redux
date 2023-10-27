import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { onSearch } from "../search/searchSlice";
import httpRequest from "../../../utils/httpRequest";

import { SUGGESTIONS_URL } from "../../../utils/constants";

import "./suggestionsDropDown.scss";

const SuggestionsDropDown = ({ isVisible, query, setValue, setVisibility }) => {
    const navigate = useNavigate();
    const [suggestions, setSuggestions] = useState([]);

    const dispatch = useDispatch();
    const { request } = httpRequest();

    useEffect(() => {
        const controller = new AbortController();

        if (query.length >= 1) {
            request({
                url: SUGGESTIONS_URL + query,
                signal: controller.signal,
            }).then((data) => {
                setSuggestions(data[1]);
            });
        }

        return () => controller.abort();
    }, [query]);

    const onSuggestionClick = (suggestion) => {
        setValue(suggestion);
        dispatch(onSearch(suggestion));
        setVisibility(false);
    };

    return (
        <div
            className={`suggestions__drop-down ${
                query && isVisible ? "active" : ""
            }`}
            // className={"suggestions__drop-down active"}
        >
            {suggestions.map((suggestion, index) => (
                <div
                    className="suggestions__item"
                    key={index}
                    onClick={() => {
                        console.log("click");
                        onSuggestionClick(suggestion);
                        navigate(`/`);
                    }}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <p className="suggestion">{suggestion}</p>
                </div>
            ))}
        </div>
    );
};

export default SuggestionsDropDown;
