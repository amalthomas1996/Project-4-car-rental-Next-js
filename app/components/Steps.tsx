import React from "react";

const Steps = () => {
  return (
    <div className="steps">
      <h2>Rent/Lease In Three Easy Steps</h2>

      <div className="steps-container">
        <div className="step-wrapper">
          <div className="step-number">
            <img src="/step-1.svg" alt="step-1" />
          </div>
          <div className="step">
            <div className="step-icon">
              <img src="/location-red-icon.svg" alt=" Location Icon" />
            </div>
            <div className="step-description">
              Select the location. Browse through our available options and find
              the perfect car to suit your needs.
            </div>
          </div>
        </div>

        <div className="step-wrapper">
          <div className="step-number">
            <img src="/step-2.svg" alt="step-2" />
          </div>
          <div className="step">
            <div className="step-icon">
              <img src="/calender-red-icon.svg" alt="Calendar Icon" />
            </div>
            <div className="step-description">
              Choose your desired Pick-Up date and time.
            </div>
          </div>
        </div>

        <div className="step-wrapper">
          <div className="step-number">
            <img src="./Assets/step-3.svg" alt="step-3" />
          </div>
          <div className="step">
            <div className="step-icon">
              <img src="./Assets/car-red-icon.svg" alt="Car Icon" />
            </div>
            <div className="step-description">
              Make payment and book the car. Select an option to either have the
              car delivered to your location or pick it up directly from us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
