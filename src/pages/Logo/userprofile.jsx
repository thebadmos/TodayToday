import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";



export const FlexContainer = styled.div`
  ${tw`flex items-center`}
  ${tw`cursor-pointer`};
`;
const UserIcon = styled.img`
  ${tw`w-[40px] mt-2 ml-3`};
`;

const UserProfile = () => (
  
  <Link to="">
    <FlexContainer className="space-x-2">
      <UserIcon src="/assets/userprofile.png" alt="user-profile" />
    </FlexContainer>
  </Link>
);

export default UserProfile;


