import { Box } from "@chakra-ui/react";

import Navbar from "./app/navbar/Navbar";
import Header from "./app/header/Header";

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

                    {/* router */}
                    <Box color="white" className="main-content">
                        main
                    </Box>
                </Box>
            </main>
        </div>
    );
}

export default App;
