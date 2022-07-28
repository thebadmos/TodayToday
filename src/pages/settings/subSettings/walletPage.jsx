import React from "react";
import UserNavbar from "../../homeDashboard/userNavbar";
import tw from "twin.macro";
import styled from "styled-components";
import { Divider } from "antd";
import Footer from "../../home/footer";


const ContentContainer = styled.div`
  ${tw`flex px-24 mt-32 `}
`;

function WalletPage() {
  return (
    <div>
      <UserNavbar />
      <ContentContainer>
        <h1 className="text-xl text-GREEN-_100">Fund Wallet</h1>
      </ContentContainer>
      <Divider />

      <div className="container px-24">
        <div className="mt-2">
          <label className="block font-bold text-base text-GREEN-_100">
            Amount To Fund Wallet With
          </label>
        </div>
        <div>
          <input
            type="number"
            placeholder=""
            className="w-[880px] border rounded-lg border-solid border-2 border-[#077C6B] bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
          />
        </div>
        <label className="block font-bold text-base text-GREEN-_100">
          Or Select Amount
        </label>
        <button
          className="text-lg border border-2 border-GREEN text-GREEN-_100
                 py-2 px-6 rounded uppercase mt-4"
        >
          # 1,000
        </button>
        <button
          className="text-lg border border-2 border-GREEN text-GREEN-_100
                 py-2 px-6 rounded uppercase mt-4 ml-6"
        >
          # 5,000
        </button>
        <button
          className="text-lg border border-2 border-GREEN text-GREEN-_100
                 py-2 px-6 rounded uppercase mt-4 ml-6"
        >
          # 10,000
        </button>
        <button
          className="text-lg border border-2 border-GREEN text-GREEN-_100
                 py-2 px-6 rounded uppercase mt-4 ml-6"
        >
          # 20,000
        </button>
        <button
          className="text-lg border border-2 border-GREEN text-GREEN-_100
                 py-2 px-6 rounded uppercase mt-4 ml-6"
        >
          # 50,000
        </button>
      </div>
      <div className=" flex items-center">
      <button
                className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-32 rounded uppercase mt-8 ml-[300px]"
              >
                fund wallet
              </button>
              </div>
      <Footer/>
    </div>
   
  );
}

export default WalletPage;
