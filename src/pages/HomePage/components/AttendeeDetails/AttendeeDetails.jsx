import "./AttendeeDetails.css";
import { useSearchParams } from "react-router-dom";

const AttendeeDetails = () => {
  const [, setSearchParams] = useSearchParams();

  return (
    <>
      <div className={"attendee-details"}>
        <p className="text-info">
          Showing Attendee Details form and other things now
        </p>

        <div className="button-group">
          <button
            className="button-outline"
            onClick={() => {
              setSearchParams({
                step: "1",
              });
            }}
          >
            Back
          </button>

          <button className="button-fill">Get My Free Ticket</button>
        </div>
      </div>
    </>
  );
};

export default AttendeeDetails;
