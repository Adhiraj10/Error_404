import React, { useEffect, useState } from "react"
import "../css/product.css"
import { Link } from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';
import { useNavigate } from "react-router-dom";

const Products = ({handleToggle})=>{
    const navigate = useNavigate();
   useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".product-div"), {
		max: 25,
		speed: 400,
    
        
	});
   } , [])
    return(<>
    <div className="main-productcontainer-div">
    <div className="main-admin-product-container">
            <div>
              <h1 className="add-product-heading">
                Add a <span>Product</span>{" "}
              </h1>
            </div>
            <div className="user-shops-products">
             
                <div className="product-div">
                    <div className="product-img-1 product-img"></div>
                    <div className="product-details">
                        <h1  className="product-name">product name</h1>
                        <p>printed tshirt</p>
                        <p>Rs.500</p>
                    </div>
                </div>
                <div className="product-div">
                <div className="product-img-2 product-img"></div>
                <div className="product-details">

                
                <h1 className="product-name">product name</h1>
                        <p>printed tshirt</p>
                        <p>Rs.500</p>
                </div>
                </div>
                <div className="product-div">
                <div className="product-img-3 product-img"></div>
                <div className="product-details">
                
                <h1  className="product-name">product name</h1>
                        <p>printed tshirt</p>
                        <p>Rs.500</p>
                </div>
                </div>
            </div>
            
            <button onClick={()=>navigate("/selectshop")}  className="add-shop-btn-admin" ><p>Add Product</p></button>
           
          </div>
    </div>
      
    </>)
}

export default Products;