import Header from "../components/Header";
import Button from "../components/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";
import Img30 from "../assets/img/image 30.png"
import Img32 from "../assets/img/image 32.png"
import Img33 from "../assets/img/image 33.png"

const Projects = () => {
  return (
    <div>
      <>
        <div className="container mx-auto px-4">
          <Header />

          <h1
            className="text-5xl font-thin mt-[80px] text-gray-400 mb-4"
            style={{ letterSpacing: "2px", lineHeight: "10px" }}
          >
            Our
          </h1>
          <h1 class="text-5xl  font-bold">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-[30px]">
            <div className="div1">
              <img src={Img30} width={600} alt="" />
            </div>
            <div className="div2 bg-[#FBFBFB] px-4 py-0">
              <h2 className="text-4xl text-[#BDBDBD] font-[200] mt-3 md:mt-3 lg:mt-7">Sample Project</h2>
              <p className="mt-[10px] md:mt-[10px] lg:mt-[50px]" style={{maxWidth: '400px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="bg-white text-[#333333] mt-[50px] px-5 py-3  rounded font-[200]">
                VIEW PROJECT{" "} 
                <span>
                  →
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-[30px]">
            <div className="div1">
              <img src={Img32} width={600} alt="" />
            </div>
            <div className="div2 bg-[#FBFBFB] px-4 py-0">
              <h2 className="text-4xl text-[#BDBDBD] font-[200] mt-3 md:mt-3 lg:mt-7">Sample Project</h2>
              <p className="mt-[10px] md:mt-[10px] lg:mt-[50px]" style={{maxWidth: '400px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="bg-white text-[#333333] mt-[50px] px-5 py-3  rounded font-[200]">
                VIEW PROJECT{" "} 
                <span>
                  →
                </span>
              </button>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 mt-[30px]">
            <div className="div1">
              <img src={Img33} width={600} alt="" />
            </div>
            <div className="div2 bg-[#FBFBFB] px-4 py-0">
              <h2 className="text-4xl text-[#BDBDBD] font-[200] mt-3 md:mt-3 lg:mt-7">Sample Project</h2>
              <p className="mt-[10px] md:mt-[10px] lg:mt-[50px]" style={{maxWidth: '400px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button className="bg-white text-[#333333] mt-[50px] px-5 py-3  rounded font-[200]">
                VIEW PROJECT{" "} 
                <span>
                  →
                </span>
              </button>
            </div>
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
    </div>
  );
};

export default Projects;
