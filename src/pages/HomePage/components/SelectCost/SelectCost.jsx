import "./SelectCost.css";
import { useSearchParams } from "react-router-dom";

const SelectCost = () => {
  const [, setSearchParams] = useSearchParams();
  
  // Options for the number of tickets
  const ticketQuantityOptions = [1, 2, 3, 4, 5];

  return (
    <>
      <div className={"select-cost"}>

        <div className="event-card">
          <h1 className="event-title">Techember Fest "25</h1>
          <p className="event-details">
            Join us for an unforgettable experience at
             <br/>
            [Event Name]! Secure your spot now.
          </p>
          <p className="event-details">
            📍[Event Location] || March 15, 2025 | 7:00 PM
          </p>
        </div>

        {/* Adding a horizontal line */}
        <div className="horizontal-line"></div>

        <div>
          <p className="select-ticket">Select Ticket Type</p>
          <div className="ticket-types">
            {/* card 1 */}
            <label htmlFor="card1" className="ticket-card">
              <input
                type="radio"
                name="ticket-selection"
                id="card1"
                className="card-radio"
                value="free"
              />
              <div className="card-content">
                <h3>Free</h3>
                <p>REGULAR ACCESS <br/>20/52</p>
              </div>
            </label>
            {/* card 2 */}
            <label htmlFor="card2" className="ticket-card">
              <input
                type="radio"
                name="ticket-selection"
                id="card2"
                className="card-radio"
                value="vip"
              />
              <div className="card-content">
                <h3>$150</h3>
                <p>VIP ACCESS <br/>20/52</p>
              </div>
            </label>

            {/* card 3 */}
            <label htmlFor="card3" className="ticket-card">
              <input
                type="radio"
                name="ticket-selection"
                id="card3"
                className="card-radio"
                value="vvip"
              />
              <div className="card-content">
                <h3>$150</h3>
                <p>VVIP ACCESS <br/>20/52</p>
              </div>
            </label>
          
          </div>
        </div>

        {/* New Input Field for Number of Tickets */}
        <div className="ticket-quantity-section">
          <p className="select-ticket">Number of Tickets</p>
          <select className="ticket-quantity-select" name="ticket-quantity">
            {ticketQuantityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="button-group">
          <button className="button-outline">
            Cancel
          </button>
          <button className="button-fill"
            onClick={() => {
              setSearchParams({
                step: "2",
              });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectCost;