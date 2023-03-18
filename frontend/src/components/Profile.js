import React from "react";
import "../css/Index.css";
import user from '../utils/img/user.png'

const Profile = ()=>{
    return(
        <>
        <div className="profile-container">
            <div className="profile-picture">
                <img className="w-10 profile-picture" src={user} alt="user" />
            </div>
            <div className="profile-description">
                <h1 className="text-blue-500">Helllo</h1>
            </div>
          </div>
        </>
    )

}
export default Profile;