import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { Navigation } from "react-minimal-side-navigation";
import { useSelector } from "react-redux";
import Text from "../../Typography/Typography";
import DashboardIcon from "../../../assets/images/dashboardIcon.svg";
import ProfileIcon from "../../../assets/images/profileIcon.svg";
import LogoApp from "../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

const LeftAlign = styled.div`
  ${tw`ml-16`}
`;

export default function Sidebar() {
  const { toggleReducer } = useSelector((state) => state);
  const navigate = useNavigate();
  const location = useLocation();

  const sideBarList = [
    {
      title: "Profile",
      pathname: "/settings ",
      icon: DashboardIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "Chats",
      pathname: "/chat-page",
      icon: ProfileIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "FAQs",
      pathname: "/faq-page",
      icon: ProfileIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
        title: "Payment Info",
        pathname: "/highest-prices",
        icon: ProfileIcon,
        isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
        children: false,
      },
      {
        title: "My adverts",
        pathname: "/advert-page",
        icon: ProfileIcon,
        isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
        children: false,
      },
      {
        title: "Followers",
        pathname: "/followers-page",
        icon: ProfileIcon,
        isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
        children: false,
      },
 
  ];


  return (
    <>
      <div className={`w-full px-2`}>
      <div className="h-24 w-full flex items-center justify-center">
          {/* <img
            src={LogoApp}
            alt="enerdealLogo"
            loading="lazy"
            className="m-0"
          /> */}
        </div>
        <LeftAlign>
          <div className="mt-2 text-lg font-semibold ">
            {sideBarList.map((list) => (
              <NavLink
                key={list.pathname}
                to={list.pathname}
                className={(link) =>
                  `flex items-center rounded-xl text-lg ${
                    link.isActive ? "bg-[#FFFFFF25]" : ""
                  }`
                }
              >
                {list.title}

                {/* <img src={list.icon} alt="logo" loading="lazy" /> */}
              </NavLink>
            ))}
          </div>

        </LeftAlign>
      </div>
    </>
  );
}
