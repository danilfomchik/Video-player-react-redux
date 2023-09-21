import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScrollOnDrag from "react-scroll-ondrag";

import { onPageChange } from "../../../utils/helpers";

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
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }

        return () => dispatch(changeCurrentCategory("all"));
    }, []);

    const handleCategoryChange = (param) => {
        dispatch(resetVideosList());
        dispatch(changeCurrentCategory(param));
    };

    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    const { events } = useScrollOnDrag(containerRef);

    return (
        <div className="categories-filter__wrapper" ref={wrapperRef}>
            <div
                className="categories-filter__inner"
                ref={containerRef}
                {...events}
            >
                <div
                    className={`categories-filter__item${
                        currentCategory === "all" ? " active" : ""
                    }`}
                    onClick={() => {
                        handleCategoryChange("all");
                        onPageChange(wrapperRef);
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
                                currentCategory === title.toLowerCase()
                                    ? " active"
                                    : ""
                            }`}
                            onClick={() => {
                                handleCategoryChange(title.toLowerCase());
                                onPageChange(wrapperRef);
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
