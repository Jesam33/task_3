import React from 'react';
// import ImageMasonry from './ImageMasonry';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import rec8 from "../assets/img/Rectangle_8.png";
// import rec10 from "../assets/img/Rectangle_10.png"
import rect9 from "../assets/img/Rectangle_9.png"
import rect10 from "../assets/img/Rectangle_10.png"

const About = () => {
  return (
    <div className="container mx-auto px-2 md:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-4">
        {/* Left Column */}
        <div className="w-full grid  grid-cols-1 md:grid-cols-2 gap-4 sm:w-1/1  md:w-1/1 lg:w-1/2">
          <div className="div">
          <img src={rec8} alt="" />
          <div className="div mt-4">

          <img src={rect10} alt="" />
          </div>
        </div>
        <div>
          <img src={rect9} alt="" />
        </div>
        </div>
      
       
        
        {/* Right Column */}
        <div className="w-full sm:mb-[30px] lg:mb-0  sm:w-1/1 md:w-1/1 lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-[200] text-[#BDBDBD] mb-4">
            About
          </h1>
          <div className="text-area sm:max-w-xl lg:max-w-md">
            <p className="text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-[14px]  text-[#BDBDBD] font-[200] flex items-center">
              READ MORE 
              <span className="ml-1"><ArrowForwardIcon /></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
