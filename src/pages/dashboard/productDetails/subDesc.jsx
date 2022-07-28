import React from "react";
import category1 from "../../../assets/assets/category.jpg";
import category2 from "../../../assets/assets/category2.jpg";
import category3 from "../../../assets/assets/category3.jpg";
import category4 from "../../../assets/assets/category4.jpg";
import tw from "twin.macro";
import styled from "styled-components";

const ContentContainer = styled.div`
  ${tw`px-12 mt-8`}
`;
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

function subDesc() {
  return (
    <>
       <div className="mt-12 ml-24 uppercase text-base text-GREEN-_100 font-semibold">
        you may also like this
      </div>
    <ContentContainer>
   
      <div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
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
              <p className="text-xs text-[#5C6F7F]">{summary.text}</p>
            </div>
          ))}
        </div>
      </div>
      </ContentContainer>
    </>
  );
}

export default subDesc;
