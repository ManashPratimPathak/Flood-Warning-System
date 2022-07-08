import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import IntroPage from "./pages/introPage"
import { Footer } from "./components/shared/Footer";
import "./Global.css";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import FinalPage from "./pages/finalPage";
import { Mid } from "./components/Mid";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<IntroPage />} key="route-intro-screen" />
          <Route
            exact
            path="/secondPage"
            element={<SecondPage />}
            key="route-result-screen"
          />
          <Route
            exact
            path="/thirdPage"
            element={<ThirdPage />}
            key="route-result-screen"
          />
          <Route
            exact
            path="/details/:id"
            element={<FinalPage />}
            key="route-result-screen"
          />
          <Route
            exact
            path="/test"
            element={<Mid />}
            key="route-test-screen"
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
