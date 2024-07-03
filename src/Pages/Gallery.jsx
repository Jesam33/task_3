import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Header />

        <h1
          className="text-5xl font-thin mt-[80px] text-gray-400 mb-4"
          style={{ letterSpacing: "2px", lineHeight: "10px" }}
        >
          Photo
        </h1>
        <h1 class="text-5xl  font-bold">Galleryii</h1>

        <div className="gallery-grid mt-[40px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Replace with your actual image URLs */}
          {Array.from({ length: 10 }).map((_, index) => (
            <img
              key={index}
              src={`../src/assets/Rectangle ${index + 22}.png`}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>

        <div className="div mt-[40px] mb-[50px] flex items-center gap-6">
          <div className="swiper-count flex  mt-4">
            <p className="text-xl text-[#333333] font-[700] ">
              0 <br />
              <span>1</span>
            </p>
            <span className="text-4xl text-gray-500  mx-[30px]">/</span>
            <p className="text-xl text-gray-500 font-normal">05</p>
          </div>

          <div className="buttons flex gap-3  mt-6">
            <Button
              btnClass="border border-gray-300 px-2 py-1 btn-primary shadow-sm rounded-md mr-2"
              label={<ArrowBackIcon />}
            />
            <Button
              btnClass="border border-gray-300 px-2 py-1 btn-primary shadow-sm rounded-md bg-gray-100"
              label={<ArrowForwardIcon />}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
