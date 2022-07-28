import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";
import Footer from "./DashFooter";
import Logo from "../../home/Logo";
// const ContentContainer = styled.div`
//   ${tw`flex md:px-10`}
// `;
const DivContainer = styled.div`
  ${tw`container flex flex-wrap mt-4`}
`;
const LogoIcon = styled.img`
  ${tw`w-[95px] mb-3`};
`;

const LiStyle = styled.div`
  ${tw`border-b border-solid border-transparent`}
`;


function footer() {
  return (
    <>
      {/* <ContentContainer> */}
      <DivContainer>
        <footer class="footer-1 py-6 sm:py-12 w-full mt-4">
          <div class="container mx-auto px-4">
            <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
              <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                <h5 class="text-lg font-bold mb-6">About Us</h5>
                <ul class="list-none footer-links">
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                </ul>
              </div>
              <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                <h5 class="text-lg font-bold mb-6">Support</h5>
                <ul class="list-none footer-links">
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                </ul>
              </div>
              <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                <h5 class="text-lg font-bold mb-6">Our Resources</h5>
                <ul class="list-none footer-links">
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                </ul>
              </div>
              <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                <h5 class="text-lg font-bold mb-6">Our Apps</h5>
                <ul class="list-none footer-links">
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                  <li class="mb-2">
                    <LiStyle>
                      <Link to="">About Todaytoday</Link>
                    </LiStyle>
                  </li>
                </ul>
              </div>
              <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                <h5 class="text-lg font-bold mb-6 sm:text-center xl:text-left">
                  Stay connected
                </h5>
                <div class="flex sm:justify-center xl:justify-start">
                  <a
                    href=""
                    class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-green-800 hover:text-white hover:bg-blue-600 hover:border-blue-600"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a
                    href=""
                    class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-green-800 hover:text-white hover:bg-blue-400 hover:border-blue-400"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a
                    href=""
                    class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-green-800 hover:text-white hover:bg-red-600 hover:border-red-600"
                  >
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </div>
              </div>
            </div>
            {/* <Divider /> */}
          {/* <Footer/> */}
        
          </div>
        </footer>
      </DivContainer>
    </>
  );
}

export default footer;
