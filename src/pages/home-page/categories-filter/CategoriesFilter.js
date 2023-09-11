import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScrollOnDrag from "react-scroll-ondrag";

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
    const { events } = useScrollOnDrag(containerRef);

    // const onDragScroll = (e) => {
    //     console.log(e.target);

    //     e.target.addEventListener("mousemove", () => {
    //         console.log("move");
    //     });

    //     return e.target.removeEventListener("mousemove", () => {
    //         console.log("move");
    //     });
    // };

    // два события onMouseDown и onMouseUp. при onMouseDown запускается mousemove, а при onMouseUp удаляется этот слушатель.
    // реализовать прокрутку нативным js
    // сделать блок с фильтрами фиксированным

    return (
        <div className="categories-filter__wrapper">
            <div
                className="categories-filter__inner"
                // style={{ transform: "translateX(0px)" }}
                ref={containerRef}
                {...events}
                // onMouseMove={() => console.log("move")}
                // onMouseDown={(e) => onDragScroll(e)}
            >
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
