/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import tw from "twin.macro";
import styled from "styled-components";
import Menu from "@mui/material/Menu";
import { logout } from "../../../redux/actions/auth/authActions";
// import Logo from "../../../assets/images/logo.svg";
import BellIcon from "../../../assets/images/bellIcon.svg";
import DownArrow from "../../../assets/images/downArrow.svg";
import Text from "../../Typography/Typography";
import Tags from "../../Tags";
import Button from "../../../pages/home/Navbar/Button";
import tokenService from "../../../services/token.service";

export const FlexContainer = styled.div`
  ${tw`flex items-center`}
  ${tw`cursor-pointer`};
`;
const UserIcon = styled.img`
  ${tw`w-[35px]`};
`;
const LogoIcon = styled.img`
  ${tw`w-[100px] mt-4`};
`;

export default function Header({
  handleToggleTrue,
  handleToggleFalse,
  isSideBarOpen,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user] = useState(tokenService.getUser());
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const Links = [
    { name: "Notifications", link: "/" },
    { name: "Premium Services", link: "/premium-services" },
    { name: "My Adverts", link: "/" },
  ];
  const menuItems = [
    {
      title: "Settings",
      onClick: () => navigate("/settings"),
    },
    {
      title: "Logout",
      onClick: () => handleLogout(),
    },
  ];

  return (
    <div className="w-full fixed top-0 ">
      <div className="flex justify-between py-3">
        <div>
          <LogoIcon src="/assets/logo.png" alt="user-profile" />
          {/* <img
            src={Logo}
            alt="hambuger"
            className="cursor-pointer hidden lg:block mt-2"
            onClick={() =>
              isSideBarOpen?.payload
                ? dispatch(handleToggleFalse(false))
                : dispatch(handleToggleTrue(true))
            }
          />
          <img
            src={Logo}
            alt="hambuger"
            className="cursor-pointer block lg:hidden mt-2"
            onClick={() => alert("A mobile toggle is Clicked")}
          /> */}
        </div>
        <div
          className="flex"
          style={{ marginRight: isSideBarOpen?.payload ? "20%" : "8%" }}
        >
          <ul className={`md:flex md:items-center mt-4`}>
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl md:my-0 my-7 font-semibold lg:text-sm"
              >
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <Button>Sell Products</Button>
            {/* <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </span>
              <input
                type="search"
                className="py-2 text-sm text-white bg-NEUTRAL-_100 rounded-lg w-64 pl-10 focus:w-64 focus:outline-none focus:bg-NEUTRAL-_100 focus:text-gray-900"
                placeholder="Search..."
                autoComplete="off"
              />
            </div> */}
            <img
              src={BellIcon}
              alt="notifyIcon"
              loading="lazy"
              className="cursor-pointer border-0 rounded-full mx-2 h-8 p-1 w-8"
            />
            <div
              onClick={handleClick}
              className="flex justify-between items-center cursor-pointer rounded-full py-2 px-2 mr-4"
            >
              <UserIcon src="/assets/userprofile.png" alt="user-profile" />
              {/* <Tags characters={user?.firstName?.charAt(0).toUpperCase()} /> */}
              <Text format="mx-2" variant="sub">
                {user?.firstName} {user?.lastName}
              </Text>
              <img src={DownArrow} alt="search" className="" />
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 0.5,
                  width: 150,
                },
              }}
            >
              {menuItems.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => data.onClick()}
                  >
                    {data.title}
                  </div>
                );
              })}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
