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
  ${tw`ml-8`}
`;

export default function Sidebar() {
  const { toggleReducer } = useSelector((state) => state);
  const navigate = useNavigate();
  const location = useLocation();

  const sideBarList = [
    {
      title: "Premium Products",
      pathname: "/dashboard",
      icon: DashboardIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "Lowest Prices First",
      pathname: "/lowest-prices",
      icon: ProfileIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "Highest Prices First",
      pathname: "/highest-prices",
      icon: ProfileIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "Newest Prices",
      pathname: "/profile",
      icon: ProfileIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "All",
      pathname: "/profile",
      icon: ProfileIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
  ];

  const timePostList = [
    {
      title: "2+ Hours",
      pathname: "/dashboard",
      icon: DashboardIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "12+ Hours",
      pathname: "/profile",
      icon: ProfileIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "72+ Hours",
      pathname: "/profile",
      icon: ProfileIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "3+ Weeks",
      pathname: "/profile",
      icon: ProfileIcon,
      isSideBarOpen: toggleReducer?.isSideBarOpen?.payload,
      children: false,
    },
    {
      title: "Anytime",
      pathname: "/profile",
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
          <div className="text-xs text-GREEN-_100">Sort Items By:</div>
          <div className="mt-4 text-sm text-GREEN-_100 font-semibold">
            CATEGORY
          </div>
          <Divider />
          <div className="mt-4 text-sm text-GREEN-_100 font-semibold">
            RECOMMENDATIONS
          </div>

          <div className="mt-2 text-sm">
            {sideBarList.map((list) => (
              <NavLink
                key={list.pathname}
                to={list.pathname}
                className={(link) =>
                  `flex items-center rounded-xl ${
                    link.isActive ? "bg-[#FFFFFF25]" : ""
                  }`
                }
              >
                {list.title}

                {/* <img src={list.icon} alt="logo" loading="lazy" /> */}
              </NavLink>
            ))}
          </div>
          <Divider />
          <div className="mt-4 text-sm text-GREEN-_100 font-semibold">
            TIME OF POST
          </div>
          <div className="mt-2 text-sm">
            {timePostList.map((list) => (
              <NavLink
                key={list.pathname}
                to={list.pathname}
                className={(link) =>
                  `flex items-center rounded-xl ${
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
