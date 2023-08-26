import { Box } from "@chakra-ui/react";

import VideosList from "./videos-list/VideosList";

import "./home-page.scss";

const HomePage = () => {
    return (
        <Box color="white" className="main-content">
            <div>filters component</div>
            <section>
                <VideosList />
            </section>
        </Box>
    );
};

export default HomePage;
