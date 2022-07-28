import React from "react";
import UserNavbar from "../../homeDashboard/userNavbar";
import tw from "twin.macro";
import styled from "styled-components";
import { Divider } from "antd";
import Footer from "../../home/footer";


const ContentContainer = styled.div`
  ${tw`flex px-24 mt-32 `}
`;

function PasswordPage() {
  return (
    <div>
      <UserNavbar />
      <ContentContainer>
        <h1 className="text-xl text-GREEN-_100">Change Password</h1>
      </ContentContainer>
      <Divider />

      <div className="container px-24">
        <div className="mt-2">
          <label className="block font-bold text-base text-GREEN-_100">
            Enter Old Password
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Old Password"
            className="w-[880px] border rounded-lg border-solid border-2 border-[#077C6B] bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
          />
        </div>
        <div className="mt-2">
          <label className="block font-bold text-base text-GREEN-_100">
            Enter New Password
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="New Password"
            className="w-[880px] border rounded-lg border-solid border-2 border-[#077C6B] bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
          />
        </div>
        <div className="mt-2">
          <label className="block font-bold text-base text-GREEN-_100">
            Enter Confirm Password
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-[880px] border rounded-lg border-solid border-2 border-[#077C6B] bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
          />
        </div>
    
      </div>
      <div className=" flex items-center">
      <button
                className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-32 rounded uppercase mt-8 ml-[300px]"
              >
              change password
              </button>
              </div>
      <Footer/>
    </div>
   
  );
}

export default PasswordPage;
