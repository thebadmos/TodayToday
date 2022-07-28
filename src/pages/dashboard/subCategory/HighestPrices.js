import React from "react";
import category1 from "../../../assets/assets/category.jpg";
import category2 from "../../../assets/assets/category2.jpg";
import category3 from "../../../assets/assets/category3.jpg";
import category4 from "../../../assets/assets/category4.jpg";
import { Breadcrumb } from "antd";
import Footer from "../../home/footer";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";
import styled from "styled-components";
import { ReviewStar } from "../../../styles/styledElements";

const CardReviews = styled.h3`
  ${tw`font-normal text-sm mt-2 `}
`;

export default function HighestPrices() {
  const summaries = [
    {
      title: "Iphone 13 Pro Max",
      img: category1,
      description: "FCT Abuja | Gadget Brand New",
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
      <div className="w-full px-6 py-8">
        <div className="bg-BACKGROUND_GRAY py-4 px-4 rounded mb-4 text-base">
          <Breadcrumb>
            <Breadcrumb.Item className="text-GREEN-_100">Home</Breadcrumb.Item>
            <Breadcrumb.Item className="text-GREEN-_100">
              Gadgets
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-GREEN-_100">
              Iphone
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {summaries.map((summary, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-[100%] min-w-42 h-80 rounded-xl shadow-projects bg-white
           "
              >
                <img
                  src={summary.img}
                  alt={summary.title}
                  className="object-cover rounded w-full h-40 px-3"
                />
                <h4 className="text-xs font-semibold text-BLACK mt-2 ">
                  {summary.title}
                </h4>
                <p className="text-xs text-[#5C6F7F]">{summary.description}</p>
                <p className="text-xs font-semibold text-GREEN-_100">
                  {summary.price} NGN
                </p>
                <ReviewStar>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </ReviewStar>
                <CardReviews>9 Review(s)</CardReviews>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
