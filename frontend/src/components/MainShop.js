import React from "react"
import { useState  , useEffect} from "react";
import axios from 'axios'
import "../css/admin.css";
import { Link, useNavigate } from "react-router-dom";
import ShopDetails from "./ShopDetails";

const MainShop = ({userid,handleShopsClickfalse})=>{
    const [shops , setShops] = useState([]);
    const [isCrossed , setisCrossed] = useState(true)
  const toggleCross = ()=>{
    setisCrossed(!isCrossed)
  }
    const func = async () => {
          const payload = await axios.post("http://localhost:4000/api/user/shop", {id : userid});
          setShops(payload.data.allShops);
        }
    useEffect(() => {
        func();
    },[])
    const navigate = useNavigate();
    return(<>
    {isCrossed ? <div className="main-shopcontainer-div">
        <div className="main-admin-shop-container">
            <div>
              <h1 className="add-shop-heading">
                Add a <span>Shop</span>{" "}
              </h1>
            </div>
           
            {
              shops.length > 0 && shops.map((shop) => (<div onClick={()=>navigate("/products" , {state : {shopid : shop._id , visitor : shop.visitorCount}})} className="user-shops">
              <div className="user-shop-div">
                <div className="shop-icon"></div>
                <div className="shop-name">{shop.shopName}</div>
              </div>
              <div className="shop-info">
                <div className="visitor-count">
                  <div className="visitor-icon"></div>
                  <h1>Visitor Count</h1>
                  <div className="count-circle">{shop.visitorCount}</div>
                </div>

                <div className="product-count">
                  <div className="product-icon"></div>
                  <h1> Products</h1>
                  <div className="count-circle">20</div>
                </div>
              </div>
            </div>))
            }
           
            <button onClick={toggleCross} className="add-shop-btn-admin"><p>Add Shop</p></button>
          </div>

        </div>
      : <>
        <ShopDetails toggleCross={toggleCross}></ShopDetails>
      </>}
        
    </>)
}

export default MainShop;