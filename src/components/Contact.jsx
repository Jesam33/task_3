import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:flex items-center  mt-[70px] md:mt-9">
      <div className=" p-6">
        <div className="div mb-4">
          <h1 className="text-[40px] text-[#BDBDBD]">Contact Us</h1>
        </div>

        <div className="div grid grid-cols-1 md:flex items-center gap-10 w-full ">
          <div className=" w-1/1 md:w-1/2">
            <input
              type="text"
              placeholder="Name"
              className="mt-2 p-3 block w-full rounded-[3px] bg-[#F3F3F3]"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="mt-2 p-3 block w-full rounded-[3px] bg-[#F3F3F3]"
            />
            <input
              type="email"
              placeholder="Email"
              className="mt-2 p-3 block w-full rounded-[3px] bg-[#F3F3F3]"
            />
            <input
              type="text"
              placeholder="Interested In"
              className="mt-2 p-3 block w-full rounded-[3px] bg-[#F3F3F3]"
            />
            <textarea
              name="Message"
              placeholder="Message"
              className="mt-2  h-[100px]  p-2 block w-full rounded-[3px] bg-[#F3F3F3]"
              id=""
            ></textarea>
          </div>

          <div className="w-1/1">
            <img src="src/assets/image 12.png" alt="" width={870} />
          </div>
        </div>

        <div className="btn mt-9">
          <button className="bg-[#333333] p-2 rounded-md">
            <h2 className="text-[#FFFFFF] text-[12px]">
              SEND EMAIL
              <span>
                <ArrowForwardIcon />
              </span>
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
