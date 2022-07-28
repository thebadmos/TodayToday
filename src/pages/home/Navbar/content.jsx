import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Location from "../../../components/UI/location";
import Category from "../../../components/UI/category";
import Make from "../../../components/UI/Make";
import ProductType from "../../../components/UI/productType";
import Section from "../../../components/UI/section";
import HotDeals from "../../../components/UI/hotDeals";
import TrendingAds from "../../../components/UI/trendingAds";
import {
  faCalendarMinus,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentContainer = styled.div`
  ${tw`flex mt-24 justify-between md:px-10 px-7`}
`;
const DivContainer = styled.div`
  ${tw`container p-8 flex flex-wrap ml-4`}
`;
const Col = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/4 px-2 mb-4`}
`;
const ColFull = styled.div`
  ${tw`w-full lg:w-1/2 px-2 ml-48`}
`;
const TextAlign = styled.div`
  ${tw`text-sm flex items-center justify-center`}
  .icon {
    color: #077c6b;
  }
`;
const Header = styled.h1`
  ${tw`text-4xl font-semibold mt-6`}
`;
const Paragraph = styled.p`
  ${tw`text-base`}
`;
const Header2 = styled.h3`
  ${tw`text-lg font-semibold`}
`;

const HeaderButton = styled.button`
  ${tw`bg-BACKGROUND_GREEN text-white  py-2 px-6 rounded`}
`;
const ImgIcon = styled.img`
  ${tw`w-[520px]`};
`;
const Ptext = styled.p`
  ${tw`font-semibold text-black text-sm`}
`;

const Content = () => {
  return (
    <>
      <ContentContainer>
        <DivContainer>
          <Col>
            <Header>
              Nigeria’s Fastest <br />
              <div className="text-GREEN-_100">
                {" "}
                Online Classified <br />
                Market.
              </div>
            </Header>

            <Paragraph>
              You go-to place for all products and services at cheap, reviewed
              and pocket friendly costs. Shop with us{" "}
              <span className="text-GREEN-_100 text-base">todaytoday</span>{" "}
            </Paragraph>

            <HeaderButton>Discover Now</HeaderButton>
          </Col>
          <ColFull>
            <TextAlign>
              <ImgIcon src="/assets/Group 1.png" alt="img" />
            </TextAlign>
          </ColFull>
          {/* <Col>
            <TextAlign className="mt-12">
              <FontAwesomeIcon
                icon={faCalendarMinus}
                size="xl"
                className="icon"
              />
              <Header2 className="ml-4">
                2022
                <br />
                <div className="text-gray-400 text-sm"> Year</div>
              </Header2>
            </TextAlign>
            <TextAlign>
              <FontAwesomeIcon icon={faHouse} size="xl" className="icon ml-6" />
              <Header2 className="ml-4 mt-2">
                Nigeria
                <br />
                <div className="text-gray-400 text-sm"> Origin</div>
              </Header2>
            </TextAlign>
          </Col> */}

          <div class="container m-auto p-8 max-w-4xl mt-8 bg-gray-50 text-white  py-2 px-6 rounded">
            <div class="flex flex-wrap -mx-2">
              <div class="w-1/5">
                <div class="flex items-center">
                  <Ptext>Location</Ptext>
                </div>
                <Location />
              </div>
              <div class="w-1/5">
                <div class="flex items-center">
                  <Ptext>Category</Ptext>
                </div>
                <Category />
              </div>
              <div class="w-1/5">
                <div class="flex items-center">
                  <Ptext>Make</Ptext>
                </div>
                <Make />
              </div>
              <div class="w-1/5">
                <div class="flex items-center">
                  <Ptext>Type</Ptext>
                </div>
                <ProductType />
              </div>
              <div class="w-1/5">
                <div class="">
                  <HeaderButton>
                    {/* <FontAwesomeIcon
                      icon={faSearch}
                      size="lg"
                      className="icon"
                    /> */}
                    Search
                  </HeaderButton>
                </div>
              </div>
            </div>
          </div>
        </DivContainer>
      </ContentContainer>
      
      <Section />
      <HotDeals />
      <TrendingAds />
    </>
  );
};

export default Content;
