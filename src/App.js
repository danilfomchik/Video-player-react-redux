import { lazy, Suspense, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import {
    Routes,
    Route,
    useSearchParams,
    useOutlet,
    Outlet,
} from "react-router-dom";

import Navbar from "./app/navbar/Navbar";
import Header from "./app/header/Header";

import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const VideoPage = lazy(() => import("./pages/videoPage/VideoPage"));

const Page404 = lazy(() => import("./pages/page404/Page404"));

function App() {
    return (
        <div className="App">
            <Header />

            <main>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    minHeight="100vh"
                    bg="#121214"
                >
                    <Navbar />

                    <Box className="main-content">
                        <Suspense fallback={<Spinner />}>
                            <Routes>
                                <Route index path="/" element={<HomePage />} />
                                <Route path="/watch" element={<VideoPage />} />

                                <Route
                                    path="library"
                                    element={
                                        <Box color="white">
                                            подключить firebase (хранилище для
                                            данных + аутентификация и тд)
                                            ---------
                                            https://www.youtube.com/watch?v=c9A2TfGKmxE&list=PLQKg8mIgoxKraMfKckMux0tLJfQEivnKv
                                        </Box>
                                    }
                                />
                                <Route
                                    path="/shorts"
                                    element={
                                        <Box color="white">
                                            shorts, проверять видео на длину
                                            (должно быть меньше 60 сек)
                                        </Box>
                                    }
                                />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </Suspense>
                    </Box>
                </Box>
            </main>
        </div>
    );
}

export default App;
