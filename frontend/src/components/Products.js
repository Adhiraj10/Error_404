import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/product.css";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import { useLocation, useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Products = ({ handleToggle }) => {
  // const data = [
  //   { name: "Facebook", users: 1 },
  //   { name: "Instagram", users: 0 },
  //   { name: "Twiter", users: 0 },
  //   { name: "Telegram", users: 0 },
  // ];
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const func = async (req, res, next) => {
    console.log(location.state);
    const payload = await axios.get(
      `http://localhost:4000/api/user/product/${location.state.shopid}`
    );
    console.log(payload);
    setProducts(payload.data);
  };

  useEffect(() => {
    products.forEach((product) => {
      const obj = {
        name: product.productName,
        users:
          parseInt(product.shopifyCount) +
          parseInt(product.magentoCount) +
          parseInt(product.wordPressCount),
      };
      console.log(product.productName);
      setData((prev) => {
        if(product.length !== data.length){
          return [...prev, obj]
        }
        else return prev;
      });
      console.log(obj);
    });
  }, [products]);
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".product-div"), {
      max: 25,
      speed: 400,
    });
    func();
  }, []);

  return (
    <>
      <div className="main-productcontainer-div">
        <div className="main-admin-profile">
          <div className="profile-pic"></div>
          <div className="profile-name">Pratham Upadhyay</div>
          <div className="total-visitor-counts">
            <div>
              <h1>Visitor Count</h1>
              <p>Total views</p>
              <h1>20</h1>
            </div>
            <div>
              <div className="circle-percentage">
                <h1>50%</h1>
              </div>
            </div>
          </div>

          <div className="total-shop-counts">
            <div>
              <h1>Shop Count</h1>
              <p>Total shops</p>
              <h1>20</h1>
            </div>
            <div>
              <div className="circle-percentage">
                <h1>50%</h1>
              </div>
            </div>
          </div>
          <div className="total-products-counts">
            <div>
              <h1>Product Count</h1>
              <p>Total products</p>
              <h1>20</h1>
            </div>
            <div>
              <div className="circle-percentage">
                <h1>50%</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="main-admin-product-container">
          <div className="graph-heading-div">
            <h1>Graphs</h1>
          </div>
          <div className="graphs-div">
            <div className="graphs">
              <PieChart width={400} height={300}>
                <Pie
                  dataKey="users"
                  isAnimationActive={false}
                  data={data}
                  cx={200}
                  cy={150}
                  outerRadius={90}
                  fill="purple"
                  label
                />
                <Tooltip />
              </PieChart>
            </div>
            <div className="graphs">
            <BarChart
          width={600}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>

            </div>
            
          </div>
          <div className="add-product-heading-div">
            <h1 className="add-product-heading">
              <span>Products</span>{" "}
            </h1>
            <button
              onClick={() =>
                navigate("/selectshop", {
                  state: {
                    curr: location.state,
                  },
                })
              }
              className="add-shop-btn-admin"
            >
              <p>Add Product</p>
            </button>
          </div>
          <div className="user-shops-products">
            {products.length > 0 &&
              products.map((product) => (
                <div className="product-div">
                  <div className="product-img-1 product-img"></div>
                  <div className="product-details">
                    <div>
                      <h1 className="product-name">{product.productName}</h1>

                      <p>
                        Visitors{" "}
                        {parseInt(product.shopifyCount) +
                          parseInt(product.magentoCount) +
                          parseInt(product.wordPressCount)}
                      </p>
                    </div>

                    <div className="delete-shop-div">
                      <div className="delete-btn"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
