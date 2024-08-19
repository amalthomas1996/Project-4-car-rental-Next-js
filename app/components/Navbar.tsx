import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      {/* Nav Bar */}
      <nav className="navbar">
        <div className="logo">
          <a href="#">
            <img src="/main-logo.svg" alt="Car Rental Logo" />
          </a>
        </div>
        <div className="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Corporate</a>
          </li>
          <li>
            <a href="#">Personal</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="right-icons">
          <div className="social-icons">
            <a href="#">
              <img src="/facebook-logo.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/insta-logo.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/x-logo.svg" alt="X" />
            </a>
            <a href="#">
              <img src="/linkedin-logo.svg" alt="LinkedIn" />
            </a>
          </div>
          <div className="profile">
            <div className="notification">
              <img src="/notification-icon.svg" alt="Notification" />
              {/* for dynamic notification count */}
              {/* <span className="notification-count">1</span> */}
            </div>
            <a href="#" className="profile-link">
              <div className="profile-icon">J</div>
              <span className="profile-name">John Doe</span>
            </a>
          </div>
        </div>
      </nav>
      <div className="mobile-menu" id="mobile-menu">
        <ul className="mobile-nav-links">
          <li>
            <a href="#">About Us</a>
          </li>
          <div className="mobile"></div>
          <li>
            <a href="#">Offers</a>
          </li>
          <div className="mobile"></div>
          <li>
            <a href="#">Corporate</a>
          </li>
          <div className="mobile"></div>
          <li>
            <a href="#">Personal</a>
          </li>
          <div className="mobile"></div>
          <li>
            <a href="#">Locations</a>
          </li>
          <div className="mobile"></div>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <div className="login-signup-btn">Log In/Sign Up</div>{" "}
        {/* Log In/Sign Up Button */}
      </div>
      <div className="under-text-container">
        <span className="under-text">
          Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand
          Sales Counters | All Rates inclusive of VAT. T&C's apply | Follow us
          on Social Media for New Offers
        </span>
      </div>
      {/* Nav Bar end */}
    </div>
  );
};

export default Navbar;
