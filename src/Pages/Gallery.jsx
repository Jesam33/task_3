import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";
import rec23 from "../assets/img/Rectangle 23.png";
import rec24 from "../assets/img/Rectangle 24.png";
import rec25 from "../assets/img/Rectangle 25.png";
import rec26 from "../assets/img/Rectangle 26.png";
import rec27 from "../assets/img/Rectangle 27.png";
import rec28 from "../assets/img/Rectangle 28.png";
import rec29 from "../assets/img/Rectangle 29.png";
import rec30 from "../assets/img/Rectangle 30.png";
import rec31 from "../assets/img/Rectangle 31.png";
// import rec32 from "../assets/img/Rectangle 32.png"

const Gallery = () => {
  // Define an array of imported images
  const images = [rec23, rec24, rec25, rec26, rec27, rec28, rec29, rec30, rec31];

  return (
    <>
      <div className="container mx-auto px-4">
        <Header />

        <h1 className="text-5xl font-thin mt-10 text-gray-400 mb-4" style={{ letterSpacing: "2px", lineHeight: "10px" }}>
          Photo
        </h1>
        <h1 className="text-5xl font-bold">Galleryii</h1>

        <div className="gallery-grid mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Replace with your actual image URLs */}
          {Array.from({ length: 10 }).map((_, index) => (
            <img
              key={index}
              src={images[index % images.length]} // Use modulo to cycle through the imported images
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>

        <div className="div mt-10 mb-16 flex items-center gap-6">
          <div className="swiper-count flex mt-4">
            <p className="text-xl text-[#333333] font-[700] ">
              0 <br />
              <span>1</span>
            </p>
            <span className="text-4xl text-gray-500 mx-8">/</span>
            <p className="text-xl text-gray-500 font-normal">05</p>
          </div>

          <div className="buttons flex gap-3 mt-6">
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
