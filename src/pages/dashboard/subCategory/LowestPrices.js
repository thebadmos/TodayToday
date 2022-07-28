import React from "react";
import category1 from "../../../assets/assets/category.jpg";
import category2 from "../../../assets/assets/category2.jpg";
import {Breadcrumb} from 'antd'
import Footer from "../../home/footer";
// import Footer from "../dashboard/DashFooter";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";
import styled from "styled-components";
import { ReviewStar } from "../../../styles/styledElements";


const CardReviews = styled.h3`
  ${tw`font-normal text-sm mt-2 `}
`;


export default function LowestPrices() {
  const summaries = [
    {
      title: "Iphone 13 Pro Max",
      img: category1,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "41,000"
    },
    {
      title: "Iphone XR",
      img: category2,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "100,000"
    },
    {
      title: "Iphone 6s Plus",
      img: category1,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "50,000"
    },
    {
      title: "Iphone 11 Pro Max",
      img: category1,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "25,000"
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl">
    <div className="w-full px-6 py-8">
        <div className="bg-BACKGROUND_GRAY py-4 px-4 rounded mb-2 text-base" >
         <Breadcrumb>
    <Breadcrumb.Item className="text-GREEN-_100">Home</Breadcrumb.Item>
    <Breadcrumb.Item className="text-GREEN-_100">Gadgets</Breadcrumb.Item>
    <Breadcrumb.Item className="text-GREEN-_100">Iphone</Breadcrumb.Item>
    
  </Breadcrumb>
  </div>
      {/* <div className="flex justify-between">
      <Text variant="h2" format="text-BLACK-_100 font-bold">
        Iphones
      </Text>
      <h4 className="text-xs leading-5 font-medium bg-BACKGROUND_GRAY text-GREEN-_100  py-2 px-5 rounded">
      Featured
      </h4>
      </div> */}
      <div className="flex flex-col gap-y-2">
        {summaries.map((summary, index) => (
          <div
            key={index}
            // className="flex flex-col gap-y-3 items-center justify-center w-[20%] min-w-32 h-40 rounded-xl shadow-projects bg-white"
          >
            <div className="flex gap-x-4 p-1 items-center ml-8 mt-4">
         
            <img src={summary.img} alt={summary.title} className="w-40" />
            
            <div>
          
        <h4 className="text-xs font-medium text-lg font-semibold text-GREEN-_100">{summary.title}</h4>
    
        <p className="text-sm italic text-[#5C6F7F]">{summary.description}</p>
        
        <ReviewStar>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </ReviewStar>
                <CardReviews>9 Review(s)</CardReviews>
  
      </div>
      
      <h4 className="text-sm font-semibold ml-96  text-GREEN-_100">{summary.price} NGN</h4>
      <h4 className="text-xs font-medium bg-BACKGROUND_GREEN text-white font-[Poppins] py-2 px-4 rounded">
      ADD TO FAVOURITE
      </h4>
      </div>
      </div>
   
          
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}
