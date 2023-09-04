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
