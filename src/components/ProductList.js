import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../redux/actions/productActions";


const ProductList = () => {
 
  const dispatch = useDispatch();
  

  const tempData = useSelector((state) => state.allProducts.products);
 

  const fetchProductsList = () => {
    fetch("https://foodapibybharat.herokuapp.com/product/getfood")
      .then((data) => data.json())
      .then((response) => {
       
       
        dispatch(setProducts(response));
      });
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <>
     

   <section className="product_section layout_padding">
      <div className="container">
         <div className="heading_container heading_center">
            <h2>
               Our <span>Menu</span>
            </h2>
         </div>
         <div className="row">
            {tempData &&
              tempData.map((temp, index) => (
              
                <div className="col-sm-4 col-md-4 col-lg-3">
                  <Link to={`/productdetail/${temp._id}`}>
                      
                    
               <div className="box">
                 
                  <div className="img-box">
                     <img src={temp.image} className="img-fluid " />
                    
                  </div>
                 
                  </div>
                   <div className="detail-box text-center text-danger text-opacity-75">
                     <h5 >
                        {temp.name}
                     </h5>
                     <h6 className="text-dark fs-5">
                          Price : {temp.price}
                     </h6>
                    </div>
                    </Link>
            </div>

              ))}
         </div>
      </div>
      
      
   </section>





    </>
  );
};

export default ProductList;

