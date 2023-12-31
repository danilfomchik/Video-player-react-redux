import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import httpRequest from "../../../utils/httpRequest";

import { SUGGESTIONS_URL } from "../../../utils/constants";

import "./suggestionsDropDown.scss";

const SuggestionsDropDown = ({ isVisible, query, setValue, setVisibility }) => {
    const navigate = useNavigate();
    const [suggestions, setSuggestions] = useState([]);

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
        console.log("click");
        setValue(suggestion);
        setVisibility(false);
    };

    {
        /* происходит задержка/лаг, когда кликаю на саджешенс лист*/
    }

    return (
        <div
            className={`suggestions__drop-down ${
                query && isVisible ? "active" : ""
            }`}
        >
            {suggestions.map((suggestion, index) => (
                <button
                    type="submit"
                    className="suggestions__item"
                    key={index}
                    onClick={(e) => {
                        onSuggestionClick(suggestion);
                        // navigate(`/`);
                    }}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <p className="suggestion">{suggestion}</p>
                </button>
            ))}
        </div>
    );
};

export default SuggestionsDropDown;
