import React from 'react'
import './NewProduct.css'
const NewProduct = () => {
  return (
    <div className='new-product'>
         <h1 className="new-product-title">New Product</h1>
        <form action="" className="new-product-form">
            <div className="new-product-item">
                <label>Product ID</label>
                <input type='text' placeholder='New Product id'></input>
            </div>
            <div className="new-product-item">
                <label>Product Name</label>
                <input type='text' placeholder='New Product Name'></input>
            </div>
            <div className="new-product-item">
                <label>Image</label>
                <input type='file' id='file'></input>
            </div>
            
            <div className="new-product-item">
                <label> Active</label>
                <select type='text'className='new-product-select' name='active' id='active'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div> 
            <button className="new-product-button">Create</button> 
        </form>
    </div>
  )
}

export default NewProduct