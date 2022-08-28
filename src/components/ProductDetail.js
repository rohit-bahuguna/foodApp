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
  // console.log("id from list page - ", id);

  let tempProduct = {};

  tempProduct = useSelector((state) => state.selectedProduct);
  console.log("---data from selected product store - ", tempProduct);

  const loginData = useSelector((state) => state.login);
  // console.log("----login data from selector -----", loginData.loginStatus);

  const cartData = useSelector((state) => state.cart);
  // console.log('----login data from selector for cart -----', cartData);

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

      console.log("product", orders);

      const response = await axios
        .post(url, orders, {
          headers: {
            auth: loginData.loginUsername.token,
          },
        })
        .catch((err) => console.log("erroe----->", err));
       // toast.success("product added to cart")
      console.log("product added to cart" , response);
    }
  };

  return (
    <>
      <ToastContainer/>
      <div className="row bg-info bg-opacity-50">
        <div className="col-12">Product Detail</div>
      </div>
      <div className="row bg-info bg-opacity-10">
        <div className="col-4">
          <img src={tempProduct.image} className="img-fluid image" />
        </div>
        <div className="col-4">
          <h2>{tempProduct.title || " "}</h2>
          <h2>{tempProduct.price || " "}</h2>
          <h3>{tempProduct.category || " "}</h3>
          <p>{tempProduct.description || " "}</p>
        </div>
        <div className="col-4">
          <div className="col-12">
            {cartData.products
              .map((temp) => temp._id)
              .indexOf(tempProduct._id) !== -1 ? (
              <Link to="/cart">Go to Cart</Link>
            ) : (
              <button className="cart" onClick={addtoCart}>
                Add to Cart
              </button>
            )}
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <button>Add to Wishlist</button>
            </div>
          </div>
          
        </div>
      </div>

       
    </>
  );
};

export default ProductDetail;


