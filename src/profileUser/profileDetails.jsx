import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Link } from 'react-router-dom';
import Footer from "../components/footer";
import { Breadcrumb } from "antd";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentContainer = styled.div`
  ${tw`container m-auto flex mt-24 justify-between md:px-10 px-7`}
`;
const DivContainer = styled.div`
  ${tw`container m-auto p-8 `}
`;
const Paragraph = styled.p`
  ${tw`text-sm text-green-700  font-bold `}
}
`;
const CardAlign = styled.div`
  ${tw`px-2 py-8 text-center mr-16`}
`;
const CardHeader = styled.div`
  ${tw`font-bold text-sm mb-2`}
`;
const CardSub = styled.p`
  ${tw`text-gray-700 text-sm`}
`;
const CardPrice = styled.h3`
  ${tw`font-bold text-lg mt-10 ml-16`}
`;
const BreadcrumbLink = styled.div`
  ${tw`text-base `}
}`;
const ImgContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full`}
`;

const ProfileDetails = () => {
  return (
    <>
      <ContentContainer>
        <DivContainer>
          <BreadcrumbLink>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="">Gadgets</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="">Iphone</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          </BreadcrumbLink>

          <div className="flex justify-between mt-9">
            <Paragraph>Sort Items By:</Paragraph>
            <Paragraph>Iphones</Paragraph>
            <button class="rounded-md w-20 h-8 bg-green-700 text-blue-100 ml-2">
           Featured
</button>
          </div>
          <ImgContainer>
          <div class="grid grid-cols-1 divide-y divide-solid ">
           
  <div>CATEGORY</div>
  <div>RECOMMENDATION <br/>
  
  <div>Premium Products</div>
  <div>Lowest Prices First
</div>
<div>Highest Prices First</div>
<div>Newest First</div>
<div>All
</div></div>
<div></div>
</div>
          <img src="/assets/category.jpg" alt="category" class="w-36"/>
          <CardAlign>
                <CardHeader>iPhone 11 Pro Max</CardHeader>
                <CardSub>FCT Abuja | Gadget/ Brand New</CardSub>
                <CardSub>Rating:
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />

                   
                   
                   </CardSub>
</CardAlign>



<CardAlign>
                <CardHeader>iPhone 11 Pro Max</CardHeader>
                <CardSub>FCT Abuja | Gadget/ Brand New</CardSub>
                <CardSub>Rating:
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />

                   
                   
                   </CardSub>
</CardAlign>


           <CardPrice>N 45,000
           <button class="rounded-md w-20 h-8 bg-green-700 text-blue-100 ml-2">
           Featured
</button>
</CardPrice>
         </ImgContainer>
        </DivContainer>
      </ContentContainer>

      <Footer />
    </>
  );
};

export default ProfileDetails;
