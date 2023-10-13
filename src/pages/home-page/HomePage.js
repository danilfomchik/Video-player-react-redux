import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import ErrorBoundary from "../../components/ErrorBoundary";
import VideosList from "./videos-list/VideosList";
import CategoriesFilter from "./categories-filter/CategoriesFilter";

import "./home-page.scss";

const HomePage = () => {
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
        <Box color="white" className="main-content">
            <CategoriesFilter />
            <section>
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <VideosList />
                </ErrorBoundary>
            </section>
        </Box>
    );
};

export default HomePage;

// использовать useSearchParams router-dom для сохранения категории в юрл адресе
// https://www.youtube.com/watch?v=ukpgxEemXsk&ab_channel=ByteGrad
// (попробовать, не факт что будет в проекте)

// создать компонент ошибки (для эрор баундери, ошибок и тд)
// компонент ошибки должен принимать сообщение, например для fallback в ErrorBoundary одно сообщение, а для пустого списка с видео - другое

// Для удаление, добавления и получения плейлиста с видео использовать ртк квери
// Написать тесты
