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
// ++ get_channel_icon срабатывает на следующий рендер, а не сразу
// ++ добавить дьюрейшн, вьювс в компоненте видео (загружаются, но из-за того что компонент рендерится не дожидаясь их - они не успеваю отрендерится) - для фикса нужно чекать момент загрузки и потом отображать
// ++ Показывать скелетон при первой загрузке, при изменении категории, при вводе в поиск. А при пагинации только сообщение о подгрузке

// доделать верстку блока с категориями
