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
      console.log(payload)
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
            <div className="graph-heading-div">
              <h1>Graphs</h1>
            </div>
            <div className="graphs-div">
              <div className="graphs"></div>
              <div className="graphs"></div>
              <div className="graphs"></div>
            </div>
            <div className="add-product-heading-div">
              <h1 className="add-product-heading">
                <span>Products</span>{" "}
              </h1>
              <button onClick={()=>navigate("/selectshop" , {state : {
              curr : location.state,
            }})}  className="add-shop-btn-admin" ><p>Add Product</p></button>
            </div>
            <div className="user-shops-products">
             
                {products.length> 0 && products.map((product) => (<div className="product-div">
                    <div className="product-img-1 product-img"></div>
                    <div className="product-details">
                    <div>
                    <h1  className="product-name">{product.productName}</h1>
                        
                        <p>Visitors {parseInt(product.shopifyCount) + parseInt(product.magentoCount) + parseInt(product.wordPressCount)}</p>
                    </div>
                       
                        <div className="delete-shop-div">
                <div className="delete-btn"></div>
              </div>
                    </div>

                </div>)
                 
                ) }
                
            </div>
            
            
           
          </div>
    </div>
      
    </>)
}

export default Products;