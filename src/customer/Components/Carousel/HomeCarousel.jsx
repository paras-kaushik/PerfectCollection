import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";
import "./Carousel.css"
import BannerImage from '../../../Data/Banner.png'

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();

  const item=[(   <img
    className="cursor-pointer rounded-md"
    onClick={() => navigate('/men/clothing/mens_kurta')}
    src={BannerImage}
    alt=""
    onDragStart={handleDragStart}
    role="presentation"
  />)];


  // const item = homeCarouselData.map((item) => (
  //   <img
  //     className="cursor-pointer rounded-md"
  //     onClick={() => navigate(item.path)}
  //     src={item.image}
  //     alt=""
  //     onDragStart={handleDragStart}
  //     role="presentation"
  //   />
  // ));
  return (
    <AliceCarousel
      mouseTracking
      items={item}
      autoPlay
      infinite
      autoPlayInterval={2000}
      disableButtonsControls
    />
  );
};

export default HomeCarousel;
