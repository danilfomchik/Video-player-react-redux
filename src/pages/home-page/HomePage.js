import { Box } from "@chakra-ui/react";
import ErrorBoundary from "../../components/ErrorBoundary";

import VideosList from "./videos-list/VideosList";
import CategoriesFilter from "./categories-filter/CategoriesFilter";

import "./home-page.scss";

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

// подфиксить блок с категориями - скролл уходит за область видимости
// при скролле мыши над блоком с категориями чтобы срабатывал скролл
// Добавить стрелку для категорий

// Обернуть рендер скелетон лист в юзколбек

// создать компонент ошибки (для эрор баундери, ошибок и тд)

// использовать useSearchParams router-dom для сохранения категории в юрл адресе
// https://www.youtube.com/watch?v=ukpgxEemXsk&ab_channel=ByteGrad
// (попробовать, не факт что будет в проекте)

// Для удаление, добавления и получения плейлиста с видео использовать ртк квери
// Написать тесты
