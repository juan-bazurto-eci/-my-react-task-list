import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
const Home = lazy(() => import("./pages/Home"));
const Tasks = lazy(() => import("./pages/Tasks"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback="loading ...">
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/Tasks"
            element={
              <Suspense fallback="loading ...">
                <Tasks />
              </Suspense>
            }
          />
          <Route
            path="/AboutUs"
            element={
              <Suspense fallback="loading ...">
                <AboutUs />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
