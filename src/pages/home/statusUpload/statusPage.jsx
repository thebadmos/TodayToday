import React from "react";
import UserNavbar from "../../homeDashboard/userNavbar";
import Footer from "../../../pages/home/footer";
import tw from "twin.macro";
import styled from "styled-components";
import { Breadcrumb } from "antd";
import {Link} from "react-router-dom"

const ContentContainer = styled.div`
  ${tw`flex px-24 mt-28`}
`;
const TextContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 w-full`}
`;
const Title = styled.h2`
  ${tw`font-semibold text-lg text-GREEN-_100`}
`;
const SubTitle = styled.div`
  ${tw`text-base font-semibold`}
`;
const details = [
  {
    views: "254 Views",
    offerMessage: "12 Messages",
    datePost: "12/12/2021, 12:23PM",
    planType: "24-Hours",
    condition: "Brand new",
    brandName: "Range Rover",
    yearManufacture: "2019",
    bodyType: "SUV",
  },
];

function statusPage() {
  return (
    <>
      <UserNavbar />
      <ContentContainer>
        <Breadcrumb>
          <Breadcrumb.Item className="text-GREEN-_100 text-base">
            <Link to="/user-profile">
            Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="text-GREEN-_100 text-base">
            Ad Status
          </Breadcrumb.Item>
        </Breadcrumb>
      </ContentContainer>
      <div className="mt-2 px-24">
        <img src="/assets/statusPag.png"/>
       
        <h3 className="mt-8 text-GREEN-_100 text-xl font-semibold px-24">
          Ad Details
        </h3>
        {details.map((item) => (
          <div className="px-24">
            <TextContainer>
              <Title>No of Views:</Title>
              <SubTitle>{item.views}</SubTitle>

              <Title>No of offer Messages:</Title>
              <SubTitle> {item.offerMessage}</SubTitle>

              <Title>Date of Post:</Title>
              <SubTitle> {item.datePost}</SubTitle>
              <Title>Plan Type:</Title>
              <SubTitle>
                {" "}
                {item.planType}
                <span
                  className="bg-BACKGROUND_GREEN text-white 
              text-base ml-4 py-2 px-6 rounded"
                >
                  Change Plan
                </span>
              </SubTitle>
              <hr style={{ color: "#077C6B", width: "860px" }} />
            </TextContainer>

            <div className="mt-8">
              <TextContainer>
                <Title>Condition:</Title>
                <SubTitle>{item.condition}</SubTitle>

                <Title>Brand Name:</Title>
                <SubTitle> {item.brandName}</SubTitle>

                <Title>Year of Manufacture:</Title>
                <SubTitle> {item.yearManufacture}</SubTitle>
                <Title>Body Type:</Title>
                <SubTitle> {item.bodyType}</SubTitle>
              </TextContainer>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default statusPage;
