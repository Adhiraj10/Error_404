import React from "react";
import Navbar from "./Navbar";
import Analytic from '../utils/img/Analytics.png'
// import Analytic2 from '../utils/img/Analytic2.avif'
import Analytic3 from '../utils/img/Data-transformation.jpg'
import Profile from "./Profile";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="m-32">
        <div className="flex flex-row items-center">
          <div className="">
            <p className="text-6xl">Welcome to <span className="font-semibold text-teal-400">KuchhToHai</span></p>
            <p className="max-w-3xl pt-4 px-1">
              We are committed to helping you make data-driven decisions about your products, so you can optimize their performance and improve your bottom line. Our platform provides powerful analytics tools that allow you to track key metrics such as sales, revenue, and customer behavior.
            </p>
          </div>
          <div className="w-1/3 ml-auto">
            <img src={Analytic} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="landing-main-container">

        <div className="website-information"></div>
      </div> */}
    </>
  );
};

export default LandingPage;
