import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Box, ChakraProvider, CSSReset } from "@chakra-ui/react";
const Home = lazy(() => import("./pages/Home"));
const ChatBot = lazy(() => import("./pages/ChatBot"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box className="App" p="4">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback="Loading...">
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/ChatBot"
              element={
                <Suspense fallback="Loading...">
                  <ChatBot />
                </Suspense>
              }
            />
            <Route
              path="/AboutUs"
              element={
                <Suspense fallback="Loading...">
                  <AboutUs />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
