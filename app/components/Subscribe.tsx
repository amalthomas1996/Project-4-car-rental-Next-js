import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe-container">
      <div className="subscribe-left">
        <h1>Subscribe here for exclusive offers and updates!</h1>
        <form className="subscribe-form">
          <div className="input-group">
            <input type="text" placeholder="Name" className="form-input-subscribe">
            <input type="email" placeholder="Email" className="form-input-subscribe">
          </div>
          <span>Don't miss out! Enter your email and your name, then hit subscribe to unlock a world of special offers and
            details.</span>
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>

      <div className="subscribe-right">
        <div className="phone-mockup">
          <img src="/mobile-image.svg" alt="Phone Mockup"/>
        </div>
        <div className="phone-form">
          <p>Enter your number and receive a direct link to download the app</p>
          <input type="text" placeholder="Enter Phone Number" className="form-input">
          <button type="submit" className="phone-button">Get the link</button>
          <div className="form-input-text">Get in on</div>
          <div className="app-buttons">
            <img className="app-button" src="./Assets/playstore-button-light.svg" alt="">
            <img className="app-button" src="./Assets/store-button-light.svg" alt="">
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Subscribe;
