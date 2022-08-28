import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../redux/actions/productDetailActions";
import { addToCart } from "../redux/actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
 

  let tempProduct = {};
tempProduct = useSelector((state) => state.selectedProduct);
  
  const loginData = useSelector((state) => state.login);
  
  const cartData = useSelector((state) => state.cart);
  
  const fetchProductDetail = async () => {
    const url = "https://foodapibybharat.herokuapp.com/product/getafood/" + id;
    const response = await axios.get(url);

    dispatch(setSelectedProduct(response.data));
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const addtoCart = async () => {
    dispatch(addToCart(tempProduct));
    toast.success("product added to cart")
    // add to cart api call from here
    if (loginData.loginStatus) {
      const url = "https://foodapibybharat.herokuapp.com/cart/addtocart";
      let orders = {
        id: tempProduct._id,
        name: tempProduct.name,
        food_type: tempProduct.food_type,
        price: tempProduct.price,
        description: tempProduct.description,
        image: tempProduct.image,
        category: tempProduct.category,
        quantity: 1,

      };

     

      const response = await axios
        .post(url, orders, {
          headers: {
            auth: loginData.loginUsername.token,
          },
        })
        .catch((err) => console.log("erroe----->", err));
        toast.success("product added to cart")
     
    }
  };

  return (
    <>
      <ToastContainer/>
     
<section class="product_section layout_padding">
        <div className="container d-flex flex-lg-row justify-around flex-md-row">
           <div class="container flex-grow-1">
      <div class="row ">
            <div class="col-sm-12 col-md-12 col-lg-12">
               <div class="box">
                  
                  <div class="img-box">
                       <img src={tempProduct.image} alt="" />
                      <div></div>
                  </div>
                  <div class="detail-box">
                     <h5>
                        {tempProduct.name}
                     </h5>
                     <h6>
                        {tempProduct.price}
                     </h6>
                  </div>
         </div>
                {cartData.products.map((temp) => temp._id).indexOf(tempProduct._id) !== -1 ?
                   <Link to="/cart"><button type="button" className="btn btn-outline-danger" >Go to Cart</button></Link>
             : 
              <button type="button" className="btn btn-outline-danger" onClick={addtoCart}>
                Add to Cart
              </button>
            }
            </div>
        
            </div>
            </div>
        </div>
        </section>

       
    </>
  );
};

export default ProductDetail;

