import React from "react";
import category1 from "../../../assets/assets/category.jpg";
import category2 from "../../../assets/assets/category2.jpg";
import { Link } from "react-router-dom";
import { faArrowRight,faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "twin.macro";
import styled from "styled-components";
import Footer from "../../home/footer";
import { ReviewStar } from "../../../styles/styledElements";


const CardReviews = styled.h3`
  ${tw`font-normal text-sm mt-2 `}
`;

export default function Recentproducts() {
  const summaries = [
    {
      title: "Iphone 11 Pro Max",
      img: category1,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "41,000",
      pathname: "/login",
    },
    {
      title: "Iphone XR",
      img: category2,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "100,000",
    },
    {
      title: "Iphone 6s Plus",
      img: category1,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "50,000",
    },
    {
      title: "Iphone 11 Pro Max",
      img: category1,
      description: "FCT Abuja | Gadget Brand New",
      text: "Rating",
      price: "25,000",
    },
  ];

  return (
    <div className="w-full px-6 py-8">
      {/* <h2 className="font-bold mb-8">Projects Summary</h2> */}
      <div className="flex flex-col gap-y-2">
        {summaries.map((summary, index) => (
          <div
            key={index}
            // className="flex flex-col gap-y-3 items-center justify-center w-[20%] min-w-32 h-40 rounded-xl shadow-projects bg-white"
          >
            <h4 className="text-xs font-medium flex justify-end italic ">
              <Link to="/product-details" className="text-GREEN-_100 text-base">
                {" "}
                See More
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </h4>
            <div className="flex gap-x-4 p-1 items-center ml-8">
              <img src={summary.img} alt={summary.title} className="w-40" />

              <div>
                <h4 className="text-xs font-medium text-lg font-semibold text-GREEN-_100">
                  {summary.title}
                </h4>

                <p className="text-sm italic text-[#5C6F7F]">
                  {summary.description}
                </p>

                <ReviewStar>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </ReviewStar>
                <CardReviews>9 Review(s)</CardReviews>
                {/* <p className="text-xs text-[#5C6F7F]">{summary.text}</p> */}
              </div>

              <h4 className="text-sm font-semibold ml-96  text-GREEN-_100">
                {summary.price} NGN
              </h4>
              <h4 className="text-xs font-medium bg-BACKGROUND_GREEN text-white font-[Poppins] py-2 px-4 rounded">
                ADD TO FAVOURITE
              </h4>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
