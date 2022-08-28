import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersignup } from "../redux/actions/loginAction";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();

  const signUpData = useSelector((state) => state.signup);


  
 
  if (signUpData.signupStatus) {
       
    setTimeout(() => {

        navigate("/login");
    }, 1000);
    
  }

  const signUpFn = async (e) => {
    // take two input values
    e.preventDefault()
    let name = inputRef1.current.value;
    let password = inputRef2.current.value;
    let email = inputRef3.current.value;
  
    let obj = {
      name: name,
      email: email,
      password: password
    };
   

    // call api with name and password
    const url = "https://foodapibybharat.herokuapp.com/user/login";
    const response = await axios.post(url, obj).catch((err) => {
      console.log("->>>>>>>>", err);
      toast.error(err.response.data.massage)
    });
    
    // if successfull, call dispatch
    if (response !== undefined) {
      dispatch(usersignup(response.data));
      
      toast.success("Account Created Successfully")
    } 
  };
  return (
    <>
   <ToastContainer />
     

      <section className="why_section layout_padding">
         <div className="container">
         
            <div className="row">
               <div className="col-lg-8 offset-lg-2">
                  <div className="full">
                     <form >
                        <fieldset>
                          Name: <input type="text" ref={inputRef1} name="name" required/>
                           email: <input type="email" className="text-lowercase" ref={inputRef3} name="password"  required/>
                         
                           Password: <input type="password" ref={inputRef2} name="password" required/>
                    
                    <input className="rounded-pill" type="submit" value="Log In" onClick={signUpFn} />
        
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

export default Signup;
