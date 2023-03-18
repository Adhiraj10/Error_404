import React, { useEffect, useState } from "react"
import axios from 'axios'
import "../css/product.css"
import { Link } from "react-router-dom";
import VanillaTilt from 'vanilla-tilt';
import { useLocation , useNavigate } from "react-router-dom";

const Products = ({handleToggle })=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [products , setProducts] = useState([]);
    const func = async (req,res,next) => {
      console.log(location.state);
      const payload = await axios.get(`http://localhost:4000/api/user/product/${location.state.shopid}`);
      setProducts(payload.data);
    }
   useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".product-div"), {
		max: 25,
		speed: 400,
	});
   func()
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
             
                {products.length> 0 && products.map((product) => (<div className="product-div">
                    <div className="product-img-1 product-img"></div>
                    <div className="product-details">
                        <h1  className="product-name">{product.productName}</h1>
                        <p></p>
                        <p>{parseInt(product.shopifyCount) + parseInt(product.magentoCount) + parseInt(product.wordPressCount)}</p>
                    </div>
                </div>)
                 
                ) }
                
            </div>
            
            <button onClick={()=>navigate("/selectshop" , {state : {
              state : location.state,
              products : setProducts
            }})}  className="add-shop-btn-admin" ><p>Add Product</p></button>
           
          </div>
    </div>
      
    </>)
}

export default Products;