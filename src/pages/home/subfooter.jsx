import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContentContainer = styled.div`
  ${tw`flex md:px-10 px-7`}
`;
const DivContainer = styled.div`
  ${tw`w-full p-8 flex flex-wrap`}
`;
const FooterContainer = styled.div`
  ${tw`bg-BACKGROUND_GREEN w-full h-60 rounded-md`}
`;
const FText = styled.h3`
  ${tw`text-3xl font-sans font-medium p-8 text-white`}
`;
const Paragraph = styled.p`
  ${tw`text-sm mt-2 text-white`}
}
`;
const SearchContainer = styled.div`
  ${tw`bg-red-600 w-48 h-6 ml-2 rounded-md p-6 text-center`}
`;

function Subfooter() {
  return (
    <>
      <ContentContainer>
        <DivContainer>
          <FooterContainer>
            <div class="float-left">
              <FText>
                Subscribe our newsletter
                <Paragraph>
                  Recieve latest news, update, and many other things every week.{" "}
                </Paragraph>
                <div class="justify-center mt-4 flex">
                  <input
                    id="email"
                    type="email"
                    class="mt-4 block w-58 h-10  bg-white text-lg "
                    required
                    autofocus
                    autocomplete="username"
                    placeholder="email@email.com"
                  />
                  <a
                    class="rounded-md py-2 px-6 cursor-pointer text-md ml-2
      inline-table items-center text-lg 
      text-center bg-red-500 text-white font-bold 
    "
                  >
                    Subscribe
                  </a>
                </div>
              </FText>
            </div>
            <img
              src="/assets/image871.png"
              alt="footerImg"
              class="object-cover w-24 float-right"
            />
          </FooterContainer>
        </DivContainer>
      </ContentContainer>
    </>
  );
}

export default Subfooter;
