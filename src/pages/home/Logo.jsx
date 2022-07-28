import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";


export const FlexContainer = styled.div`
  ${tw`flex items-center`}
  ${tw`cursor-pointer`};
`;
const LogoIcon = styled.img`
  ${tw`w-[115px] mb-3`};
`;

const Logo = () => (
  <Link to="/">
    <FlexContainer className="space-x-2">
      <LogoIcon src="/assets/logo.png" alt="today-logo" />
    </FlexContainer>
  </Link>
);

export default Logo;
