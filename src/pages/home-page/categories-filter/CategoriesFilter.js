import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

    return (
        <div className="categories-filter__wrapper">
            <div className="categories-filter__inner">
                <div
                    className={`categories-filter__item${
                        currentCategory === "all" ? " active" : ""
                    }`}
                    onClick={() => dispatch(changeCurrentCategory("all"))}
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
                                dispatch(
                                    changeCurrentCategory(title.toLowerCase())
                                )
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
