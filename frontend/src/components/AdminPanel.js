import React from "react";
import "../css/admin.css";

const AdminPanel = () =>{
    return (
        <>
            <div className="admin-main-container">
                <div className="admin-wrapper">

                    <div className="admin-menu">
                    <div className="menu-options  shop-option">
                            <h1>Profile</h1>
                        </div>
                        <div className="menu-options shop-option">
                            <h1>Shops</h1>
                        </div>
                        
                    </div>
                    <div className="main-shop-container">
                        <div className="user-shops"></div>
                        <div className="user-shops"></div>
                        <div className="user-shops"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanel;