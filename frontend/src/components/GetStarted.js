import React from "react";
import "../css/Index.css";

const GetStarted = ( {handleToggle}) => {
  return (
    <>
      <div className="main-shop-container">
      <div className="cross-btn-div">
      <div onClick={handleToggle}  >
      <div className="cross-1"></div>
        <div className="cross-2"></div>
      </div>
        
      </div>
        <div className="shop-heading">
          <p>Add a product</p>
          <h1>On Respective websites</h1>
        </div>

        <div className="shop-options-div">
          <div className="shopify shop">
            <div className="shop-img shopify-img"></div>

            <h1>Shopify</h1>
            <p>
              Shopify is a user-friendly e-commerce platform that helps small
              businesses build an online store
            </p>
            <button className="add-shop-btn">Add</button>

            <div className="shop-shadow"></div>
          </div>
          <div className="shopify shop">
            <div className="shop-img wordpress-img"></div>
            <h1> Wordpress</h1>{" "}
            <p>
              WordPress is a content management system (CMS) that allows you to
              host and build websites.
            </p>
            <button className="add-shop-btn">Add</button>
            <div className="shop-shadow"></div>
          </div>
          <div className="shopify shop">
            <div className="shop-img magento-img"></div>
            <h1>Magento</h1>

            <p>
              Magento is now Adobe Commerce. Build multichannel experiences for
              B2B and B2C customers on a single eCommerce platform.
            </p>
            <button className="add-shop-btn">Add</button>
            <div className="shop-shadow"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
