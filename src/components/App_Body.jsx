import React from "react";
import Header from "./Header";
import Button from "./Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const App_Body = () => {
  return (
    <>
    <div className="overflow-x-hidden px-4">
      <Header />
      <div className="container relative lg:flex lg:flex-row lg:items-center sm:flex-col-reverse md:relative mx-auto mt-4 grid grid-cols-2 gap-[10rem]">
        {/* Left Column */}
        <div className="leftDiv absolute bg-[#120e16c2] lg:bg-transparent ml-[42px] mt-2 md:ml-[250px] lg:ml-6 md:mt-28 lg:mt-0 z-10 lg:relative sm:absolute md:mt-30 md:z-50 col-span-2">
          <div className="sm:h-auto px-11 py-2 lg:px-0 md:h-full sm:items-center md:items-center lg:items-start flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-thin mt-0 md:mt-10 text-gray-400 mb-4" style={{ letterSpacing: "2px", lineHeight: "1" }}>
              PROJECT
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold">Lorum</h1>
            <div className="buttons flex gap-5 py-8 md:py-16">
              <button className="border sm:px-2 sm:py-1 px-3 py-2 btn-primary shadow-small rounded-[5px]">
                <ArrowBackIcon />
              </button>
              <button className="border px-3 py-2 btn-primary shadow-small rounded-[5px] bg-[#F2F2F2]">
                <ArrowForwardIcon />
              </button>
            </div>
            <div className="swiperCount flex gap-5">
              <p className="text-2xl text-[#BDBDBD] font-[400]" style={{ lineHeight: "25px" }}>
                0 <br />
                <span>1</span>
              </p>
              <span className="text-2xl text-[#BDBDBD] font-[400]">/</span>
              <p className="text-2xl text-[#BDBDBD] font-[400]">02</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="righttDiv lg:relative w-full bg-slate-500 col-span-2">
          <img src="/src/assets/hero.png" alt="Building" className="inset-0 w-full h-full object-cover" style={{ maxHeight: "600px" }} />
          <button className="absolute bg-white bottom-0 left-0 text-[#333333] md:text-[18px] font-[200] sm:px-6 md:px-6 sm:py-2 lg:px-12 lg:py-4 px-12">
            VIEW PROJECT
            <span>
              <ArrowForwardIcon />
            </span>
          </button>
        </div>
      </div>

      {/* About */}
      <div className="container mx-auto px-0 md:px-8">
        <div className="mt-12 md:mt-20 pl-0 md:pl-0 py-8 md:py-12 bg-gray-100">
          <About />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="div my-[50px] w-100">
        <h1 className="text-[30px] md:text-[50px] sm:text-center lg:text-left text-[#BDBDBD] font-[200]">
          Main Focus/Mission Statement
        </h1>
        <div className="div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="div_1 grid mt-8 md:mt-0 grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 items-center">
            <div className="div_sub-1">
              <h1 className="lg:text-[150px] text-[120px] md:text-[120px] font-[800] text-[#F2F2F2]">1</h1>
            </div>
            <div className="div_sub-2" style={{ minWidth: "225px" }}>
              <p className="lg:text-[18px] sm:text-[15px] md:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
              </p>
            </div>
          </div>
          <div className="div_2 mt-0 md:mt-0 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 items-center">
            <div className="div_sub-3">
              <h1 className="lg:text-[150px] text-[120px] md:text-[120px] font-[800] text-[#F2F2F2]">2</h1>
            </div>
            <div className="div_sub-4  md:max-w-0" style={{ minWidth: "330px" }}>
              <p className="lg:text-[18px] text-[15px] max-w-[200px]  md:text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, mag
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects */}
      <div className="justify-center  w-full md:w-full relative ">
        <h1 className="text-[50px] font-[200] mb-[10px] text-[#BDBDBD]">
          Our Projects
        </h1>
        <div className="w-full  sm-block lg:flex gap-4">
          <div className="relative w-full mb-[20px] md:mb-[20px] lg:mb-0">
            <img src="src\assets\Rectangle 12.png" alt="" className="w-full" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 p-9 w-full h-full items-center z-10">
              <p className="text-white text-[25px] md:text-[50px] font-[900] z-20" style={{ lineHeight: "1" }}>
                Sample <br /> Project
              </p>
              <p className="text-white text-[12px] mt-4">
                VIEW MORE{" "}
                <span>
                  <ArrowForwardIcon />{" "}
                </span>{" "}
              </p>
            </div>
          </div>
          <img src="src/assets/image 15.png" alt="" className="w-full" />
        </div>
        <div className="div mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid lg:flex gap-6">
          <img src="src/assets/image 16.png" alt="" className="w-full" />
          <img src="src/assets/image 17.png" alt="" className="w-full" />
          <img src="src/assets/image 18.png" alt="" className="w-full" />
        </div>
        <div className="absolute right-0 bg-gray-900 mt-9">
          <button className="bg-[#333333] p-4 py-3 ">
            <h2 className="text-[#FFFFFF] text-[12px]">
              SEND EMAIL
              <span>
                <ArrowForwardIcon />
              </span>
            </h2>
          </button>
        </div>
      </div>

      {/* Contact Us */}
      <Contact />

      {/* Footer */}
    </div>
      <Footer />
      </>
  );
};

export default App_Body;
