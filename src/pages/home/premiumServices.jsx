import React from "react";
import UserNavbar from "../homeDashboard/userNavbar";
import tw from "twin.macro";
import styled from "styled-components";
import Footer from "./footer";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentContainer = styled.div`
  ${tw`flex px-24 mt-32 `}
`;
const ColFull = styled.div`
  ${tw`w-full lg:w-1/2 px-2`}
`;
const Paragraph = styled.p`
  ${tw`text-lg text-black font-medium`}
`;
const TextAlign = styled.div`
  ${tw`text-sm flex items-center justify-center`}
`;
const ImgIcon = styled.img`
  ${tw`w-[520px]`};
`;
const Title = styled.h1`
  ${tw`text-3xl font-semibold mt-24 text-GREEN-_100`}
`;
const DivContainer = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full`}
`;
function PremiumServices() {
  return (
    <div>
      <UserNavbar />
      <ContentContainer>
        <ColFull>
          <Title>
            {" "}
            Upgrade Your Plan And <br />
            Get The Best Experience.
          </Title>
          <Paragraph>
            TodayToday gives you the best experience. Pricier than a news <br />
            subscription, cheaper than a lawsuit.
          </Paragraph>
          <button
            className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-8 rounded mt-2"
          >
            Find the plan for you
          </button>
        </ColFull>
        <ColFull>
          <TextAlign>
            <ImgIcon src="/assets/Subscription.png" alt="img" />
          </TextAlign>
        </ColFull>
      </ContentContainer>

      <div className="text-black text-2xl flex items-center justify-center">
        Plan Pricing
      </div>

      <p className="text-black text-lg flex items-center justify-center">
        With three different plans, JumpQ is sure to have one
        <br />
        that checks all of the boxes just for you.
      </p>

      <div className="px-24 mt-8">
        <DivContainer>
          <div className="rounded-md border-2 border-GREEN-_100 w-80 h-[450px] mt-12">
            <h2 className="mt-4 px-8 text-lg font-semibold">Lite</h2>

            <div className="px-8 text-base">
              <h2 className=" text-GREEN-_100"> NGN 1,999.00 / Month</h2>
              <h2 className=" text-GREEN-_100"> NGN 5,498.00 / 3 Months</h2>
              <h2 className=" text-GREEN-_100"> NGN 11,495.00 / 6 Months</h2>
            </div>

            <hr style={{ color: "#077C6B", width: "300px" }} className="ml-2" />
            <div className="px-8 mt-4">
              <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
              <span className="text-base ml-2"> Category Promotion</span>
              <div className="mt-2">
                <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
                <span className="text-base ml-2">
                  {" "}
                  Automatic ad Renewal after <br />
                  72 Hours
                </span>
              </div>
              <div className="mt-2">
                <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
                <span className="text-base ml-2"> 1 Ad Max</span>
              </div>
              <button
                className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-24 rounded uppercase mt-24"
              >
                subscribe
              </button>
            </div>
          </div>
          <div className="rounded-md border-2 border-GREEN-_100 w-80 h-[550px] ml-4">
            <h2 className="mt-4 px-8 text-lg font-semibold">Pro</h2>

            <div className="px-8 text-base">
              <h2 className=" text-GREEN-_100"> NGN 3,499.00 / Month</h2>
              <h2 className=" text-GREEN-_100"> NGN 9,998.00 / 3 Months</h2>
              <h2 className=" text-GREEN-_100"> NGN 20,495.00 / 6 Months</h2>
            </div>

            <hr style={{ color: "#077C6B", width: "300px" }} className="ml-2" />
            <div className="px-8 mt-4">
              <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
              <span className="text-base ml-2"> Category Promotion</span>
              <div className="mt-2">
                <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
                <span className="text-base ml-2">
                  {" "}
                  Automatic ad Renewal after <br />
                  24 Hours
                </span>
              </div>
              <div className="mt-2">
                <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
                <span className="text-base ml-2">
                  {" "}
                  SMS Notification on New Messages
                </span>
              </div>
              <div className="mt-2">
                <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
                <span className="text-base ml-2"> 3 AdS Max</span>
              </div>
              <button
                className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-24 rounded uppercase mt-40"
              >
                subscribe
              </button>
            </div>
          </div>
          <div className="rounded-md border-2 border-GREEN-_100 w-80 h-[450px] mt-12 ml-4">
            <h2 className="mt-4 px-8 text-lg font-semibold">Ultimate</h2>

            <div className="px-8 text-base">
              <h2 className=" text-GREEN-_100"> NGN 5,999.00 / Month</h2>
              <h2 className=" text-GREEN-_100"> NGN 15,498.00 / 3 Months</h2>
              <h2 className=" text-GREEN-_100"> NGN 32,495.00 / 6 Months</h2>
            </div>

            <hr style={{ color: "#077C6B", width: "300px" }} className="ml-2" />
            <div className="px-8 mt-4">
              <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
              <span className="text-base ml-2"> Category Promotion</span>
              <div className="mt-2">
                <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
                <span className="text-base ml-2">
                  {" "}
                  Automatic ad Renewal after <br />
                  12 Hours
                </span>
              </div>
              <div className="mt-2">
                <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
                <span className="text-base ml-2">
                  {" "}
                  SMS Notification on New Messages
                </span>
              </div>
              <div className="mt-2">
                <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100" />
                <span className="text-base ml-2"> 5 Ad Max</span>
              </div>
              <button
                className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-24 rounded uppercase mt-12"
              >
                subscribe
              </button>
            </div>
          </div>
        </DivContainer>
      </div>

      {/* compare plans */}
      <div className="mt-12">
        <div className="text-black text-2xl flex items-center justify-center">
          Compare Plans
        </div>

        <p className="text-black text-lg flex items-center justify-center">
          Check out all the Features that differ per plan to find one that fits{" "}
          <br />
          what you're looking for. All our plans are easy to switch, anytime
        </p>
      </div>

    <div className="container px-24">
      <div className="flex justify-between mt-12">
      <div className="text-lg text-GREEN-_100 font-semibold">Features</div>
      <div className="font-semibold text-base">Basic Plan</div>
      <div className="font-semibold text-base">Pro Plan</div>
      <div className="font-semibold text-base">Premium Plan</div>
      </div>
      <hr style={{ color: "#077C6B", width: "1200px" }} className="mt-2" />
      
      <div className="flex justify-between mt-4">
        <div className="font-semibold">Category Promotion</div>
        <div> <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100 mr-16" /></div>
        <div><FontAwesomeIcon icon={faCheck} className="text-GREEN-_100 mr-16" /></div>
        <div><FontAwesomeIcon icon={faCheck} className="text-GREEN-_100 mr-16" /></div>
        </div>
        <div className="flex justify-between mt-4">
        <div className="font-semibold">Automatic ad Renewal After</div>
        <div className="font-semibold mr-16"> 72 Hours</div>
        <div className="font-semibold mr-16">24 Hours</div>
        <div className="font-semibold mr-16">12 Hours</div>
        </div>
        <div className="flex justify-between mt-4">
        <div className="font-semibold">SMS Notification on New Messages</div>
        <div></div>
        <div> <FontAwesomeIcon icon={faCheck} className="text-GREEN-_100 mr-16" /></div>
        <div><FontAwesomeIcon icon={faCheck} className="text-GREEN-_100 mr-16" /></div>
        </div>
        <div className="flex justify-between mt-4">
        <div className="font-semibold">No of Ads</div>
        <div className="text-GREEN-_100 mr-8 ">1</div>
        <div className="text-GREEN-_100 mr-6">3</div>
        <div className="text-GREEN-_100 mr-16">5</div>
        </div>




    </div>












      <Footer />
    </div>
  );
}

export default PremiumServices;
