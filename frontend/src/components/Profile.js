import React from "react";
import "../css/Index.css";
import user from '../utils/img/user.png'

const Profile = ()=>{
    return(
        <>
        <div className="main-admin-profile">
        <div className="profile-pic"></div>
        <div className="profile-name">Pratham Upadhyay</div>
        <div className="total-visitor-counts">
        <div><h1>Visitor Count</h1>
            <p>Total views</p>
            <h1>20</h1></div>
           
        </div>
        
        <div className="total-shop-counts">
        <div><h1>Shop Count</h1>
            <p>Total shops</p>
            <h1>20</h1></div>
            
        </div>
        <div className="total-products-counts">
        <div><h1>Product Count</h1>
            <p>Total products</p>
            <h1>20</h1></div>
            
        </div>
    </div>
        </>
    )

}
export default Profile;