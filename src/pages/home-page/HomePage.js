import { Box } from "@chakra-ui/react";

import VideosList from "./videos-list/VideosList";
import CategoriesFilter from "./categories-filter/CategoriesFilter";

import "./home-page.scss";

const HomePage = () => {
    return (
        <Box color="white" className="main-content">
            <CategoriesFilter />
            <section>
                <VideosList />
            </section>
        </Box>
    );
};

export default HomePage;

// bugs:
// ++ починить подгрузку по скроллу
// ++ при изменении категории нужно обновлять массив с видео (чтобы новые видео были единственные в массиве)
// get_channel_icon срабатывает на следующий рендер, а не сразу
// доделать верстку блока с категориями
