import React from "react";

const Booking = () => {
  return (
    <section className="booking-section">
      <div className="location-select">
        <span className="pickup-option">Same as Pick-Up</span>
        <span className="dropoff-option">Different Drop-Off</span>
          <select id="vehicle-type" className="dropdown-select">
            <option value="" disabled selected>
              Select vehicle type
            </option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
          </select>
        </div>
      </div>

      {/* Booking Form */}
      <form className="booking-form">
        <div className="form-item">
          <label htmlFor="location" className="icon-location">
            <img src="/location-icon.svg" alt="location-icon" />
          </label>

          <select
            id="location"
            name="location"
            className="dropdown-select-booking"
          >
            <option value="al-quoz" selected>
              Al Quoz
            </option>
            <option value="downtown">Downtown</option>
            <option value="burj-khalifa">Burj Khalifa</option>
            {/* add more options here if needed */}
          </select>

          <span className="dropdown-icon">
            <img src="/dropdown-icon.svg" alt="" />
          </span>
        </div>

        <div className="form-item">
          <label htmlFor="pickup-date" className="icon-calendar">
            <img src="/calender-icon.svg" alt="calendar-icon" />
          </label>
          <input
            type="date"
            id="pickup-date"
            name="pickup-date"
            defaultValue="2023-10-30"
          />
          <input
            type="time"
            id="pickup-time"
            name="pickup-time"
            defaultValue="09:00"
          />
        </div>

        <div className="form-item">
          <label htmlFor="dropoff-date" className="icon-calendar">
            <img src="/calender-icon.svg" alt="calendar-icon" />
          </label>
          <input
            type="date"
            id="dropoff-date"
            name="dropoff-date"
            defaultValue="2023-11-29"
          />
          <input
            type="time"
            id="dropoff-time"
            name="dropoff-time"
            defaultValue="09:00"
          />
        </div>

        <div className="search-icon">
          <button type="submit" className="search-icon-button">
            <img src="/search-line-icon.svg" alt="search icon" />
          </button>
        </div>

        <div className="vertical-line"></div>

        <div className="form-item q-book">
          <button type="submit" className="quick-book">
            Quick Book
          </button>
        </div>
      </form>

      <div className="app-download">
        <span>Download our App for easy accessibility anytime, anywhere!</span>
        <div className="store-buttons">
          <img src="/app-store-button.svg" alt="App Store" />
          <img src="/play-store-button.svg" alt="Google Play" />
        </div>
      </div>
    </section>
  );
};

export default Booking;
