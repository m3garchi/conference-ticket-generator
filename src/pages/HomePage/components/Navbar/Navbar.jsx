import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className={"navbar"}>
        <div className="nav-container">
          <a href="/" className="logo">
            <img src="/Navlogo.svg" alt="NavLogo" className="navbar-logo" />
          </a>
        
          <div className="nav-links">
            <a href="/events">Events</a>
            <a href="/my-tickets">My Tickets</a>
            <a href="/about">About Project</a>
          </div>
        
          <a href="/my-tickets" className="my-tickets-btn">
            MY TICKETS →
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
