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
  ${tw`container p-8 flex flex-wrap ml-12`}
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
const CardReviews = styled.h3`
  ${tw`font-normal text-sm mt-2`}
`;
const Ptext = styled.p`
  ${tw`font-semibold text-black text-sm`}
`;
const ImgContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full`}
`;
const Card = styled.div`
  ${tw`max-w-sm rounded overflow-hidden shadow-lg`}
`;
const CardAlign = styled.div`
  ${tw`px-6 py-4 text-center`}
`;
const ImgHolder = styled.img`
  ${tw`object-cover w-full  px-1 py-1 rounded-lg`}
`;
const CardHeader = styled.div`
  ${tw`font-bold text-base mb-2`}
`;
const CardSub = styled.p`
  ${tw`text-base text-GREEN-_100`}
`;

function gadgetsScreen() {
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
          Categories
          <br />
          <p className="text-sm">Select from the categories below</p>
        </Header>

        <ImgContainer>
          <Card>
          <Link to="/gadget-brands">
            <ImgHolder
             src="/assets/catIphone.jpg" alt="vehicles"></ImgHolder>
            <CardAlign>
              <CardHeader>Mobile Phones</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
            </Link>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/catPhone.jpg"
              alt="categoriesImg"
            ></ImgHolder>
            <CardAlign>
              <CardHeader>Accessories for Phones</CardHeader>
              <CardSub>39 Ads</CardSub>
            </CardAlign>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/catIphone.jpg"
              alt="categoriesImg"
            ></ImgHolder>
            <CardAlign>
              <CardHeader> Tablets</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
          </Card>
          <Card>
            <ImgHolder
              src="/assets/wristwatch.jpg"
              alt="categoriesImg"
            ></ImgHolder>
            <CardAlign>
              <CardHeader>Smart Watches</CardHeader>
              <CardSub>389 Ads</CardSub>
            </CardAlign>
          </Card>
        </ImgContainer>
      </DivContainer>

      <Footer />
    </>
  );
}

export default gadgetsScreen;
