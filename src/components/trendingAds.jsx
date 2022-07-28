import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {faStar,faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    ReviewStar,
} from "../styles/styledElements";


const ContentContainer = styled.div`
  ${tw`flex justify-between md:px-10 px-7`}
`;
const DivContainer = styled.div`
  ${tw`container m-auto p-8 `}
`;
const Header = styled.h1`
  ${tw`text-2xl font-sans font-medium`}
`;
const Paragraph = styled.p`
  ${tw`text-sm mt-2`}
}
`;
const ImgContainer = styled.div`
${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full`}
`;
const Card = styled.div`
${tw`max-w-sm rounded overflow-hidden shadow-lg`}
`;
const CardAlign = styled.div`
${tw`px-6 py-4 text-center`}
`;
const ImgHolder = styled.img`
${tw`object-cover w-full h-40 px-1 py-1 rounded-lg`}
`;
const CardHeader = styled.div`
${tw`font-bold text-sm mb-2`}
`;
const CardSub = styled.p`
${tw`text-gray-700 text-sm`}
`;
const CardPrice = styled.h3`
${tw`font-bold text-lg mt-4`}
`;
const CardReviews = styled.h3`
${tw`font-normal text-sm mt-2`}
`;





function trendingAds() {
  return (
   <>
     <ContentContainer>
        <DivContainer>
          <Header>
           Trending Ads
          </Header>
          <div className="flex justify-between">
          <Paragraph>
            Check out a couple of our Top Ads
            </Paragraph>
              <div></div>
              <div className="text-green-700 text-base">See More
              <button class="rounded-full w-10 h-10 bg-green-700 text-blue-100 ml-2">
              <FontAwesomeIcon icon={faArrowRight}/></button>
              </div>
            </div>
          <ImgContainer>
<Card>
  <ImgHolder src="/assets/sneakers-shoes.jpg" alt="categoriesImg"></ImgHolder>
  <CardAlign>
    <CardHeader>Brown Croc Skin Sneakers</CardHeader>
    <CardSub>
   Akwa Ibom | Fashion
    </CardSub>
    <CardPrice>N 34,000</CardPrice>
    <ReviewStar>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    </ReviewStar>
    <CardReviews> 
    14 Review(s)
    </CardReviews>
  </CardAlign>
</Card>
<Card>
  <ImgHolder src="/assets/house-isolated-field.jpg" alt="categoriesImg"></ImgHolder>
  <CardAlign>
    <CardHeader> Bedroom Duplex</CardHeader>
    <CardSub>
    Lagos | Real Estate
    </CardSub>
    <CardPrice>N 14,500,000</CardPrice>
    <ReviewStar>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    </ReviewStar>
    <CardReviews>14 Review(s)</CardReviews>
  </CardAlign>
</Card>
<Card>
  <ImgHolder src="/assets/drivingCar.jpg" alt="categoriesImg"></ImgHolder>
  <CardAlign>
    <CardHeader>BMW X45345 Sport Car</CardHeader>
    <CardSub>
     Bomo | Vehicles
    </CardSub>
    <CardPrice>N 45,000</CardPrice>
    <ReviewStar>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    </ReviewStar>
    <CardReviews>14 Review(s)</CardReviews>
  </CardAlign>
</Card>
<Card>
  <ImgHolder src="/assets/bmw.jpg" alt="categoriesImg"></ImgHolder>
  <CardAlign>
    <CardHeader>2-Seater Sofa</CardHeader>
    <CardSub>
     Bauchi | Furnitures
    </CardSub>
    <CardPrice>N 45,000</CardPrice>
    <ReviewStar>
    <FontAwesomeIcon icon={faStar}/>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    </ReviewStar>
    <CardReviews>14 Review(s)</CardReviews>
  </CardAlign>
</Card>

</ImgContainer>
          </DivContainer>
          </ContentContainer>
   </>
  )
}

export default trendingAds