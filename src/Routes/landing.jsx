import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import herobannerfront from "../Assets/Images/herobannerfront-01.png";
import gamer1 from "../Assets/Images/gamer_1.png";
import heroback from "../Assets/Images/heroBack-01.png";
import course1 from "../Assets/Images/c.png";
import lec from "../Assets/Images/lec.jpg";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Rating, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import CourseCarousel from "../Components/courseSlider";
import smartphone from "../Assets/Images/Smartphone.png";
import qs from "../Assets/Images/Clipboard.png";
import complete from "../Assets/Images/User Check.png";
import start from "../Assets/Images/Square Academic Cap.png";
import line from "../Assets/Images/line.png";
import line2 from "../Assets/Images/line2.png";
import howit from "../Assets/Images/hiwbg.png";
import circle from "../Assets/Images/circle.png";
import pethz from "../Assets/Images/pethz.png";
import giftico from "../Assets/Images/giftIcon.png";
import powbg from '../Assets/Images/powbg.png';
import cr1 from '../Assets/Images/Ellipse 517.png';
import cr2 from '../Assets/Images/Ellipse 518.png';
import cr3 from '../Assets/Images/Ellipse 519.png';
import cr4 from '../Assets/Images/Ellipse 520.png';
import cr5 from '../Assets/Images/Ellipse 521.png';
import cr6 from '../Assets/Images/Ellipse 522.png';
import orbg from '../Assets/Images/orbg.png';
import ReviewSlider from "../Components/reviewsSlider";



