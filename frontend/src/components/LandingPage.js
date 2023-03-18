import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div>
          <Profile />
        </div>
        <div>
          Main content
        </div>
      </div>

      <div className="landing-main-container">
        <div className="quote-section">
          <h1>"When the customer comes first, the customer will last."</h1>
        </div>
        <div className="website-information"></div>
      </div>
    </>
  );
};

export default LandingPage;
