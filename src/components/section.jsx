import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentContainer = styled.div`
  ${tw`flex justify-between md:px-10 px-7`}
`;
const DivContainer = styled.div`
  ${tw`container m-auto p-8 flex flex-wrap -mx-2 mb-8`}
`;
const Header = styled.h1`
  ${tw`text-2xl font-sans font-medium`}
`;
const Paragraph = styled.p`
  ${tw`text-sm`}
  span {
    font-size: 15px;
    color: #077c6b;
  }
`;
const ImgContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mt-1`}
`;
const ImgText = styled.h4`
  ${tw`text-lg font-semibold tracking-tight text-black py-24`}
`;
const ImgAds = styled.div`
  ${tw`border w-16 mt-5 px-1 rounded-md py-1 bg-white text-sm font-semibold `}
`;
const Span = styled.div`
  ${tw`float-right`}
`;

function section() {
  return (
    <>
      <ContentContainer>
        <div className="p-8">
          <Header>Top Categories</Header>

          <div className="flex justify-between">
            <Paragraph>
              We’ve got them in different varieties, Check them out.{" "}
            </Paragraph>
            <div></div>
            <div className="text-green-700 text-base">
              See More
              <button class="rounded-full w-10 h-10 bg-green-700 text-blue-100 ml-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          <ImgContainer>
            <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-48">
              <img
                class="object-cover w-full h-48"
                src="/assets/realestate.jpg"
                alt="realestate"
              />

              <div class="absolute top-0 left-0 px-6">
                <ImgAds> 122 Ads</ImgAds>
                {/* <h4 class="mb-3 text-xl font-semibold tracking-tight text-black py-1" >This is the title</h4> */}
                <ImgText>Real Estate</ImgText>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img
                class="object-cover w-full h-80"
                src="/assets/Iphone.jpg"
                alt="Iphone"
              />

              <div class="absolute top-0 left-0 px-6">
                <ImgAds> 190 Ads</ImgAds>
                <ImgText>Gadgets</ImgText>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64">
              <img
                class="object-cover w-full h-64"
                src="/assets/electronics.jpeg"
                alt="electronics"
              />

              <div class="absolute top-0 left-0 px-6">
                <ImgAds> 98 Ads</ImgAds>
                <ImgText>Electronics</ImgText>
              </div>
            </div>

            <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-48">
              <img
                class="object-cover w-full h-48"
                src="/assets/Vehicles.jpg"
                alt="Flower and sky"
              />

              <div class="absolute top-0 left-0 px-6">
                <ImgAds> 160 Ads</ImgAds>
                <ImgText>Vehicles</ImgText>
              </div>
            </div>
          </ImgContainer>
        </div>
      </ContentContainer>
    </>
  );
}

export default section;
