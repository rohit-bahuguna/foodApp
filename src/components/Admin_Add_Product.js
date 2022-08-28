import React, { useRef, useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Admin_Add_Product = () => {
  
    const errorRef = useRef();
    const [food , setFood] = useState({})


  const addProductFn = async (e) => {
    e.preventDefault()
   
    if (
      
      food.name !== "" &&
      food.price !== "" &&
      food.category !== "" &&
      food.food_type !== ""
    ) {
      
      
    const url = 'https://foodapibybharat.herokuapp.com/product/addfood';

  
      const response = await axios.post(url, food).catch((err) => console.log(err));
     
      toast.success("Food added successfully")

      setFood({
        name: "",
        price: "",
        description: "",
        category: "",
        food_type: "",
        image: ""

      })
      errorRef.current.textContent = "";
    } else {
      errorRef.current.textContent = "Plz fill all the values.";
    }
  };

  return (
    <>
      <ToastContainer/>
 <section className="why_section layout_padding">
         <div className="container">
         
            <div className="row">
               <div className="col-lg-8 offset-lg-2">
                  <div className="full">
                     <form >
                        <fieldset>
                            name:
              <input type="text" value={food.name} onChange={(e)=>setFood({...food , name :e.target.value} )} />
            
              Price:
              <input type="text" value={food.price} onChange={(e)=>setFood({...food , price :e.target.value} )} />
              
              Description:
              <input type="text"  value={food.description} onChange={(e)=>setFood({...food , description :e.target.value} )} />
              
              Category:
              <input type="text"  value={food.category} onChange={(e)=>setFood({...food , category :e.target.value} )} />
              
              Image:
              <input type="text" className="text-lowercase" value={food.image} onChange={(e)=>setFood({...food , image :e.target.value} )} />

              Food Type :

              <input type="text" value={food.food_type} onChange={(e)=>setFood({...food , food_type :e.target.value} )} />

              <input className="rounded-pill" type="submit" value="Add Product" onClick={(e)=> addProductFn(e)}/>
                
              
                     
                        </fieldset>
                  
                      </form>
                               
              </div>
              <div className="text-danger" ref={errorRef}></div>
                         
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Admin_Add_Product;


