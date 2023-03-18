import React from "react"
import { useState  , useEffect} from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const MainShop = ({userid,handleShopsClickfalse})=>{
    const [shops , setShops] = useState([]);
    const func = async () => {
          const payload = await axios.post("http://localhost:4000/api/user/shop", {id : userid});
          setShops(payload.data.allShops);
        }
    useEffect(() => {
        func();
    },[])
    const navigate = useNavigate();
    return(<>
        <div className="main-shopcontainer-div">
        <div className="main-admin-shop-container">
            <div>
              <h1 className="add-shop-heading">
                Add a <span>Shop</span>{" "}
              </h1>
            </div>
           
            
            <div onClick={()=>navigate("/products")} className="user-shops">
              <div className="user-shop-div">
                <div className="shop-icon"></div>
                <div className="shop-name">Shop 2</div>
              </div>
              <div className="shop-info">
                <div className="visitor-count">
                  <div className="visitor-icon"></div>
                  <h1>Visitor Count</h1>
                  <div className="count-circle">20</div>
                </div>

                <div className="product-count">
                  <div className="product-icon"></div>
                  <h1> Products</h1>
                  <div className="count-circle">20</div>
                </div>
              </div>
            </div>

            
           
          
           <div onClick={()=>navigate("/products")} className="user-shops">
              <div className="user-shop-div">
                <div className="shop-icon"></div>
                <div className="shop-name">Shop 1</div>
              </div>
              <div className="shop-info">
                <div className="visitor-count">
                  <div className="visitor-icon"></div>
                  <h1>Visitor Count</h1>
                  <div className="count-circle">20</div>
                </div>

                <div className="product-count">
                  <div className="product-icon"></div>
                  <h1> Products</h1>
                  <div className="count-circle">20</div>
                </div>
              </div>
            </div>
          
           
            <button className="add-shop-btn-admin"><p>Add Shop</p></button>
          </div>

        </div>
      
    </>)
}

export default MainShop;