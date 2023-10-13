import { lazy, Suspense, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route, useSearchParams } from "react-router-dom";

import Navbar from "./app/navbar/Navbar";
import Header from "./app/header/Header";

import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./pages/home-page/HomePage"));
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

                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route
                                path="library"
                                element={
                                    <Box color="white" className="main-content">
                                        library
                                    </Box>
                                }
                            />
                            <Route
                                path="/shorts"
                                element={
                                    <Box color="white" className="main-content">
                                        shorts
                                    </Box>
                                }
                            />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </Box>
            </main>
        </div>
    );
}

export default App;
