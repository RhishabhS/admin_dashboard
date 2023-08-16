import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/Chart";
import { Publish } from "@mui/icons-material";
const Product = () => {
  const data = [
    {
      name: "Jan",
      sales: 4000,
    },
    {
      name: "Feb",
      sales: 3000,
    },
    {
      name: "Mar",
      sales: 2000,
    },
  ];

  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/newProduct">
          <button className="product-add-button">Create</button>
        </Link>
      </div>
      <div className="product-top">
          <div className="product-top-left">
            <Chart title='Sales Performance' data={data} dataKey='sales' color='teal'/>
          </div>
          <div className="product-top-right">
            <div className="product-info-top">
                <img src="" alt="" className="product-info-img" />
                <span className="product-name">The Sun</span>
            </div>
            <div className="product-info-bottom">
                <div className="product-info-item">
                <span className="product-info-key">id:</span>
                <div className="product-info-value"></div>
                </div>
                <div className="product-info-item">
                <span className="product-info-key">Sales:</span>
                <div className="product-info-value">1234</div>
                </div>
                <div className="product-info-item">
                <span className="product-info-key">Active:</span>
                <div className="product-info-value">Yes</div>
                </div>
                <div className="product-info-item">
                <span className="product-info-key">In Stock:</span>
                <div className="product-info-value">No</div>
                </div>
            </div>
          </div>
        </div>
        <div className="product-bottom">
            <form  className="product-form">
                <div className="product-form-left">
                    <label>Product Name</label>
                    <input type='text' placeholder="The Sun"></input>
                    <label>In Stock</label>
                    <select name='inStock' id='inStock'>
                        <option value="yes" className="product-form-option">Yes</option>
                        <option value="no" className="product-form-option">No</option>
                    </select>
                    <label>Active</label>
                    <select name='active' id='active'>
                        <option value="yes" className="product-form-option">Yes</option>
                        <option value="no" className="product-form-option">No</option>
                    </select>

                </div>
                <div className="product-form-right">
                    <div className="product-upload">
                        <img src="" alt="" className="product-upload-img" />
                        <label htmlFor="file">
                            <Publish/>
                        </label>
                        <input type='file' id="file" style={{display:'none'}}/>
                    </div>
                    <button className="product-button">Update</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default Product;
