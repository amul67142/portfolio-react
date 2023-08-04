import React from "react";

import Work1 from "../assets/projects/work1.png";
import Work2 from "../assets/projects/work2.png";
import Work3 from "../assets/projects/work3.png";
import Work4 from "../assets/projects/work4.png";

const Work = () => {
  return (
    <div
      name="works"
      className=" w-full md:h-screen text-gray-300 bg-[#0a192f] mt-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-700">
            Work
          </p>
          <p className="py-4">check out my recent work</p>
        </div>

        {/*container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*grid items */}
          <div
            style={{ backgroundImage: `url(${Work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Burger Shop
              </span>
              <div className="pt-8 text-center">
                <a href="https://burgir-shop.netlify.app">
                  <button className="text-center rounder-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
               
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Work2})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                News Fox
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/amul67142/My-React-Projects/tree/master/NewsApp-%20React">
                  <button className="text-center rounder-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Project Link
                  </button>
                </a>
              
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Work3})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
               Youtube reels
              </span>
              <div className="pt-8 text-center">
                <a href="https://youtube-clne.netlify.app/">
                  <button className="text-center rounder-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Work4})` }}
            className="shadow-lg shadow-[#040c16] group container rounder-md flex justify-center items-center mx-auto content-div"
          >
            <div className=" opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Html, css, js Portfolio
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/amul67142/portfolio-html-css-js">
                  <button className="text-center rounder-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Project link
                  </button>
                </a>
                
              </div>
            </div>
          </div>

          

          
        </div>
      </div>
    </div>
  );
};

export default Work;
