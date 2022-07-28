import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
  ${tw`bg-white w-80 rounded-md p-6 mt-8`}
`;
const LiStyle = styled.div`
  ${tw`border-b border-solid border-transparent`}
`;

function footer() {
  return (
    <>
     
      
          {/* <FooterContainer>
            <div class="float-left">
              <FText>
                Subscribe our newsletter
                <Paragraph>
                  Recieve latest news, update, and many other things every week.{" "}
                </Paragraph>
                <SearchContainer></SearchContainer>
              </FText>
            </div>
            <img
              src="/assets/image871.png"
              alt="footerImg"
              class="object-cover w-24 float-right"
            />
          </FooterContainer> */}
      
          <footer class="footer-1 py-6 sm:py-12 w-full mt-4">
            <div class="container px-20">
              <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4">
                  <h5 class="text-xl font-bold mb-6">About Us</h5>
                  <ul class="list-none footer-links text-lg">
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">About Todaytoday</Link>
                      </LiStyle>
                    </li>
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">Terms and Conditions</Link>
                      </LiStyle>
                    </li>
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">Privacy Policy</Link>
                      </LiStyle>
                    </li>
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">Billing Policy</Link>
                      </LiStyle>
                    </li>
                  </ul>
                </div>
                <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 sm:mt-0">
                  <h5 class="text-xl font-bold mb-6">Support</h5>
                  <ul class="list-none footer-links text-lg">
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">support@todaytoday.ng</Link>
                      </LiStyle>
                    </li>
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">Contact us</Link>
                      </LiStyle>
                    </li>
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">Safety Tips</Link>
                      </LiStyle>
                    </li>
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">FAQ</Link>
                      </LiStyle>
                    </li>
                  </ul>
                </div>
                <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/4 mt-8 md:mt-0">
                  <h5 class="text-xl font-bold mb-6">Our Resources</h5>
                  <ul class="list-none footer-links text-lg">
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">Blog</Link>
                      </LiStyle>
                    </li>
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">Pricing</Link>
                      </LiStyle>
                    </li>
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">Youtube</Link>
                      </LiStyle>
                    </li>
                    <li class="mb-2">
                      <LiStyle>
                        <Link to="">Our Community</Link>
                      </LiStyle>
                    </li>
                  </ul>
                </div>
                
                <div class="px-4 mt-4 sm:w-1/3 xl:w-1/4 sm:mx-auto xl:mt-0 xl:ml-auto">
                  <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">
                   Our Apps
                  </h5>
                  <div class="flex sm:justify-center xl:justify-start">
                    <a
                      href=""
                      class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-GREEN-_100  hover:text-white hover:bg-GREEN-_100 hover:border-blue-600"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a
                      href=""
                      class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-GREEN-_100  hover:text-white hover:bg-GREEN-_100 hover:border-blue-400"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a
                      href=""
                      class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-GREEN-_100  hover:text-white hover:bg-GREEN-_100 hover:border-red-600"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
       
     
    </>
  );
}

export default footer;
