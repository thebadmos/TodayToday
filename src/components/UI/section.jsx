import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
        <div className="p-8 ml-4">
          <Header>Top Categories</Header>

          <div className="flex justify-between">
            <Paragraph>
              We’ve got them in different varieties, Check them out.{" "}
            </Paragraph>
            <div></div>
            <div className="text-GREEN-_100 text-base">
              See More
              <button class="rounded-full w-10 h-10 bg-BACKGROUND_GREEN text-blue-100 ml-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          <div class="">
            <section class="p-2 ">
              <div class="flex flex-wrap -mx-4">
                <div class="md:w-1/3 h-auto px-4">
                  <div class="mb-8">
                    <div className="overflow-hidden">
                      <div
                        className="absolutew-full py-2.5 top-0
                     inset-x-0 bg-BACKGROUND_GREEN text-white tex-xs
                      leading-4"
                      >
                        <div className="flex justify-between">
                          <div className="ml-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                            90 Ads
                          </div>
                          <div></div>
                          <div className="mr-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                            Electronics
                          </div>
                        </div>
                      </div>
                      <img
                        class="rounded shadow-md"
                        src="/assets/electronics.jpeg"
                        alt="electronics"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <div
                      className="absolutew-full py-2.5 top-0
                     inset-x-0 bg-BACKGROUND_GREEN text-white tex-xs
                      leading-4"
                    >
                      <div className="flex justify-between">
                        <div className="ml-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                          160 Ads
                        </div>
                        <div></div>
                        <div className="mr-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                          Vehicles
                        </div>
                      </div>
                    </div>
                    <img
                      class="rounded shadow-md"
                      src="/assets/Vehicles.jpg"
                      alt="vehicles"
                    />
                  </div>
                </div>
                <div class="xl:w-1/3 h-auto px-4">
                  <div class="h-[599px] w-auto rounded shadow-md">
                    <Link to="/gadget-page">
                      <div className="overflow-hidden">
                        <div
                          className="absolutew-full py-2.5 top-0
                     inset-x-0 bg-BACKGROUND_GREEN text-white tex-xs
                      leading-4"
                        >
                          <div className="flex justify-between">
                            <div className="ml-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                              190 Ads
                            </div>
                            <div></div>
                            <div className="mr-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                              Gadgets
                            </div>
                          </div>
                        </div>
                        <img
                          class="rounded shadow-md bg-cover h-[599px]"
                          src="/assets/Iphone.jpg"
                          alt="gadgets"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div class="md:w-1/3 h-auto px-4">
                  <div class="mb-8">
                    <div className="overflow-hidden">
                      <div
                        className="absolutew-full py-2.5 top-0
                     inset-x-0 bg-BACKGROUND_GREEN text-white tex-xs
                      leading-4"
                      >
                        <div className="flex justify-between">
                          <div className="ml-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                            122 Ads
                          </div>
                          <div></div>
                          <div className="mr-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                            Real Estate
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      class="rounded shadow-md "
                      src="/assets/realestate.jpg"
                      alt="realestate"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <div
                      className="absolutew-full py-2.5 top-0
                     inset-x-0 bg-BACKGROUND_GREEN text-white tex-xs
                      leading-4"
                    >
                      <div className="flex justify-between">
                        <div className="ml-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                          22 Ads
                        </div>
                        <div></div>
                        <div className="mr-2 rounded-md py-1 px-2 bg-white text-black text-sm font-semibold">
                          Fashion
                        </div>
                      </div>
                    </div>
                    <img
                      class="rounded shadow-md"
                      src="/assets/fashion.jpg"
                      alt=""
                    />
                  </div>
                </div>
              
              </div>
            </section>
           
          </div>

         
        </div>
      </ContentContainer>
    </>
  );
}

export default section;
