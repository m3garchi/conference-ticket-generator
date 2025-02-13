import { Route, Routes, useLocation } from "react-router-dom";
//pages
import { SplashPage, HomePage } from "./pages";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<SplashPage />} />

        <Route path={"/home"} element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
