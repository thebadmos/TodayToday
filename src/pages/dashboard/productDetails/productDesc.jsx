import * as React from "react";
import { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  faAngleDoubleUp,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";
import ReportAd from "../../../components/UI/reportAd";

const DivContainer = styled.div`
  ${tw`p-2 flex flex-wrap -mx-2 mb-2`}
`;
const ContentContainer = styled.div`
  ${tw`flex px-24 mt-12`}
`;

const ProductDesc = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  return (
    <> 
    <hr style={{ color: "#077C6B", width: "1360px" }}
    className="ml-16" />
      {/* <Divider className="mt-4" style={{ "background-color": "#077C6B" }} /> */}
      <div className="flex justify-between">
        <div className="mt-4 ml-24 uppercase text-base text-GREEN-_100 font-semibold">
          Additional Description
        </div>
        <button onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon
            icon={faAngleDoubleUp}
            className="mr-28  text-GREEN-_100"
            size="xl"
          />
        </button>
      </div>
      {toggle && (
        <DivContainer>
          <p className="text-base ml-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>
            aliquip ex <br/>ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
       
          </p>
        </DivContainer>
      )}
      <hr style={{ color: "#077C6B", width: "1360px" }}
    className="ml-16 mt-4" />
      {/* <Divider className="mt-4" style={{ "background-color": "#077C6B" }} /> */}
      <div className="flex justify-between">
        <div className="mt-4 ml-24 uppercase text-base text-GREEN-_100 font-semibold">
          safety tips
        </div>
        <button onClick={() => setToggle2(!toggle2)}>
          <FontAwesomeIcon
            icon={faAngleDoubleUp}
            className="mr-28  text-GREEN-_100"
            size="xl"
          />
        </button>
      </div>
      {toggle2 && (
        <DivContainer>
        <p className="text-base ml-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/>
            aliquip ex <br/>ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
       
          </p>
        </DivContainer>
      )}  
      <hr style={{ color: "#077C6B", width: "1360px" }}
      className="ml-16 mt-4" />
      {/* <Divider className="mt-4" style={{ "background-color": "#077C6B" }} /> */}
      <div className="flex justify-between">
        <div className="mt-4 ml-24 uppercase text-base text-GREEN-_100 font-semibold">
          report ad
        </div>
        <button onClick={() => setToggle3(!toggle3)}>
          <FontAwesomeIcon
            icon={faAngleDoubleUp}
            className="mr-28  text-GREEN-_100"
            size="xl"
          />
        </button>
      </div>
      <p
        className="text-base ml-4 text-GREEN-_100 
        uppercase ml-24 font-medium mt-8 font-semibold"
      >
        write report
      </p>
      {toggle3 && <ReportAd />}
      <hr style={{ color: "#077C6B", width: "1360px" }}
      className="ml-16 mt-4" />
      {/* <Divider className="mt-4" style={{ "background-color": "#077C6B" }} /> */}
    </>
  );
};

export default ProductDesc;
