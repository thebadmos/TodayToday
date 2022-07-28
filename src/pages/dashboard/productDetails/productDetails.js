import React, { useState } from "react";
import "../../../styles/productDetails.css";
import DetailsThumb from "../../../components/UI/DetailsThumb";
import userProfile from "../../../assets/assets/userprofile.png";
import { Breadcrumb } from "antd";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";
import styled from "styled-components";
import SellerContact from "./sellerCotact";


const ContentContainer = styled.div`
  ${tw`flex px-24 mt-12`}
`;

class ProductDetails extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "IPhone 11 Pro Max",
        code: 45278654,
        color: "GRAY",
        src: [
          "https://res.cloudinary.com/dysgwap7p/image/upload/v1652803973/TodayToday/category3_nretxy.jpg",
          //   "https://res.cloudinary.com/dysgwap7p/image/upload/v1652803971/TodayToday/category2_jhrmea.jpg",
          "https://res.cloudinary.com/dysgwap7p/image/upload/v1652803975/TodayToday/category4_vfwdu8.jpg",
          "https://res.cloudinary.com/dysgwap7p/image/upload/v1652803974/TodayToday/category_ddxlmo.jpg",
        ],
        price: "4,150,000",
        condition: "brand new",
        storage: "128GB",
        brand: "apple",
        location: "Lagos, Nigeria",
        timeSeen: "3 Hours Ago",
        // "colors":["red","black","crimson","teal"],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  //modal

  stateS = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }
    

  render() {
    const { products, index } = this.state;
    return (
      <>
  
     
        <div className="bg-BACKGROUND_GRAY py-4 px-4 rounded mt-24 text-base">
          <Breadcrumb>
            <Breadcrumb.Item className="text-GREEN-_100 ml-16">Home</Breadcrumb.Item>
            <Breadcrumb.Item className="text-GREEN-_100">
              Gadgets
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-GREEN-_100">
              Iphone
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-GREEN-_100">
              Iphone 11 Pro Max
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <ContentContainer>
        
        <div className="app">
          {products.map((item) => (
            <div className="details" key={item._id}>
              <div className="box">
                <DetailsThumb
                  images={item.src}
                  tab={this.handleTab}
                  myRef={this.myRef}
                />
                {/* <button className="cart">Add to cart</button> */}
              </div>
              <div className="big-img">
                <img src={item.src[index]} alt="" />
              </div>

              <div className="box">
                <div className="row">
                  <div className="text-base tracking wide text-gray-400 ">
                    Product Code: {item.code}
                  </div>
                </div>
                <div className="text-xl tracking-wide mt-4 font-semibold">
                  {item.title}
                </div>
                <div className="text-base tracking wide mt-2 font-medium">
                  Product Cost:{" "}
                </div>
                <div className="text-GREEN-_100 text-lg font-medium">
                  {item.price} NGN
                </div>
                <div className="text-base tracking-wide uppercase mt-4 font-semibold">
                  short description
                </div>
                <div className="text-sm tracking-wide uppercase font-semibold text-GREEN-_100 mt-1">
                  color:
                  <span className="text-xs text-black"> {item.color}</span>
                </div>
                <div className="text-sm tracking-wide uppercase font-semibold text-GREEN-_100 mt-1">
                  condition:
                  <span className="text-xs text-black"> {item.condition}</span>
                </div>
                <div className="text-sm tracking-wide uppercase font-semibold text-GREEN-_100 mt-1">
                  storage:
                  <span className="text-xs text-black"> {item.storage}</span>
                </div>
                <div className="text-sm tracking-wide uppercase font-semibold text-GREEN-_100 mt-1">
                  brand:
                  <span className="text-xs text-black"> {item.brand}</span>
                </div>
                <SellerContact/>
                {/* <div className="text-base tracking-wide uppercase mt-4 font-semibold">
                  seller details
                </div>
                <div class="flex items-center">
                  <img
                    class="w-10 h-10 rounded-full mr-4"
                    src={userProfile}
                    alt="Avatar"
                  />
                  <div class="text-sm">
                    <p class="text-sm tracking-wide uppercase font-semibold text-GREEN-_100">
                      Adekunle adejare
                      <br />
                      <span className="text-black">
                        {" "}
                        Last Seen: 3 Hours Ago
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-6 rounded uppercase"
                 
                >
                  contact seller
                </button>
                <button
                  className="text-sm bg-BACKGROUND_GRAY text-GREEN-_100
                 py-2 px-6 rounded uppercase ml-8"
                >
                  chat with seller
                </button>
                <div
                  className="text-base bg-BACKGROUND_GREEN text-white
                 py-2 px-6 rounded uppercase w-full mt-4 text-center font-semibold"
                >
                  make an offer
                </div>
                <div className="mt-8 ml-8">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mr-3 text-GREEN-_100"
                    size="xl"
                  />
                  {item.location}
                  <span className="ml-4">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-3 text-GREEN-_100"
                      size="xl"
                    />
                    {item.timeSeen}
                  </span>
                </div> */}
                <div></div>
              </div>
            </div>
          ))}
         
        </div>
        </ContentContainer>
      </>
    );
  }
}

export default ProductDetails;
