import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";
import { Divider } from "antd";
import FollowersDetails from './followersDetails';


const ContentContainer = styled.div`
  ${tw`flex px-4 `}
`;


function FollowersPage() {
  return (
    <div>
        <div>
      <ContentContainer>
        <p className="text-GREEN-_100 font-semibold text-3xl ml-8">Settings</p>
      </ContentContainer>
      <Divider />
      <div className='flex justify-between'>
      <div className="text-GREEN-_100 font-semibold text-2xl px-4 ml-8">
        Followers
      </div>
      <div></div>
      <div className="text-black font-semibold text-2xl px-4 mr-48">
        Following
      </div>
      </div>
      <div>
        <div className="flex gap-x-4 my-4">
          <FollowersDetails />
        </div>
      </div>
    
     
      </div>
    </div>
    
  )
}

export default FollowersPage