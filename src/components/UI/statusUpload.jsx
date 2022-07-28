import React from "react";
import Slider from "react-slick";
import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import "../../styles/card.css";
import tw from "twin.macro";
import styled from "styled-components";
import {Link} from "react-router-dom"

const ContentContainer = styled.div`
  ${tw`flex justify-between md:px-10 px-7`}
`;
const Header = styled.h1`
  ${tw`text-2xl font-sans font-medium`}
`;
const Paragraph = styled.p`
  ${tw`text-sm`}
`;
export default function statusUpload({ data }) {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <>
         <ContentContainer>
     <div className="p-8 ml-4">
          <Header>Status Upload</Header>
          <div className="flex justify-between">
            <Paragraph>
            Have Your Products and Services Displayed for 24- Hours at a token.
            </Paragraph>
            
          </div>
          </div>
      </ContentContainer>
      <div className="card__container">
        <Slider {...settings} className="card__container--inner">
          {data?.map((item, index) => {
            return (
              <div className="card__container--inner--card" key={index}>
                <a href={item.link}>
                <img src={item.url} alt="hero_img"
                 />
                </a>
               
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
