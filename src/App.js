import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./app/navbar/Navbar";
import Header from "./app/header/Header";

// make lazy load for pages
import HomePage from "./pages/home-page/HomePage";

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

                    {/* <Suspense fallback={<Spinner />}> */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
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
                        <Route
                            path="*"
                            element={
                                <Box color="white" className="main-content">
                                    error
                                </Box>
                            }
                        />
                    </Routes>
                    {/* </Suspense> */}
                </Box>
            </main>
        </div>
    );
}

export default App;
