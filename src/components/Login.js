import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/loginAction";
import { addToCart } from "../redux/actions/cartActions";
import axios from "axios";

const Login = () => {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const loginData = useSelector((state) => state.login);
  const cartData = useSelector((state) => state.cart.products);
  console.log(cartData.length)
  console.log("----login data from selector -----", loginData.loginStatus);


  if (loginData.loginStatus) {
    navigate("/");
  }


  const getallcart = async () => {
 
    console.log(loginData.loginUsername.token);
    const url = "https://foodapibybharat.herokuapp.com/cart/getallcart";
    const response = await axios
      .get(url, {
        headers: {
          auth: loginData.loginUsername.token,
        },
      })
      .catch((error) => console.log(error));

   // console.log("got all cart  -->>> ", response.data);

    // response.data[0].product.id = response.data[0]._id;
    // console.log("--lets see" , response.data[0]);

    if(cartData.length !== response.data.length && cartData.length < response.data.length && response.data.length !== 0){
      response.data.map((value) => {
        value.order.id = value._id
      { console.log(value.order)}
        dispatch(addToCart(value.order))
        // console.log(value.order)
      });
    }
   
  };



  useEffect(() => {
    if (loginData.loginStatus) {
       getallcart();
    }

  })

  const loginFn = async (e) => {
    // take two input values
    e.preventDefault()
   
    let password = inputRef2.current.value;
    let email = inputRef3.current.value;
    
    let obj = {
      
      email: email,
      password: password,
    };
    console.log("useername and password" , password, email);

    // call api with name and password
    const url = "https://foodapibybharat.herokuapp.com/user/signin";
    const response = await axios.post(url, obj).catch((err) => {
      console.log(err);
    });

    // if successfull, call dispatch
    if (response !== undefined) {
      console.log("ahhhhh");
      dispatch(loginUser(response.data));
      console.log(response.data);
      // get cart
      //getallcart();

    } else {
      // console.log(name, password);
    }
    // else
    // show error

    //setTimeout(getallcart(), 10000);
  };
  return (
    <>
      <section className="why_section layout_padding">
         <div className="container">
         
            <div className="row">
               <div className="col-lg-8 offset-lg-2">
                  <div className="full">
                     <form >
                        <fieldset>
                         
                           email: <input className="text-lowercase" type="email" ref={inputRef3} name="password"  required/>
                         
                           Password: <input type="password" ref={inputRef2} name="password" required/>
                    
                    <input className="rounded-pill" type="submit" value="Sign In" onClick={(e) => { loginFn(e) }} />
                    <br/>
                    <Link to="/signup">
                      <input className="rounded-pill" type="submit" value="New Here Create Account"  />
                  </Link>
                        </fieldset>
                  
                      </form>
                               
              </div>
              
                         
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Login;

/*  <div className="col-2">
          
          
        </div> */
