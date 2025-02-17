import "./TicketReady.css";
import { useSearchParams } from "react-router-dom";

const TicketReady = () => {
  const [, setSearchParams] = useSearchParams();

  // Mock ticket data (replace with dynamic data if needed)
  const ticketData = {
    name: "Avi Chukwu",
    type: "VIP",
    email: "User@email.com",
    quantity: "1",
    specialRequest: "Nil",
  };

  return (
    <>
      <div className={"ticket-ready"}>
        <div>
          <h1 className="input-one">Your Ticket is Booked!</h1>
          <p className="text-paragraph">
            Check your email for a copy or you can download it below.
          </p>
        </div>

        {/* Ticket Details */}
        <div className="ticket-details">
          <img src="/Ticket.svg" alt="TicketDetails" className="ticket-details" />
  
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button
            className="button-outline"
            onClick={() => {
              setSearchParams({ step: "1" });
            }}
          >
            Book Another Ticket
          </button>

          <button className="button-fill">Download Ticket</button>
        </div>
      </div>
    </>
  );
};

export default TicketReady;