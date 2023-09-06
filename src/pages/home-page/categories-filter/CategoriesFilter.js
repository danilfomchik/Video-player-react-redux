import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetVideosList } from "../videos-list/videosSlice";
import { fetchCategories, changeCurrentCategory } from "./categoriesSlice";

import "./categories-filter.scss";

const CategoriesFilter = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);
    const currentCategory = useSelector(
        (state) => state.categories.currentCategory
    );

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const handleCategoryChange = (param) => {
        dispatch(resetVideosList());
        dispatch(changeCurrentCategory(param));
    };

    return (
        <div className="categories-filter__wrapper">
            <div className="categories-filter__inner">
                <div
                    className={`categories-filter__item${
                        currentCategory === "all" ? " active" : ""
                    }`}
                    onClick={() => handleCategoryChange("all")}
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
                                currentCategory === title.toLowerCase()
                                    ? " active"
                                    : ""
                            }`}
                            onClick={() =>
                                handleCategoryChange(title.toLowerCase())
                            }
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
