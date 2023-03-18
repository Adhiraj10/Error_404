import React, { useState } from "react";
import "../css/Index.css";
import ProductDetails from "./productDetails";
import { useLocation , useNavigate } from "react-router";
const GetStarted = () => {
  const [isCrossed , setisCrossed] = useState(true)
  const toggleCross = ()=>{
    setisCrossed(!isCrossed)
  }
  const location = useLocation();
  console.log(location.state);
  return (

   
    
    <>
    {isCrossed ?<div className="main-getStarted-container">
    <div className="main-shop-container">
      
        <div className="shop-heading">
          <p>Add a product</p>
          <h1>On Respective websites</h1>
        </div>

        <div className="shop-options-div">
          <div onClick={toggleCross} className="shopify shop">
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
    </div> : <ProductDetails state = {location.state} toggleCross ={toggleCross}></ProductDetails> }
    
    
     
    </>
  );
};

export default GetStarted;
