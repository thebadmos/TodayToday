import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Footer from "../home/footer";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import { Settings } from "@mui/icons-material";

const ContentContainer = styled.div`
  ${tw`flex px-4 `}
`;

const UserIcon = styled.img`
  ${tw`w-[195px] ml-24`};
`;

const settingDetails = [
  {
    name: "Daniels Samuel",
    account: "2376765443",
    followers: "3236",
    following: "3421",
  },
];

const index = () => {
  return (
    <>
      <ContentContainer>
        <p className="text-GREEN-_100  font-semibold text-3xl ml-8">Settings</p>
      </ContentContainer>
      <Divider />
      <div className="container px-20">
        <div
          className="rounded-tl-full w-[996px] h-48 bg-BACKGROUND_GREEN
      "
        >
          <div className="flex justify-end">
            <p className="mt-8 text-white text-3xl mr-8 font-medium">
              Wallet <br />
              <span className="text-lg ">
                Available Balance <br />
                4,500,000 NGN
              </span>
            </p>
          </div>

          <img
            src="/assets/userprofile.png"
            alt="user-profile"
            className="w-32 ml-14"
          />
        </div>

        <div className="ml-52">
          {settingDetails.map((setting, index) => (
            <div key={index}>
              <h4 className="text-2xl mt-4 font-semibold text-GREEN-_100">
                {setting.name}
              </h4>

              <p className="text-base text-black">
                ACCOUNT ID: {setting.account}
                <Link to="/wallet">
                  <button
                    className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-6 rounded uppercase ml-48"
                  >
                    fund wallet
                  </button>
                </Link>
              </p>
              <p className="text-base text-GREEN-_100">
                {setting.followers}{" "}
                <span className="text-black text-base">FOLLOWERS</span>
                <span className="ml-4 text-base">
                  {setting.following}
                  <span className="text-black text-base ml-1">FOLLOWING</span>
                </span>
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-4 text-black text-lg font-semibold">My Details</h2>
        <hr style={{ color: "#077C6B", width: "980px" }} />
        <div className="mt-8">
          <label className="block font-bold text-base text-GREEN-_100">
            First Name
          </label>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Daniels"
            className="w-[980px] border rounded-lg border-solid border-2 border-[#077C6B] bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
          />
        </div>

        <div className="mt-2">
          <label className="block font-bold text-base text-GREEN-_100">
            Last Name
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Samuel"
            className="w-[980px] border rounded-lg border-solid border-2 border-[#077C6B] bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
          />
        </div>
        <div className="mt-2">
          <label className="block font-bold text-base text-GREEN-_100">
            E-mail Address
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="daniels11@gmail.com"
            className="w-[980px] border rounded-lg border-solid border-2 border-[#077C6B] bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
          />
        </div>
        <div className="mt-2">
          <label className="block font-bold text-base text-GREEN-_100">
            Phone Number
          </label>
        </div>
        <div>
          <input
            type="number"
            placeholder="08181715531"
            className="w-[980px] border rounded-lg border-solid border-2 border-[#077C6B] bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
          />
        </div>

        <h2 className="mt-4 text-black text-lg font-semibold">
          Authentication Details
        </h2>
        <hr style={{ color: "#077C6B", width: "980px" }} />

        <div className="mt-2">
          <label className="block font-bold text-base text-GREEN-_100">
            Password
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="**************"
            className="w-[980px] border rounded-lg border-solid border-2 border-[#077C6B] bg-white
         px-3 py-2 outline-none mt-2 text-base text-black"
          />
        </div>
        <div className="flex justify-end">
          <Link to="/change-password">
            <button
              className=" text-sm bg-BACKGROUND_GREEN text-white
                 py-2 px-6 rounded uppercase ml-48 mt-4"
            >
              change password
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
