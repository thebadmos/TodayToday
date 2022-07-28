import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import category1 from "../../../assets/assets/category.jpg";
import category2 from "../../../assets/assets/category2.jpg";
import category3 from "../../../assets/assets/category3.jpg";
import category4 from "../../../assets/assets/category4.jpg";
import {
    ReviewStar,
} from "../../../styles/styledElements";
import {faStar,faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../home/footer";


const CardReviews = styled.h3`
${tw`font-normal text-sm mt-2 `}
`;

export default function AdvertDetails() {
  const summaries = [
    {
      title: "Brown Croc Skin Sneakers",
      img: category1,
      description: " Akwa Ibom | Fashion",
      text: "Rating",
      price: "41,000",
    },
    {
      title: "Iphone XR",
      img: category3,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "100,000",
    },
    {
      title: "Iphone 6s Plus",
      img: category2,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "50,000",
    },
    {
      title: "Iphone 11 Pro Max",
      img: category4,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "25,000",
    },
    {
      title: "Iphone 11 Pro Max",
      img: category1,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "25,000",
    },
    {
      title: "Iphone 6s Plus",
      img: category2,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "50,000",
    },
    {
      title: "Iphone 11 Pro Max",
      img: category4,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "25,000",
    },
    {
      title: "Iphone 13 Pro Max",
      img: category1,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "41,000",
    },
  ];

  return (
    <div className="w-full px-6 py-8">
   
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {summaries.map((summary, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-[100%] min-w-42 h-96 rounded-xl shadow-projects bg-white
           "
              >
                <img
                  src={summary.img}
                  alt={summary.title}
                  className="object-cover rounded w-full h-48 px-3"
                />
                <h4 className="text-base font-semibold text-BLACK mt-2 ">
                  {summary.title}
                </h4>
                <p className="text-xs text-[#5C6F7F]">{summary.description}</p>
                <p className="text-sx font-semibold text-GREEN-_100">
                  {summary.price} NGN
                </p>
               
                <ReviewStar>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    </ReviewStar>
    <CardReviews> 
    14 Review(s)
    </CardReviews>
              </div>
            ))}
          </div>
        </div>
<Footer/>
     
    </div>
  );
}
