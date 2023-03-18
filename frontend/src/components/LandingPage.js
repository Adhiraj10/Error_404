import React from "react";
import Navbar from "./Navbar";
import Analytic from '../utils/img/Analytics.png'
// import Analytic2 from '../utils/img/Analytic2.avif'
import Analytic3 from '../utils/img/Data-transformation.jpg'
// import Profile from "./Profile";

const LandingPage = () => {
  return (
    <>
      <div className="w-full p-32">
        <Navbar />
        <div className="">
          <div className="flex flex-row items-center">
            <div className="">
              <p className="text-6xl">Welcome to
                <span className="font-semibold text-teal-400 underline underline-offset-3 ml-4 decoration-4 sm:decoration-8 decoration-[#8685EF]">
                  KuchhToHai
                </span>{" "}
              </p>
              <p className="max-w-3xl pt-4 px-1 text-gray-800 text-2xl">
                We are committed to helping you make data-driven decisions about your products, so you can optimize their performance and improve your bottom line.
                Our platform will analyze your products and provide you number of unique visiters for every product.
              </p>

              <div className="mt-4 ml-1">
                <button type="button" class="text-xl text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-slate-200 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Get Start
                </button>
              </div>
            </div>
            <div className="w-[45%] ml-auto mt-8">
              <img className="animate-bounce" src={Analytic} alt="" />
            </div>
          </div>

          <section className="mt-40 w-full">
            <p className="text-6xl">
              Follow the following steps to add
              <span className="font-semibold text-teal-400 underline underline-offset-3 ml-4 decoration-4 sm:decoration-8 decoration-[#8685EF]">
                Script
              </span>{" "}
            </p>

            <div>
              <span className="font-bold">Shopify</span>

              {/* code section */}
              <div>
                <code>

                </code>
              </div>
            </div>
          </section>

          <div className="mt-10 h-40 w-full bg-green-300">
            <h1>wordpress section</h1>
          </div>
          <div className="mt-10 h-40 w-full bg-green-300">
            <h1>Magento section</h1>
          </div>


          <div className="w-full mt-4 flex flex-row justify-center">
            <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
              Click here to start Analyzing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
