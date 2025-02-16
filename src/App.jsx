import { Route, Routes, useLocation } from "react-router-dom";
//pages
import HomePage from "./pages/HomePage";

const App = () => {
  const location = useLocation();
  const handleClearStorage = () => {
    localStorage.removeItem("username"); // Remove username from localStorage
    setUsername(""); // Clear the input field
  };


  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
