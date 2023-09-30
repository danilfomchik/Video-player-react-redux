import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScrollOnDrag from "react-scroll-ondrag";

import { resetVideosList } from "../videos-list/videosSlice";
import { fetchCategories, changeCurrentCategory } from "./categoriesSlice";

import { resetSearchValue } from "../../../app/header/search/searchSlice";

import "./categories-filter.scss";

const CategoriesFilter = () => {
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories.categories);
    const currentCategory = useSelector(
        (state) => state.categories.currentCategory
    );
    const searchValue = useSelector((state) => state.search.searchValue);

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }

        return () => dispatch(changeCurrentCategory("0"));
    }, []);

    const handleCategoryChange = (id) => {
        dispatch(resetVideosList());

        dispatch(changeCurrentCategory(id));

        if (searchValue) {
            console.log("categ");

            dispatch(resetSearchValue());
        }
    };

    const containerRef = useRef(null);

    const { events } = useScrollOnDrag(containerRef);

    return (
        <div className="categories-filter__wrapper">
            <div
                className="categories-filter__inner"
                ref={containerRef}
                {...events}
            >
                <div
                    className={`categories-filter__item${
                        currentCategory === "0" ? " active" : ""
                    }`}
                    onClick={() => {
                        handleCategoryChange("0");
                    }}
                >
                    <span>All</span>
                </div>
                {categories.map((category) => {
                    const {
                        id,
                        snippet: { title },
                    } = category;

                    return (
                        <div
                            key={id}
                            className={`categories-filter__item${
                                currentCategory === category.id ? " active" : ""
                            }`}
                            onClick={() => {
                                handleCategoryChange(category.id);
                            }}
                        >
                            <span>{title}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoriesFilter;
