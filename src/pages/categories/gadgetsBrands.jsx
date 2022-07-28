import React from "react";
import UserNavbar from "../homeDashboard/userNavbar";
import Footer from "../home/footer";
import tw from "twin.macro";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const ContentContainer = styled.div`
  ${tw`flex px-24 mt-28`}
`;
const DivContainer = styled.div`
  ${tw`container p-8 flex flex-wrap ml-12 `}
`;
const ColFull = styled.div`
  ${tw`w-full lg:w-1/2 px-2`}
`;
const TextAlign = styled.div`
  ${tw`text-sm flex items-center justify-center`}
  .icon {
    color: #077c6b;
  }
`;
const Title = styled.h1`
  ${tw`text-4xl font-semibold mt-6 text-GREEN-_100`}
`;
const Header = styled.h1`
  ${tw`text-2xl font-sans font-medium`}
`;
const Paragraph = styled.p`
  ${tw`text-lg text-black font-medium`}
`;

const ImgIcon = styled.img`
  ${tw`w-[620px]`};
`;

const ImgContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full`}
`;
const Card = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg h-80`}
`;
const CardAlign = styled.div`
  ${tw`px-6 py-4 text-center`}
`;
const ImgHolder = styled.img`
  ${tw`object-cover w-full  px-1 py-1 rounded-lg`}
`;
const CardHeader = styled.div`
  ${tw`font-bold text-base mt-8`}
`;
const CardSub = styled.p`
  ${tw`text-base text-GREEN-_100`}
`;

function gadgetsBrands() {
  return (
    <>
      <UserNavbar />
      <ContentContainer>
        <Breadcrumb>
          <Breadcrumb.Item className="text-GREEN-_100 text-base">
            <Link to="/user-profile">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-GREEN-_100 text-base">
            Gadgets
          </Breadcrumb.Item>
        </Breadcrumb>
      </ContentContainer>
      <DivContainer>
        <ColFull>
          <Title>Gadgets</Title>
          <Paragraph>
            We have different brands, types and <br />
            varieties of gadgets. Explore them <br /> below.
          </Paragraph>
        </ColFull>
        <ColFull>
          <TextAlign>
            <ImgIcon src="/assets/Group 1.png" alt="img" />
          </TextAlign>
        </ColFull>

        <Header>
          Brands
          <br />
          <p className="text-sm">Select a brand below.</p>
        </Header>

        <ImgContainer>
          <Card>
          <Link to="/dashboard">
            <ImgHolder
             src="/assets/apple.png" alt="vehicles"></ImgHolder>
            <CardAlign>
              <CardHeader>Apple</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
            </Link>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/Samsung.jpeg"
              alt="categoriesImg"
              className="h-48"
            ></ImgHolder>
            <CardAlign>
              <CardHeader>Samsung</CardHeader>
              <CardSub>39 Ads</CardSub>
            </CardAlign>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/Tecno.jpeg"
              alt="categoriesImg"
              className="h-48"
            ></ImgHolder>
            <CardAlign>
              <CardHeader>Tecno</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/infinix.jpeg"
              alt="categoriesImg"
              className="h-48"
            ></ImgHolder>
            <CardAlign>
              <CardHeader>Infinix</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/Huawei.png"
              alt="categoriesImg"
              className="h-48"
            ></ImgHolder>
            <CardAlign>
              <CardHeader>Huawei</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/Nokia.png"
              alt="categoriesImg"
              className="h-48"
            ></ImgHolder>
            <CardAlign>
              <CardHeader>Nokia</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/xiaomi.jpeg"
              alt="categoriesImg"
              className="h-48"
            ></ImgHolder>
            <CardAlign>
              <CardHeader>Xiaomi</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/oppo.png"
              alt="categoriesImg"
              className="h-48"
            ></ImgHolder>
            <CardAlign>
              <CardHeader>Other Mobile Phones</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
          </Card>
          
        </ImgContainer>
      </DivContainer>

      <Footer />
    </>
  );
}

export default gadgetsBrands;
