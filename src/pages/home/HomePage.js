import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useOutlet } from "react-router-dom";

import CategoriesFilter from "./categories-filter/CategoriesFilter";
import VideosList from "../../app/videosList/VideosList";

import ErrorBoundary from "../../components/ErrorBoundary";

import "../../app/videosList/VideosList";

const HomePage = () => {
    const outlet = useOutlet();
    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch();

    const searchValue = useSelector((state) => state.search.searchValue);
    const currentCategory = useSelector(
        (state) => state.categories.currentCategory
    );

    useEffect(() => {
        const searchParam = searchValue
            ? { searchQuery: searchValue }
            : undefined;

        const params = {
            categoryId: currentCategory,
            ...searchParam,
        };

        setSearchParams(params, { replace: true });
    }, [searchValue, currentCategory]);

    return (
        <>
            <CategoriesFilter />
            <section>
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <VideosList />
                </ErrorBoundary>
            </section>
        </>
    );
};

export default HomePage;

// при клике на главную иконку перебрасывать на начальную страницу сбрасывая все фильтры и тд.

// настроить навигацию. например когда кникаю на стрелку назад должен показываться предыдущий урл

// Адаптив делать гридами: grid-template-areas

// ---------------------
// создать компонент ошибки (для эрор баундери, ошибок и тд)

// Для удаление, добавления и получения плейлиста с видео использовать ртк квери
// Написать тесты
