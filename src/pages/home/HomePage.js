import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    useLocation,
    useSearchParams,
    useOutlet,
    Outlet,
} from "react-router-dom";

import { Box } from "@chakra-ui/react";

import ErrorBoundary from "../../components/ErrorBoundary";
import VideosList from "./videos-list/VideosList";
import CategoriesFilter from "./categories-filter/CategoriesFilter";

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

// при переходе на страницу с видео - а потом серче редирект перебрасывает на хоум пейдж но категория сохраняется. СДЕЛАТЬ ТАК, ЧТОБЫ КОГДА У НАС ОТКРЫТА СТРАНИЦА С ВИДЕО И МЫ ДЕЛАЛИ СЕРЧ - КАТЕГОРИЯ СБРАСЫВАЛАСЬ

// при клике на главную иконку перебрасывать на начальную страницу сбрасывая все ильтры и тд.

// настроить навигацию. например когда кникаю на стрелку назад должен показываться предыдущий урл

// Адаптив делать гридами: grid-template-areas

// ---------------------
// создать компонент ошибки (для эрор баундери, ошибок и тд)

// Для удаление, добавления и получения плейлиста с видео использовать ртк квери
// Написать тесты
