import "./SplashPage.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className={"SplashPage"}>
        <p className={"splashText"}>SPlash Page Design goes here.</p>
        <p className={"splashText"}>Going to Home Page after 5 seconds.</p>
      </main>
    </>
  );
};

export default SplashPage;
