import React, { useRef, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const Admin_Update_Product = () => {
    const tempData = useSelector((state) => state.allProducts.products);
    const navigate = useNavigate()
const { id } = useParams();
    const product = tempData && tempData.filter((value, index ) => {
    return value._id === id
    })
    const errorRef = useRef();
    let inittalValue = {
        _id: product[0]._id,
        name: product[0].name,
        price: product[0].price,
        category: product[0].category,
        food_type : product[0].food_type,
        description: product[0].description,
        image : product[0].image
   }


    const [food , setFood] = useState(inittalValue)


  const addProductFn = async () => {
   


    if (
      
      food.name !== "" &&
      food.price !== "" &&
      food.category !== "" &&
      food.food_type !== ""
    ) {
      
      
    const url = 'https://foodapibybharat.herokuapp.com/product/updatefood';

  
      const response = await axios.put(url, food)
        .then(() => { navigate('/admin_product_list') }).catch((err) => console.log(err));
        
      errorRef.current.textContent = "";
    } else {
      errorRef.current.textContent = "Plz fill all the values.";
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 d-flex flex-column p-5">
          
          name:
          <input type="text" value={food.name} onChange={(e)=>setFood({...food , name :e.target.value} )} />
        
          Price:
          <input type="text" value={food.price} onChange={(e)=>setFood({...food , price :e.target.value} )} />
          
          Description:
          <input type="text"  value={food.description} onChange={(e)=>setFood({...food , description :e.target.value} )} />
          
          Category:
          <input type="text"  value={food.category} onChange={(e)=>setFood({...food , category :e.target.value} )} />
          
          Image:
          <input type="text"  value={food.image} onChange={(e)=>setFood({...food , image :e.target.value} )} />

          food_type :

          <input type="text" value={food.food_type} onChange={(e)=>setFood({...food , food_type :e.target.value} )} />

          <button className="btn btn-primary mt-3" onClick={addProductFn}>
            Update Product
          </button>
        </div>
        <div className="text-danger" ref={errorRef}></div>
      </div>
    </>
  );
};

export default Admin_Update_Product;
