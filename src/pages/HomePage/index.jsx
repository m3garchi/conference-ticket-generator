import { useSearchParams } from "react-router-dom";
import "./HomePage.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import AttendeeDetails from "./components/AttendeeDetails/AttendeeDetails";
import SelectCost from "./components/SelectCost/SelectCost";
import TicketReady from "./components/TicketReady/TicketReady";
import ProgressBar from "./components/ProgressBar/ProgressBar";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStep = searchParams.get("step") || "1";

  useEffect(() => {
    if (+currentStep < 2 || +currentStep > 3 || !currentStep)
      setSearchParams({
        step: "1",
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className={"home-page"}>
        <div className="navbar-container">
          <Navbar />
        </div>

        <div className="content-container">
          <ProgressBar />

          <div className="main-content-container">
            {currentStep === "1" && <SelectCost />}
            {currentStep === "2" && <AttendeeDetails />}
            {currentStep === "3" && <TicketReady />}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
