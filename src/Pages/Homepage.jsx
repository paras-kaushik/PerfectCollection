import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import { homepage_kurta_category } from "../Data/Men/homepage_kurta_category";
import './HomePage.css'
import StoreInfo from "../customer/Components/Home/StoreInfo";
import SocialLinks from "../customer/Components/Home/SocialLinks";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={homepage_kurta_category} section={"Men's Kurta Categories"} />
        <SocialLinks/>
        <StoreInfo/>
        
       
        

      

      </div>


    </div>
  );
};

export default Homepage;