const LandingPage = () => {
  return (
    <div className="w-full sm:h-full  flex flex-col ">



      {/* hero section */}
      <div className=" w-full sm:h-full h-screen justify-center items-center ">
        <div className="sm:w-1/3 sm:p-5 justify-center items-center text-center flex flex-col  sm:h-auto absolute left-1/2 -translate-x-1/2 sm:mt-16 md:mt-28 lg:mt-40 z-10 mt-20">
          <h3 className="font-link font-bold lg:text-[3rem] md:text-[2rem] sm:text-[1.5rem] text-[#00FADF] uppercase">
            PLAY & LEARN
          </h3>
          <h2 className="font-link font-bold lg:text-[5rem] md:text-[3.5rem] sm:text-[3rem] text-[#ffffff] uppercase">
            languages
          </h2>
          <p className="text-white">
            Unlock Your Coding Potential: Learn Programming Languages the Fun
            Way!
          </p>

          <div className="online-players p-2 flex flex-row w-[50%] justify-center">
            <div className="sm:p-5 rounded-full bg-slate-600"></div>
            <div className="sm:p-5 rounded-full bg-slate-600"></div>
            <div className="sm:p-5 rounded-full bg-slate-600"></div>
            <div className="sm:p-5 rounded-full bg-slate-600"></div>
          </div>
          <span className="text-white">100+ students online</span>
          <div className="hero-btn lg:w-[180px] p-2  rounded-full mt-2 bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white font-semibold">
            Enroll Now
          </div>
        </div>

        <img
          src={herobannerfront}
          alt=""
          srcset=""
          className="sm:w-full sm:h-screen sm:object-cover sm:justify-center absolute hidden sm:block z-20"
        />
        <img
          src={gamer1}
          alt=""
          srcset=""
          className="sm:hidden absolute bottom-0 left-0 right-0"
        />
        <img
          src={heroback}
          alt=""
          srcset=""
          className="w-full h-full sm:object-fill sm:justify-center absolute sm:block top-0 -z-10 "
        />
        <div className="w-full h-screen"></div>
      </div>
      {/* hero section */}




      {/* popular course */}

      <div className="w-full h-auto bg-[#0E063D] p-10 mx-auto flex flex-col z-10">
        <div className="sm:w-[80%] w-[90%] p-5 h-full bg-gradient-to-t from-[#0E063D] to-[#31168C] rounded-2xl mx-auto -mt-20 flex flex-col text-center justify-center">
          <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">
            POPULAR COURCES
          </h2>

          <div className="course-slide-wrapper mt-5 mb-10">
            <CourseCarousel />
          </div>
        </div>
      </div>

      {/* popular course */}





      {/* How is works section */}
      <div className="w-full h-auto bg-[#0E063D] p-10 mx-auto flex flex-col z-10 text-center justify-center items-center relative">
        <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">
          HOW IT <span className="text-[#00FADF]">WORKS</span>{" "}
        </h2>
        <p className="text-white text-center">
          It’s easier than you think. Follow 4 simple easy steps
        </p>

        <div className="w-[80%] flex flex-row p-5 mt-[128px] sm:space-x-5 space-x-2 justify-center items-center mx-auto">
          <div className="flex flex-col ">
            <div className="relative justify-center text-center flex flex-col items-center">
              <div className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-md bg-[#4609C3] justify-center items-center flex mb-3">
                <div className="dot-info sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full flex bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white absolute justify-center items-center text-center -right-3 -top-3">
                  <span className="text-white sm:text-[1rem] text-[0.7rem]">
                    1
                  </span>
                </div>
                <img
                  src={smartphone}
                  alt=""
                  srcset=""
                  className="sm:w-[50px] w-[20px]  justify-center"
                />
              </div>
            </div>
            <span className="text-white sm:text-[0.8rem] lg:text-[1rem] text-[0.5rem] uppercase font-link ">
              signup
            </span>
          </div>

          <div className="sm:w-[100px] w-[50px]">
            <img
              src={line}
              alt=""
              srcset=""
              className="w-full justify-center sm:block hidden"
            />
          </div>

          <div className="flex flex-col ">
            <div className="relative justify-center text-center flex flex-col items-center">
              <div className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-md bg-[#4609C3] justify-center items-center flex mb-3">
                <div className="dot-info sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full flex bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white absolute justify-center items-center text-center -right-3 -top-3">
                  <span className="text-white sm:text-[1rem] text-[0.7rem]">
                    2
                  </span>
                </div>
                <img
                  src={qs}
                  alt=""
                  srcset=""
                  className="sm:w-[50px] w-[20px]  justify-center"
                />
              </div>
            </div>
            <span className="text-white sm:text-[0.8rem] lg:text-[1rem] text-[0.5rem] uppercase font-link ">
              questionaries
            </span>
          </div>

          <div className="sm:w-[100px] w-[50px]">
            <img
              src={line2}
              alt=""
              srcset=""
              className="w-full justify-center sm:block hidden"
            />
          </div>

          <div className="flex flex-col ">
            <div className="relative justify-center text-center flex flex-col items-center">
              <div className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-md bg-[#4609C3] justify-center items-center flex mb-3">
                <div className="dot-info sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full flex bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white absolute justify-center items-center text-center -right-3 -top-3">
                  <span className="text-white sm:text-[1rem] text-[0.7rem]">
                    3
                  </span>
                </div>
                <img
                  src={complete}
                  alt=""
                  srcset=""
                  className="sm:w-[50px] w-[20px]  justify-center"
                />
              </div>
            </div>
            <span className="text-white sm:text-[0.8rem] lg:text-[1rem] text-[0.5rem] uppercase font-link ">
              Complete
            </span>
          </div>

          <div className="sm:w-[100px] w-[50px]">
            <img
              src={line}
              alt=""
              srcset=""
              className="w-full justify-center sm:block hidden"
            />
          </div>

          <div className="flex flex-col ">
            <div className="relative justify-center text-center flex flex-col items-center">
              <div className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-md bg-[#4609C3] justify-center items-center flex mb-3">
                <div className="dot-info sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full flex bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white absolute justify-center items-center text-center -right-3 -top-3">
                  <span className="text-white sm:text-[1rem] text-[0.7rem]">
                    4
                  </span>
                </div>
                <img
                  src={start}
                  alt=""
                  srcset=""
                  className="sm:w-[50px] w-[20px]  justify-center"
                />
              </div>
            </div>
            <span className="text-white sm:text-[0.8rem] lg:text-[1rem] text-[0.5rem] uppercase font-link ">
              Start Learn
            </span>
          </div>
        </div>
        <div className="hero-btn sm:w-[160px] p-2  rounded-full bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white font-semibold mt-[100px] text-[0.7rem] sm:text-[1rem] w-[120px] mb-20">
          Enroll Now
        </div>
        <img
          src={howit}
          alt=""
          srcset=""
          className="w-full h-full object-cover absolute -z-10 "
        />

      </div>

      {/* How is works section */}




      {/* playerys of the week section */}

      <div className="w-full h-auto bg-[#0E063D] p-10 mx-auto flex flex-col z-10 text-center justify-center items-center relative">
        <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">
          <span className="text-[#00FADF]">playerys </span>of the week{" "}
        </h2>
        <p className="text-white text-center">
          We take a look at the best students of the week awarded
        </p>
        <p className="text-white text-center">
          on Monday for the previous Monday to Sunday
        </p>

        <div className="sm:w-[80%] w-[90%] flex sm:flex-row flex-col p-5 sm:mt-[90px] sm:space-x-5 space-x-2 justify-center items-center mx-auto ">
          <div className="player-card-outter bg-gradient-to-t from-[#6148FF] to-[#EDB8FF] p-[1px] rounded-2xl sm:mt-20 w-full lg:w-[300px] mt-5 mb-5">
            <div className="player-card flex flex-col sm:w-[256px] md:w-[256px] lg:w-[298px] sm:h-[400px]  h-[400px] rounded-2xl items-center justify-center bg-[#0E063D] w-full ">
              <div className="player-image-box sm:w-[200px] sm:h-[200px] relative justify-center items-center flex flex-col">
                <img
                  src={circle}
                  alt=""
                  srcset=""
                  className="w-full h-full object-cover  z-10 "
                />
                <div className="player-profile-imgbox sm:w-[80px] sm:h-[80px]  absolute rounded-full ">
                  <img
                    src={pethz}
                    alt=""
                    srcset=""
                    className="w-full h-full object-cover  z-20"
                  />
                </div>
                <div className="hex w-[50px] h-[50px] bg-gradient-to-l from-[#F0B000] to-[#F029A0] absolute mt-20 z-20 leading-[50px] ">
                  <span className="font-semibold text-white">02</span>
                </div>
              </div>
              <div className="pc-info flex flex-col p-2 mt-3  text-center items-center">
                <span className="font-likn text-white font-semibold uppercase sm:text-[1.2rem]">
                  Peth-Z
                </span>
                <div className="flex flex-row justify-between mt-2 space-x-2">
                  <span className="font-likn text-[#64BE56] font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    1970 XP Earned
                  </span>
                  <span className="font-likn text-white font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    04/05 - 04/12
                  </span>
                </div>
                <div className="flex flex-row justify-between mt-2 space-x-2">
                  <span className="font-likn text-[#64BE56] font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    {" "}
                    <img
                      src={giftico}
                      alt=""
                      srcset=""
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="font-likn text-[#00FADF] font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    +20 credits
                  </span>
                </div>
              </div>
              <div className="hero-btn sm:w-[140px] p-2 sm:py-3 rounded-full bg-gradient-to-l from-[#F0B000] to-[#F029A0] text-white font-semibold  text-[0.7rem] sm:text-[0.8rem] w-[120px] sm:mt-5 uppercase">
                view profile
              </div>
            </div>
          </div>

          <div className="player-card-outter bg-gradient-to-t from-[#6148FF] to-[#EDB8FF] p-[1px] rounded-2xl sm:mt-5 w-full lg:w-[300px] mt-5 mb-5">
            <div className="player-card flex flex-col sm:w-[256px] md:w-[256px] lg:w-[298px] sm:h-[400px]  h-[400px] rounded-2xl items-center justify-center bg-[#0E063D] w-full relative">
              <div className="player-image-box sm:w-[200px] sm:h-[200px] relative justify-center items-center flex flex-col">
                <img
                  src={circle}
                  alt=""
                  srcset=""
                  className="w-full h-full object-cover  z-10 "
                />
                <div className="player-profile-imgbox sm:w-[80px] sm:h-[80px]  absolute rounded-full ">
                  <img
                    src={pethz}
                    alt=""
                    srcset=""
                    className="w-full h-full object-cover  z-20"
                  />
                </div>
                <div className="hex w-[50px] h-[50px] bg-gradient-to-l from-[#F0B000] to-[#F029A0] absolute mt-20 z-20 leading-[50px] ">
                  <span className="font-semibold text-white">02</span>
                </div>
              </div>
              <div className="pc-info flex flex-col p-2 mt-3  text-center items-center">
                <span className="font-likn text-white font-semibold uppercase sm:text-[1.2rem]">
                  Peth-Z
                </span>
                <div className="flex flex-row justify-between mt-2 space-x-2">
                  <span className="font-likn text-[#64BE56] font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    1970 XP Earned
                  </span>
                  <span className="font-likn text-white font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    04/05 - 04/12
                  </span>
                </div>
                <div className="flex flex-row justify-between mt-2 space-x-2">
                  <span className="font-likn text-[#64BE56] font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    {" "}
                    <img
                      src={giftico}
                      alt=""
                      srcset=""
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="font-likn text-[#00FADF] font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    +20 credits
                  </span>
                </div>
              </div>
              <div className="rank-ico w-[30px] h-[90px] sm:w-[50px] sm:h-[100px] bg-[#E546BB] absolute top-0 right-5 z-20"></div>
              <div className="hero-btn sm:w-[140px] p-2 sm:py-3 rounded-full bg-gradient-to-l from-[#F0B000] to-[#F029A0] text-white font-semibold  text-[0.7rem] sm:text-[0.8rem] w-[120px] sm:mt-5 uppercase">
                view profile
              </div>
            </div>
          </div>

          <div className="player-card-outter bg-gradient-to-t from-[#6148FF] to-[#EDB8FF] p-[1px] rounded-2xl sm:mt-20 w-full lg:w-[300px] mt-5 mb-5">
            <div className="player-card flex flex-col sm:w-[256px] md:w-[256px] lg:w-[298px] sm:h-[400px]  h-[400px] rounded-2xl items-center justify-center bg-[#0E063D] w-full ">
              <div className="player-image-box sm:w-[200px] sm:h-[200px] relative justify-center items-center flex flex-col">
                <img
                  src={circle}
                  alt=""
                  srcset=""
                  className="w-full h-full object-cover  z-10 "
                />
                <div className="player-profile-imgbox sm:w-[80px] sm:h-[80px]  absolute rounded-full ">
                  <img
                    src={pethz}
                    alt=""
                    srcset=""
                    className="w-full h-full object-cover  z-20"
                  />
                </div>
                <div className="hex w-[50px] h-[50px] bg-gradient-to-l from-[#F0B000] to-[#F029A0] absolute mt-20 z-20 leading-[50px] ">
                  <span className="font-semibold text-white">02</span>
                </div>
              </div>
              <div className="pc-info flex flex-col p-2 mt-3  text-center items-center">
                <span className="font-likn text-white font-semibold uppercase sm:text-[1.2rem]">
                  Peth-Z
                </span>
                <div className="flex flex-row justify-between mt-2 space-x-2">
                  <span className="font-likn text-[#64BE56] font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    1970 XP Earned
                  </span>
                  <span className="font-likn text-white font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    04/05 - 04/12
                  </span>
                </div>
                <div className="flex flex-row justify-between mt-2 space-x-2">
                  <span className="font-likn text-[#64BE56] font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    {" "}
                    <img
                      src={giftico}
                      alt=""
                      srcset=""
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="font-likn text-[#00FADF] font-semibold uppercase sm:text-[0.7rem] text-[0.5rem]">
                    +20 credits
                  </span>
                </div>
              </div>
              <div className="hero-btn sm:w-[140px] p-2 sm:py-3 rounded-full bg-gradient-to-l from-[#F0B000] to-[#F029A0] text-white font-semibold  text-[0.7rem] sm:text-[0.8rem] w-[120px] sm:mt-5 uppercase">
                view profile
              </div>
            </div>
          </div>
        </div>
        <img
          src={powbg}
          alt=""
          srcset=""
          className="w-full h-full object-cover absolute -z-10 "
        />
      </div>

      {/* playerys of the week section */}
























      {/* our students review */}
      <div className="w-full h-auto bg-[#0E063D] p-10 mx-auto flex flex-col z-10 text-center justify-center items-center relative">
        <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">
          our students <span className="text-[#00FADF]">reviews</span>{" "}
        </h2>
        <p className="text-white text-center">
          the biggest esports tournaments anytime, anywhere
        </p>

        <div className="cuttomer-review-outer w-[70%] sm:w-[50%] rounded-2xl p-[1px] bg-gradient-to-t from-[#6148FF] to-[#EDB8FF] absolute">
          <div className="player-card flex flex-col sm:h-[300px] h-[300px] rounded-2xl items-center justify-center bg-[#0E063D] w-full relative ">
            <div className="w-[80%] ">

              <ReviewSlider />
            </div>

          </div>
        </div>






        <div className=" w-[80%] sm:w-full h-[60vh]  flex-row mt-[80px] relative flex">
          <img
            src={cr1}
            alt=""
            srcset=""
            className=" absolute sm:block hidden -z-10 bottom-2 left-20 sm:w-[80px]"
          />
          <img
            src={cr2}
            alt=""
            srcset=""
            className="  absolute sm:block hidden -z-10 left-0 top-1/3 sm:w-[140px]"
          />
          <img
            src={cr3}
            alt=""
            srcset=""
            className="  absolute  sm:block hidden -z-10  left-20 sm:w-[60px]"
          />
          <img
            src={cr4}
            alt=""
            srcset=""
            className="  absolute sm:block hidden -z-10 right-0 sm:w-[120px]"
          />
          <img
            src={cr5}
            alt=""
            srcset=""
            className="  absolute sm:block hidden -z-10 top-1/2 right-0 sm:w-[100px]"
          />
          <img
            src={cr6}
            alt=""
            srcset=""
            className="  absolute sm:block hidden -z-10 bottom-10 right-20"
          />
        </div>


        <img
          src={orbg}
          alt=""
          srcset=""
          className="w-full h-full object-cover  absolute -z-10 "
        />



      </div>


      {/* our students review */}














    </div>
  );
};

export default LandingPage;
