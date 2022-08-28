import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const tempData = useSelector((state) => state.allProducts.products);

  if (tempData.length !== 0) {
    tempData.length -= tempData.length - 4;
  }

  return (
    <div className="hero_area">
      <section class="slider_section ">
        <div className="slider_bg_box">
          <img src="images/chef1.png" alt="" />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Get 20% discount! </span>
                        <br />
                        On your favourite food Items
                      </h1>
                      <p>
                        You have come to the right place if you want to taste
                        the best cuisine. The best place to satisfy your hunger
                        and cravings is My Store.
                      </p>
                      <div className="btn-box">
                        <Link to="productlist" className="btn1">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Get 20% Off</span>
                        <br />
                        Don't let your hunger overpower you when eating your
                        favourite food.{" "}
                      </h1>
                     
                      <div className="btn-box">
                        <Link to="" className="btn1">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                     
                      <div className="btn-box">
                        <Link to="" className="btn1">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* why_section  */}

      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Order quality food</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img
                    src="./images/fast-delivery-truck-svgrepo-com.svg"
                    alt=""
                  />
                </div>
                <div className="detail-box">
                  <h5>Fast Delivery</h5>
                  <p>We have multiple partners with us that deliever hot and comfort food at your doorstep </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img src="./images/quality-svgrepo-com.svg" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Best Quality</h5>
                  <p>We do not compromise on quality of food,If you dont like take 50% refund of your order</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="box ">
                <div className="img-box">
                  <img
                    src="./images/free-delivery-free-svgrepo-com.svg"
                    alt=""
                  />
                </div>
                <div className="detail-box">
                  <h5>Free Delievery For New Customers</h5>
                  <p>We offer free delievery upto 5 orders to our new users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <h5>{temp.name}</h5>
                      <h6 className="text-dark fs-5">Price : {temp.price}</h6>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <div className="btn-box">
            <Link to="/productlist">View all food Items</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;