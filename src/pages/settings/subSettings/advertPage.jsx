import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Divider } from "antd";
import AdvertDetails from "./advertDetails";

const ContentContainer = styled.div`
  ${tw`flex px-4 `}
`;

function AdvertPage() {
  return (
    <div>
      <ContentContainer>
        <p className="text-GREEN-_100 font-semibold text-3xl ml-8">Settings</p>
      </ContentContainer>
      <Divider />
      <p className="text-GREEN-_100 font-semibold text-2xl px-4 ml-8">
        My Adverts
      </p>
      <div>
        <div className="flex gap-x-4 my-4">
          <AdvertDetails />
        </div>
      </div>
    </div>
  );
}

export default AdvertPage;
