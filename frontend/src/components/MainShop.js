import React from "react"
import { useState  , useEffect} from "react";
import axios from 'axios'
import "../css/admin.css";
import { Link, useNavigate } from "react-router-dom";
import ShopDetails from "./ShopDetails";

const MainShop = ({userid,handleShopsClickfalse})=>{
    const [shops , setShops] = useState([]);
    const [isCrossed , setisCrossed] = useState(false)
  const toggleCross = ()=>{
    setisCrossed(!isCrossed)
  }
    const func = async () => {
          const payload = await axios.post("http://localhost:4000/api/user/shop/", {id : userid});
          const all = payload.data.allShops;

          let newAll = [];
          for(let i = 0 ; i < all.length ; i++){
            const {data} = await axios.get(
              `http://localhost:4000/api/user/product/${all[i]._id}`
            );

              console.log(data);
              let visitorC = 0;
              for(let j = 0 ; j < data.length ; j++){
                visitorC  = parseInt(visitorC) + parseInt(data[j].shopifyCount);
              }
              let newObj = {...all[i] , visitorCount : visitorC}
              newAll = [...newAll , newObj]
          }
          setShops([...newAll]);
          
    }
    useEffect(() => {
        func();
       
    },[])
    const handleDelete = async (id) => {
      try{
        await axios.delete(`http://localhost:4000/api/user/shop/${id}`)
        const del = shops.filter((shop) => shop._id !== id)
        setShops([...del])
      }
      catch(err){
        alert("Something Went Wrong PLease Try Again");
      }
    }
    const navigate = useNavigate();
    return(<>
     <div className="main-shopcontainer-div">
    <div className="main-admin-profile">
        <div className="profile-pic"></div>
        <div className="profile-name">Pratham Upadhyay</div>
        <div className="total-visitor-counts">
        <div><h1>Visitor Count</h1>
            <p>Total views</p>
            <h1>20</h1></div>
            <div>
            <div className="circle-percentage"><h1>50%</h1></div>
        </div>
        </div>
        
        <div className="total-shop-counts">
        <div><h1>Shop Count</h1>
            <p>Total shops</p>
            <h1>20</h1></div>
            <div>
            <div className="circle-percentage"><h1>50%</h1></div>
        </div>
        </div>
        <div className="total-products-counts">
        <div><h1>Product Count</h1>
            <p>Total products</p>
            <h1>20</h1></div>
            <div>
            <div className="circle-percentage"><h1>50%</h1></div>
        </div>
        </div>
    </div>
        <div className="main-admin-shop-container">
            <div className="add-shop-heading-div">
              <h1 className="add-shop-heading">
                 <span>Shops</span>{" "}
              </h1>
              <button onClick={toggleCross} className="add-shop-btn-admin"><p>Add Shop</p></button>
            </div>
           
            {
              shops && shops.length > 0 && shops.map((shop) => (<div onClick={()=>navigate("/products" , {state : {shopid : shop._id , visitor : shop.visitorCount}})} className="user-shops">
              <div className="user-shop-div">
                <div className="shop-icon"></div>
                <div className="shop-name">{shop.shopName}</div>
              </div>
              <div className="shop-description-edit">
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
              <div className="vertical-line"></div>
              <div className="delete-shop-div">
                <div onClick = {(e) =>{
                  e.stopPropagation();
                   handleDelete(shop._id)
                }}className="delete-btn"></div>
              </div>
              </div>
              
            </div>))
            }
           
            
          </div>

        </div>
        {isCrossed ? <>
        <ShopDetails set = {setShops} userid = {userid} toggleCross={toggleCross}></ShopDetails>
      </> : <></>}
        
    </>)
}

export default MainShop;