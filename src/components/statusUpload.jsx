import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentContainer = styled.div`
  ${tw`flex justify-between md:px-10 px-7`}
`;
const DivContainer = styled.div`
  ${tw`container m-auto p-8 `}
`;
const Header = styled.h1`
  ${tw`text-2xl font-sans font-medium`}
`;
const Paragraph = styled.p`
  ${tw`text-sm mt-2`}
}
`;
const ImgContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6`}
`;


function statusUpload() {
  return (
    <>
      <ContentContainer>
        <DivContainer>
          <Header>Status Upload</Header>
          <div className="flex justify-between">
            <Paragraph>
              Have Your Products and Services Displayed for 24- Hours at a token
            </Paragraph>
            <div></div>
          </div>

          <ImgContainer>
            <button class="rounded-full border border-2 border-gray-400 w-26 h-26 bg-white-700 text-blue-100 ml-2">
              <FontAwesomeIcon icon={faPlus} size="8x" />
            </button>
              <img 
              src="/assets/house.png"
              alt="house"
              />
              <img 
              src="/assets/redcar.png"
              alt="house"
              />
              <img 
              src="/assets/blueIphone.png"
              alt="house"
              />
              <img 
              src="/assets/laptop-wooden-table.png"
              alt="house"
              />
               <img 
              src="/assets/blueIphone.png"
              alt="house"
              />
               <img 
              src="/assets/house.png"
              alt="house"
              />
   
           
          </ImgContainer>
         
          
        
        </DivContainer>
      </ContentContainer>
    </>
  );
}

export default statusUpload;
