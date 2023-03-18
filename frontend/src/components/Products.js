import React, { useEffect, useState } from "react"
import "../css/product.css"
import { Link } from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';
import { useNavigate } from "react-router-dom";

const Products = ({handleToggle })=>{
    const navigate = useNavigate();
   useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".product-div"), {
		max: 25,
		speed: 400,
 
	});
   } , [])
    return(<>
    <div className="main-productcontainer-div">
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
    <div className="main-admin-product-container">
            <div className="add-product-heading-div">
              <h1 className="add-product-heading">
                <span>Products</span>{" "}
              </h1>
              <button onClick={()=>navigate("/selectshop")}  className="add-shop-btn-admin" ><p>Add Product</p></button>
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
                <div className="product-div">
                <div className="product-img-3 product-img"></div>
                <div className="product-details">
                
                <h1  className="product-name">product name</h1>
                        <p>printed tshirt</p>
                        <p>Rs.500</p>
                </div>
                </div>
                
               
            </div>
            
           
           
          </div>
    </div>
      
    </>)
}

export default Products;