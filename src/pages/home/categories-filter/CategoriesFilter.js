import React, { useEffect, useRef, useTransition } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import qs from "query-string";

import useScrollOnDrag from "react-scroll-ondrag";

import { enableHorizontalScroll } from "../../../utils/helpers";

import { resetVideosList } from "../videosSlice";
import { fetchCategories, changeCurrentCategory } from "./categoriesSlice";

import { resetSearchValue } from "../../../app/header/search/searchSlice";

import "./categories-filter.scss";

const CategoriesFilter = () => {
    const [isPending, startTransition] = useTransition();
    const dispatch = useDispatch();

    const categories = useSelector((state) => state.categories.categories);
    const currentCategory = useSelector(
        (state) => state.categories.currentCategory
    );

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }

        enableHorizontalScroll(containerRef);

        // return () => dispatch(changeCurrentCategory("0"));
    }, []);

    const onCategoryChange = (newCategory) => {
        dispatch(resetSearchValue());
        startTransition(() => {
            dispatch(changeCurrentCategory(newCategory));
        });
    };

    const containerRef = useRef(null);

    const { events } = useScrollOnDrag(containerRef);

    return (
        <section>
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
                        onClick={() => onCategoryChange("0")}
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
                                    currentCategory === category.id
                                        ? " active"
                                        : ""
                                }`}
                                onClick={() => onCategoryChange(category.id)}
                            >
                                <span>{title}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoriesFilter;
