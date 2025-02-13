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
      <img src="/Logo.svg" alt="Logo" className="rotatingLogo" />
      </main>
    </>
  );
};

export default SplashPage;
