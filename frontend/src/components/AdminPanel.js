import React from "react";
import { useState } from "react";
import "../css/admin.css";
import MainShop from "./MainShop";
import Products from "./Products";
import GetStarted from "./GetStarted";

const AdminPanel = () => {
    const [isAddProductClicked , setisAddProductClicked] = useState(false);
    const handleToggle = () => {
        setisAddProductClicked(!isAddProductClicked);
        console.log(isAddProductClicked);
      };
  return (
    <>
      <div className="admin-main-container">
        <div className="admin-wrapper">
          <div className="admin-menu">
            <div className="profile-details">
              <div className="profile-pic"></div>
              <div className="admin-name"> Pratham</div>
            </div>
            <div className="menu-options  shop-option">
              <div className="menu-home-icon"></div>
              <h1>Home</h1>
            </div>
            <div className="menu-options shop-option">
              <div className="menu-store-icon"></div>
              <h1>Shops</h1>
            </div>
          </div>

          {/* <MainShop></MainShop> */}
          {isAddProductClicked ?<GetStarted isAddProductClicked={isAddProductClicked} handleToggle={handleToggle} ></GetStarted> :<Products handleToggle={handleToggle}></Products>}
          
          
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
