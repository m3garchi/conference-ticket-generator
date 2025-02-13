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

        <button
          onClick={() => {
            setSearchParams({
              step: "3",
            });
          }}
        >
          Get my Free Ticket
        </button>
      </div>
    </>
  );
};

export default AttendeeDetails;
