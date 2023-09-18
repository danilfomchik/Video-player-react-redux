import { Box } from "@chakra-ui/react";
// import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundary from "../../components/ErrorBoundary";

import VideosList from "./videos-list/VideosList";
import CategoriesFilter from "./categories-filter/CategoriesFilter";

import "./home-page.scss";

const Child = () => {
    throw new Error("errerrerer");
};

const HomePage = () => {
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

// сделать блок с фильтрами фиксированным

// создать компонент ошибки (для эрор баундери, ошибок и тд)

// использовать useSearchParams router-dom для сохранения категории в юрл адресе
// https://www.youtube.com/watch?v=ukpgxEemXsk&ab_channel=ByteGrad
// (попробовать, не факт что будет в проекте)

// Для удаление, добавления и получения плейлиста с видео использовать ртк квери
// Написать тесты
