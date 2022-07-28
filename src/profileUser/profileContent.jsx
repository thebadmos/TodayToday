import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components';
import Location from '../components/location';
import Section from '../components/section';
import StausUpload from '../components/statusUpload';
import HotDeals from '../components/hotDeals';
import TrendingAds from '../components/trendingAds'
import Footer from '../components/footer'


const ContentContainer = styled.div`
${tw`flex mt-24 justify-between md:px-10 px-7`}
`
const DivContainer = styled.div`
${tw`container m-auto p-8 flex flex-wrap -mx-2 mb-8`}
`
const Col = styled.div`
${tw`w-full md:w-1/2 lg:w-1/4 px-2 mb-4`}
`
const ColFull = styled.div`
${tw`w-full lg:w-1/2 px-2`}
`
const TextAlign = styled.div`
${tw`text-sm flex items-center justify-center`}
`;

const Header = styled.h1`
${tw`text-2xl font-sans font-medium`}

.textColor{
    color:#077C6B;
}
`;
const Paragraph = styled.p`
${tw`text-base`}

span{
    font-size: 15px;
    color:#077C6B;
}
`;
const Header2 = styled.h3`
${tw`font-sans font-medium mt-5`}

span{
   font-size: 13px;
   color:gray;
}
`;

const HeaderButton = styled.button`
${tw`bg-green-800 text-white  py-2 px-6 rounded`}

`;
const ImgIcon = styled.img`
  ${tw`w-[520px]`};
`;
const Ptext = styled.p`
${tw`font-semibold`}
`;

const ProfileContent = () => {
  return (
    <>
    <ContentContainer>
<DivContainer>
      <Col>
         <Header>
         Nigeria’s Fastest
         </Header>
         <Header>
             <div className='textColor'>
         Online Classified <br/>
          Market.
          </div>
         </Header>
         <Paragraph>You go- to place for all products and services
at cheap, reviewed and pocket friendly costs.
Shop with us <span>todaytoday</span> </Paragraph>

<HeaderButton>
          Discover Now
        </HeaderButton>
         </Col>
       <ColFull>
         <TextAlign>
         <ImgIcon src="/assets/Group 1.png" alt="img" />
         </TextAlign>
         </ColFull>
     <Col>
    <TextAlign>
       <Header2>
           2022<br/>
           <span>Year</span>
        </Header2>
        </TextAlign>
   <TextAlign>
    <Header2>
           Nigeria <br/>
           <span>Origin</span>
           </Header2>
    </TextAlign>
         </Col>

         <div class="container m-auto p-8 max-w-2xl mt-8 bg-gray-50 text-white  py-2 px-6 rounded">


<div class="flex flex-wrap -mx-2">
<div class="w-1/5">
      <div class="flex items-center">
         <Ptext>Location</Ptext>
      </div>
      <Location/>
   </div>
   <div class="w-1/5">
      <div class="flex items-center">
         <Ptext>Category</Ptext>
      </div>
      <Location/>
   </div>
   <div class="w-1/5">
      <div class="flex items-center">
         <Ptext>Make</Ptext>
      </div>
      <Location/>
   </div>
   <div class="w-1/5">
      <div class="flex items-center">
         <Ptext>Type</Ptext>
      </div>
      <Location/>
   </div>
   <div class="w-1/5">
      <div class="">
      <HeaderButton>
          Search
        </HeaderButton>
      </div>
   </div>
</div>
</div>
   </DivContainer>

</ContentContainer>
<StausUpload/>
<Section/>
<HotDeals/>
<TrendingAds/>
<Footer/>
    </>

  )
}

export default ProfileContent