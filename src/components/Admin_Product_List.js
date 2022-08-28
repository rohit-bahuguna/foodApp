import axios from "axios";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setProducts } from "../redux/actions/productActions";
import { deleteProduct } from "../redux/actions/productActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin_Product_List = () => {
  
  const dispatch = useDispatch();
  
  const tempData = useSelector((state) => state.allProducts.products);
  console.log("data from redux - ", tempData);

 

  const fetchProductsList = () => {
    fetch("https://foodapibybharat.herokuapp.com/product/getfood")
      .then((data) => data.json())
      .then((response) => {
        // console.log(response);
        // setData(response);
        // trigger action with data - type and payload;
        dispatch(setProducts(response));
      });
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  const updateFn = async (id) => {
    console.log("hit api for product update - PUT API");
    const url = 'https://foodapibybharat.herokuapp.com/product/updatefood';

  };

  const deleteFn = async (id) => {
    console.log("hit api for product delete - DELETE API");
    const url = `https://foodapibybharat.herokuapp.com/product/deletefood/${id}`;
    const response = await axios.delete(url).then(()=>{toast.error("food item deleted")}).catch((err) => console.log(err))

      console.log('--> deleted' , response)
    
     if(response){
    dispatch(deleteProduct(id))
   }
  
  };

  return (
    <>
      <ToastContainer/>
      <div className="row bg-success bg-opacity-50">
        <div className="col-12">HomePage - Product List</div>
      </div>

      <div className="row bg-success bg-opacity-10">
        <div className="col-12">
          <table>
           <thead>
             <tr>
             <th>Sr.No</th>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Price</th>
             </tr>
              
           </thead>
            <tbody>
            {tempData &&
              tempData.map((temp, index) => (
                <tr key={index + temp.name} className="product-item">
                  <td>{index}</td>
                  <td>{temp._id}</td>
                  <td>
                    <Link to={`/productdetail/${temp._id}`}>{temp.name}</Link>
                  </td>
                  <td>{temp.price}</td>
                  <td >
                    <Link to={`/admin_update_product/${temp._id}`}>
                    <button
                      className="btn btn-warning "
                      
                    >
                      Update
                      </button>
                      </Link>
                  </td>
                  <td>
                    
                      <button
                      className="btn btn-danger"
                      onClick={() => deleteFn(temp._id)}
                    >
                      delete
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin_Product_List;
