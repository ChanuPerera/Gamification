/* eslint-disable jsx-a11y/heading-has-content */
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
import Gamepad from '../Assets/Images/Gamepad.png';
import userheart from '../Assets/Images/User Heart.png';
import chatbot from '../Assets/Images/Chat Dots.png';
import Clock from '../Assets/Images/Clock Circle.png';
import shield from '../Assets/Images/Shield Check.png';
import cup from '../Assets/Images/Cup.png';
import difbg from '../Assets/Images/differncebg-01.png';
import assignment from '../Assets/Images/assignment.png';
import win from '../Assets/Images/win.png';
import gamecontroller from '../Assets/Images/gamecontroller.png';
import rankbadge from '../Assets/Images/rankbadge.png';
import rb1 from '../Assets/Images/rb1.png';
import rb2 from '../Assets/Images/rb2.png';
import rb3 from '../Assets/Images/rb3.png';
import rb4 from '../Assets/Images/rb4.png';
import rb5 from '../Assets/Images/rb5.png';
import rb6 from '../Assets/Images/rb6.png';
import gprofile from '../Assets/Images/gamer-profile-image.png';
import gameillustration from '../Assets/Images/gaming illustration.png';
import circle3 from '../Assets/Images/circle3.png';
import mailico from '../Assets/Images/mailico.png';
import footerbg from '../Assets/Images/footerimg.png';
import { Link } from "react-router-dom";
import ChatBot from "../Components/chatbot";



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
          <Link to="/Enroll"><div className="hero-btn lg:w-[180px] p-2  rounded-full mt-2 bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white font-semibold z-30 cursor-pointer">
            Enroll Now
          </div></Link>
        </div>

        <img
          src={herobannerfront}
          alt=""
          srcset=""
          className="sm:w-full sm:h-screen sm:object-cover sm:justify-center absolute hidden sm:block z-0"
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
        <div className="w-full h-screen">
          <ChatBot />
        </div>
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
        <p className="text-white text-center opacity-60">
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
        <p className="text-white text-center opacity-60">
          We take a look at the best students of the week awarded
        </p>
        <p className="text-white text-center opacity-60">
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
      <div className="w-full h-auto bg-[#0E063D] p-10 mx-auto flex flex-col z-10 text-center justify-center items-center relative sm:mt-[128px]">
        <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">
          our students <span className="text-[#00FADF]">reviews</span>{" "}
        </h2>
        <p className="text-white text-center opacity-60">
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










      {/* our Difference */}
      <div className="w-full h-auto bg-[#0E063D] p-10 mx-auto flex flex-col z-10 text-center justify-center items-center relative sm:mt-[128px] sm:mb-[80px]">
        <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">
          What is our <span className="text-[#00FADF]">difference</span>{" "}
        </h2>
        <p className="text-white text-center opacity-60">
          the biggest esports tournaments anytime, anywhere
        </p>



        <div className="sm:w-[80%] h-auto flex sm:flex-row flex-col mt-5">

          <div className="def-card sm:w-1/3 md:1/3 lg:w-1/3 p-3 text-center mt-[120px] items-center flex flex-col">
            <div className="outer-circle w-[128px] h-[128px] bg-[#4609C3] rounded-full justify-center items-center bg-opacity-40 flex">
              <div className="inner-circle w-[118px] h-[118px] bg-[#4609C3] rounded-full justify-center items-center flex">
                <img
                  src={Gamepad}
                  alt=""
                  srcset=""
                  className="object-center sm:w-[80px] sm:h-[80px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full text-center mt-3">
              <h4 className="font-link text-white text-center sm:text-[1.5rem] uppercase">Gamification learn</h4>
              <p className="text-gray-300 text-center sm:text-[12px]">Motivate and engage individuals to achieve specific goals.</p>
            </div>
          </div>


          <div className="def-card sm:w-1/3 md:1/3 lg:w-1/3 p-3 text-center mt-[120px] items-center flex flex-col">
            <div className="outer-circle w-[128px] h-[128px] bg-[#4609C3] rounded-full justify-center items-center bg-opacity-40 flex">
              <div className="inner-circle w-[118px] h-[118px] bg-[#4609C3] rounded-full justify-center items-center flex">
                <img
                  src={userheart}
                  alt=""
                  srcset=""
                  className="object-center sm:w-[80px] sm:h-[80px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full text-center mt-3">
              <h4 className="font-link text-white text-center sm:text-[1.5rem] uppercase">assist personally</h4>
              <p className="text-gray-300 text-center sm:text-[12px]">Assist students effectively through the implementation of gamification learning technologies.</p>
            </div>
          </div>



          <div className="def-card sm:w-1/3 md:1/3 lg:w-1/3 p-3 text-center mt-[120px] items-center flex flex-col">
            <div className="outer-circle w-[128px] h-[128px] bg-[#4609C3] rounded-full justify-center items-center bg-opacity-40 flex">
              <div className="inner-circle w-[118px] h-[118px] bg-[#4609C3] rounded-full justify-center items-center flex">
                <img
                  src={Clock}
                  alt=""
                  srcset=""
                  className="object-center sm:w-[80px] sm:h-[80px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full text-center mt-3">
              <h4 className="font-link text-white text-center sm:text-[1.5rem] uppercase">Continuously monitor</h4>
              <p className="text-gray-300 text-center sm:text-[12px]">Motivate and engage individuals to achieve specific goals.</p>
            </div>
          </div>

        </div>






        <div className="sm:w-[80%] h-auto flex sm:flex-row mt-5 flex-col">

          <div className="def-card sm:w-1/3 md:1/3 lg:w-1/3 p-3 text-center mt-[120px] items-center flex flex-col">
            <div className="outer-circle w-[128px] h-[128px] bg-[#4609C3] rounded-full justify-center items-center bg-opacity-40 flex">
              <div className="inner-circle w-[118px] h-[118px] bg-[#4609C3] rounded-full justify-center items-center flex">
                <img
                  src={cup}
                  alt=""
                  srcset=""
                  className="object-center sm:w-[80px] sm:h-[80px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full text-center mt-3">
              <h4 className="font-link text-white text-center sm:text-[1.5rem] uppercase">Play at your Level</h4>
              <p className="text-gray-300 text-center sm:text-[12px]">With ranked divisions we help you find the right level to compete your lessons and assignments.</p>
            </div>
          </div>


          <div className="def-card sm:w-1/3 md:1/3 lg:w-1/3 p-3 text-center mt-[120px] items-center flex flex-col">
            <div className="outer-circle w-[128px] h-[128px] bg-[#4609C3] rounded-full justify-center items-center bg-opacity-40 flex">
              <div className="inner-circle w-[118px] h-[118px] bg-[#4609C3] rounded-full justify-center items-center flex">
                <img
                  src={chatbot}
                  alt=""
                  srcset=""
                  className="object-center sm:w-[80px] sm:h-[80px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full text-center mt-3">
              <h4 className="font-link text-white text-center sm:text-[1.5rem] uppercase">chatbot help</h4>
              <p className="text-gray-300 text-center sm:text-[12px]">Encourage students to work together on programming challenges and create virtual study groups.</p>
            </div>
          </div>



          <div className="def-card sm:w-1/3 md:1/3 lg:w-1/3 p-3 text-center mt-[120px] items-center flex flex-col">
            <div className="outer-circle w-[128px] h-[128px] bg-[#4609C3] rounded-full justify-center items-center bg-opacity-40 flex">
              <div className="inner-circle w-[118px] h-[118px] bg-[#4609C3] rounded-full justify-center items-center flex">
                <img
                  src={shield}
                  alt=""
                  srcset=""
                  className="object-center sm:w-[80px] sm:h-[80px]"
                />
              </div>
            </div>
            <div className="flex flex-col w-full text-center mt-3">
              <h4 className="font-link text-white text-center sm:text-[1.5rem] uppercase">Real-time detect</h4>
              <p className="text-gray-300 text-center sm:text-[12px]">Real-time detect and flag malicious injections of user end</p>
            </div>
          </div>

        </div>

        <img
          src={difbg}
          alt=""
          srcset=""
          className="w-full h-full object-cover absolute -z-10 "
        />




      </div>
      {/* our Difference */}











      {/* Build your Profile */}

      <div className="w-full h-[80vh] bg-[#0E063D]  mx-auto flex sm:flex-row flex-col z-10 text-center justify-between items-center relative sm:mt-[128px] sm:mb-[80px] mt-[128px]">

        <div className="sm:w-1/2 flex flex-col sm:text-left sm:p-[50px]  text-center p-5 w-full ">
          <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase sm:text-left ">
            Build Your<br />
            learning <span className="text-[#00FADF]">Profile</span>
          </h2>
          <p className="text-white sm:text-left text-center opacity-60">
            Showcase your achievements, learning history and win rate while you build your reputation on CodeQuest.
          </p>

          <div className="sm:w-[120px] text-center flex justify-center items-center border-[1px] rounded-full py-3 border-[#EDB8FF] bag-[#0E063D] sm:mt-5 mt-[20px]">
            <span className="text-white sm:text-[0.8rem] lg:text-[1rem] text-[12px] capitalize">Sign up free</span>
          </div>

        </div>





        <div className="sm:w-1/2 w-full content-wrapper justify-center sm:p-[50px] mt-[128px] sm:mt-0">

          <div className="content-form w-2/3 h-[400px] bg-[#4609C3] rounded-2xl relative flex flex-col mx-auto">



            <div className="w-[80%] h-[180px] justify-between items-center absolute left-1/2 -translate-x-1/2 border-collapse border-b-[1px] border-white border-opacity-20 flex flex-row">
              <div className="w-1/2 flex flex-col relative">
                <div className="gamer-profile-img sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px]  rounded-md absolute -top-[100px]">
                  <img src={gprofile} alt="" srcset="" className="object-cover w-full h-full rounded-md" />
                </div>
                <h4 className="font-link text-white text-left sm:text-[1rem] uppercase lg:mt-3">Aldo Boudreau</h4>
                <p className="text-white text-left text-opacity-40">
                  Student
                </p>

              </div>

              <div className="flex flex-wrap  justify-center space-x-2">
                <div className="sm:w-[40px] sm:h-[40px] lg:w-[80px] lg:h-[80px] relative w-[30px] h-[30px]">
                  <img src={rb1} alt="" srcset="" className="" />
                </div>

                <div className="sm:w-[40px] sm:h-[40px] lg:w-[80px] lg:h-[80px] relative w-[30px] h-[30px]">
                  <img src={rb2} alt="" srcset="" className="" />
                </div>

                <div className="sm:w-[40px] sm:h-[40px] lg:w-[80px] lg:h-[80px] relative w-[30px] h-[30px] ">
                  <img src={rb3} alt="" srcset="" className="" />
                </div>

                <div className="sm:w-[40px] sm:h-[40px] lg:w-[80px] lg:h-[80px] relative w-[30px] h-[30px]">
                  <img src={rb4} alt="" srcset="" className="" />
                </div>

                <div className="sm:w-[40px] sm:h-[40px] lg:w-[80px] lg:h-[80px] relative w-[30px] h-[30px]">
                  <img src={rb5} alt="" srcset="" className="" />
                </div>

                <div className="sm:w-[40px] sm:h-[40px] lg:w-[80px] lg:h-[80px] relative w-[30px] h-[30px]">
                  <img src={rb6} alt="" srcset="" className="" />
                </div>
              </div>
            </div>


            <div className="mt-[200px] flex flex-col w-[80%] mx-auto">
              <table >
                <tr>
                  <td className="py-2 sm:w-2/3 text-white text-left flex flex-row ">
                    <img src={assignment} alt="" srcset="" className="mr-2" /> Assignments
                  </td>
                  <td className="w-full text-white text-right">313</td>
                </tr>


                <tr>
                  <td className="py-2 sm:w-2/3 text-white text-left flex flex-row ">
                    <img src={win} alt="" srcset="" className="mr-2" />Win
                  </td>
                  <td className="w-full text-white text-right">13</td>
                </tr>


                <tr>
                  <td className="py-2 w-full  flex flex-row justify-center items-center">
                    <img src={gamecontroller} alt="" srcset="" className="mr-2" /><div className="w-full h-[4px] bg-white bg-opacity-20"></div>
                  </td>
                </tr>


                <tr>
                  <td className="py-2 w-full  flex flex-row justify-center items-center ">
                    <img src={rankbadge} alt="" srcset="" className="mr-2" /><div className="w-full h-[4px] bg-white bg-opacity-20"></div>
                  </td>
                </tr>


              </table>
            </div>



          </div>




        </div>
        <img
          src={gameillustration}
          alt=""
          srcset=""
          className="w-full h-full object-cover absolute -z-10 opacity-20"
        />


      </div>

      {/* Build your Profile */}














      {/* footer */}

      <div className="w-full sm:h-[30vh] bg-[#0E063D]  mx-auto flex sm:flex-row flex-col z-10 text-center justify-between items-center relative  sm:mb-[80px] mt-[426px]">

        <div className="footer-body p-5 sm:w-[80%] sm:h-[60vh]  mx-auto justify-center items-center  flex flex-col ">


          <div className="newsletter flex justify-center flex-col sm:h-[60vh] h-[40vh] text-center  w-full rounded-2xl relative sm:-mt-[128px] -mt-[128px]">
            <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">
              subscribe to our <br />newsletter
            </h2>
            <p className="text-white text-center opacity-40">
              Receive news, stay updated and special offers
            </p>

            <div className="mt-5 sm:w-[50%] mx-auto sm:h-[60px] h-[44px] bg-[#142A8D] flex flex-row border-[1px] rounded-full  border-[#EDB8FF]  items-center relative">
                <input type="text" name="name" className="sm:w-2/4 lg:w-3/5 w-2/5 ml-[10px]  bg-transparent outline-none text-white" placeholder="Your Email address"/>
                <div className="rounded-full justify-center items-center sm:right-[5px] right-[3px] flex absolute bg-gradient-to-t from-[#F0B000] to-[#F029A0] sm:h-[50px] sm:w-1/3 ld:w-1/5 h-[36px] w-1/3">
                  <span className="text-white upper sm:text-[1rem] text-[10px] lg:text-[1rem] font-semibold  uppercase"> subscribe</span>
                </div>
            </div>
            <img
              src={circle3}
              alt=""
              srcset=""
              className="w-full h-full object-cover absolute -z-10 rounded-2xl"
            />

            <img
              src={mailico}
              alt=""
              srcset=""
              className=" absolute -z-10 rounded-2xl left-0 w-1/3"
            />

            <img
              src={mailico}
              alt=""
              srcset=""
              className=" absolute -z-10 rounded-2xl right-0 transform -scale-x-100 w-1/3"
            />
          </div>

          <div className="footer-content w-full h-full flex flex-row justify-between">

          <div className="mt-10 flex sm:flex-row flex-col w-full justify-between text-left ">
              
              <div className="footer-link text-left sm:mb-0 mb-5">
                  <h5 className="font-link uppercase sm:text-[1rem] text-white font-semibold mb-3">About Us</h5>
                  <ul className="leading-8">
                    <li className="text-white opacity-60 capitalize">
                      About us
                    </li>
                    <li className="text-white opacity-60 capitalize">
                      contact us
                    </li >
                    <li className="text-white opacity-60 capitalize">
                      latest blog
                    </li>
                  </ul>
              </div>


              <div className="footer-link text-left sm:mb-0 mb-5">
                  <h5 className="font-link uppercase sm:text-[1rem] text-white font-semibold mb-3">My account</h5>
                  <ul className="leading-8 text-left">
                    <li className="text-white opacity-60 capitalize">
                      manage your account
                    </li>
                    
                  </ul>
              </div>


              <div className="footer-link text-left sm:mb-0 mb-5">
                  <h5 className="font-link uppercase sm:text-[1rem] text-white font-semibold mb-3">help center</h5>
                  <ul className="leading-8 text-left">
                    <li className="text-white opacity-60 capitalize">
                      help center
                    </li>
                    <li className="text-white opacity-60 uppercase">
                      faq
                    </li >
                    <li className="text-white opacity-60 capitalize">
                      quick start guide
                    </li>
                    <li className="text-white opacity-60 capitalize">
                      tutorials
                    </li>
                  </ul>
              </div>



              <div className="footer-link text-left sm:mb-0 mb-5">
                  <h5 className="font-link uppercase sm:text-[1rem] text-white font-semibold mb-3">legal info</h5>
                  <ul className="leading-8">
                    <li className="text-white opacity-60 capitalize">
                      risk warnings
                    </li>
                    <li className="text-white opacity-60 capitalize">
                      privacy notice
                    </li >
                    <li className="text-white opacity-60 capitalize">
                      terms of service
                    </li>
                    <li className="text-white opacity-60 capitalize">
                     become affiliate
                    </li>
                  </ul>
              </div>


          </div>


             
          </div>  

          <div className="w-full sm:h-[5px] border-collapse border-t-[1px] border-opacity-30 border-white ">

          </div>


          <div className="w-full sm:h-[56px] mt-[20px] ">
              <span className="text-white opacity-60">Copyright @ 2023. All Right Reserved By CodeQuest</span>
          </div>

        </div>


       
       

        <img
              src={footerbg}
              alt=""
              srcset=""
              className="w-full h-full sm:h-[50vh] object-cover absolute -z-10 "
            />


      </div>





      {/* footer */}




    </div>
  );
};

export default LandingPage;
