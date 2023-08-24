import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import herobannerfront from '../Assets/Images/herobannerfront-01.png';
import gamer1 from '../Assets/Images/gamer_1.png';
import heroback from '../Assets/Images/heroBack-01.png';
import course1 from '../Assets/Images/c.png';
import lec from '../Assets/Images/lec.jpg';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Rating, Button } from "@mui/material";
import { Carousel } from 'react-responsive-carousel';
import CourseCarousel from "../Components/courseSlider";
import smartphone from '../Assets/Images/Smartphone.png';
import qs from '../Assets/Images/Clipboard.png';
import complete from '../Assets/Images/User Check.png';
import start from '../Assets/Images/Square Academic Cap.png'
import line from '../Assets/Images/line.png';
import line2 from '../Assets/Images/line2.png';


const LandingPage = () => {

    return (
        <div className="w-full sm:h-full  flex flex-col ">

            {/* hero section */}
            <div className=" w-full sm:h-full h-screen justify-center items-center ">
                <div className="sm:w-1/3 sm:p-5 justify-center items-center text-center flex flex-col  sm:h-auto absolute left-1/2 -translate-x-1/2 sm:mt-16 md:mt-28 lg:mt-40 z-10 mt-20">
                    <h3 className="font-link font-bold lg:text-[3rem] md:text-[2rem] sm:text-[1.5rem] text-[#00FADF] uppercase">PLAY & LEARN</h3>
                    <h2 className="font-link font-bold lg:text-[5rem] md:text-[3.5rem] sm:text-[3rem] text-[#ffffff] uppercase">languages</h2>
                    <p className="text-white">Unlock Your Coding Potential: Learn Programming Languages the Fun Way!</p>

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

                <img src={herobannerfront} alt="" srcset="" className="sm:w-full sm:h-screen sm:object-cover sm:justify-center absolute hidden sm:block z-20" />
                <img src={gamer1} alt="" srcset="" className="sm:hidden absolute bottom-0 left-0 right-0" />
                <img src={heroback} alt="" srcset="" className="w-full h-full sm:object-fill sm:justify-center absolute sm:block top-0 -z-10 " />
                <div className="w-full h-screen"></div>
            </div>
            {/* hero section */}


            {/* popular course */}

            <div className="w-full h-auto bg-[#0E063D] p-10 mx-auto flex flex-col z-10">
                <div className="sm:w-[80%] w-[90%] p-5 h-full bg-gradient-to-t from-[#0E063D] to-[#31168C] rounded-2xl mx-auto -mt-20 flex flex-col text-center justify-center">
                    <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">POPULAR COURCES</h2>

                    <div className="course-slide-wrapper mt-5 mb-10">
                        <CourseCarousel />
                    </div>
                </div>
            </div>

            {/* popular course */}


            {/* How is works section */}
            <div className="w-full h-auto bg-[#0E063D] p-10 mx-auto flex flex-col z-10 text-center justify-center items-center">
                <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">HOW IT <span className="text-[#00FADF]">WORKS</span> </h2>
                <p className="text-white text-center">It’s easier than you think. Follow 4 simple easy steps</p>


                <div className="w-[80%] flex flex-row p-5 mt-[128px] sm:space-x-5 space-x-2 justify-center items-center mx-auto">

                    <div className="flex flex-col ">
                        <div className="relative justify-center text-center flex flex-col items-center">
                            <div className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-md bg-[#4609C3] justify-center items-center flex mb-3">
                                <div className="dot-info sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full flex bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white absolute justify-center items-center text-center -right-3 -top-3">
                                    <span className="text-white sm:text-[1rem] text-[0.7rem]">1</span>
                                </div>
                                <img src={smartphone} alt="" srcset="" className="sm:w-[50px] w-[20px]  justify-center" />
                            </div>

                        </div>
                        <span className="text-white sm:text-[0.8rem] lg:text-[1rem] text-[0.5rem] uppercase font-link ">signup</span>
                    </div>

                    <div className="sm:w-[100px] w-[50px]">
                        <img src={line} alt="" srcset="" className="w-full justify-center sm:block hidden" />
                    </div>

                    <div className="flex flex-col ">
                        <div className="relative justify-center text-center flex flex-col items-center">
                            <div className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-md bg-[#4609C3] justify-center items-center flex mb-3">
                                <div className="dot-info sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full flex bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white absolute justify-center items-center text-center -right-3 -top-3">
                                    <span className="text-white sm:text-[1rem] text-[0.7rem]">2</span>
                                </div>
                                <img src={qs} alt="" srcset="" className="sm:w-[50px] w-[20px]  justify-center" />
                            </div>

                        </div>
                        <span className="text-white sm:text-[0.8rem] lg:text-[1rem] text-[0.5rem] uppercase font-link ">questionaries</span>
                    </div>

                    <div className="sm:w-[100px] w-[50px]">
                        <img src={line2} alt="" srcset="" className="w-full justify-center sm:block hidden" />
                    </div>

                    <div className="flex flex-col ">
                        <div className="relative justify-center text-center flex flex-col items-center">
                            <div className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-md bg-[#4609C3] justify-center items-center flex mb-3">
                                <div className="dot-info sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full flex bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white absolute justify-center items-center text-center -right-3 -top-3">
                                    <span className="text-white sm:text-[1rem] text-[0.7rem]">3</span>
                                </div>
                                <img src={complete} alt="" srcset="" className="sm:w-[50px] w-[20px]  justify-center" />
                            </div>

                        </div>
                        <span className="text-white sm:text-[0.8rem] lg:text-[1rem] text-[0.5rem] uppercase font-link ">Complete</span>
                    </div>

                    <div className="sm:w-[100px] w-[50px]">
                        <img src={line} alt="" srcset="" className="w-full justify-center sm:block hidden" />
                    </div>

                    <div className="flex flex-col ">
                        <div className="relative justify-center text-center flex flex-col items-center">
                            <div className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-md bg-[#4609C3] justify-center items-center flex mb-3">
                                <div className="dot-info sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full flex bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white absolute justify-center items-center text-center -right-3 -top-3">
                                    <span className="text-white sm:text-[1rem] text-[0.7rem]">4</span>
                                </div>
                                <img src={start} alt="" srcset="" className="sm:w-[50px] w-[20px]  justify-center" />
                            </div>

                        </div>
                        <span className="text-white sm:text-[0.8rem] lg:text-[1rem] text-[0.5rem] uppercase font-link ">Start Learn</span>
                    </div>


                </div>
                <div className="hero-btn sm:w-[160px] p-2  rounded-full bg-gradient-to-t from-[#F0B000] to-[#F029A0] text-white font-semibold mt-[100px] text-[0.7rem] sm:text-[1rem] w-[120px]">
                    Enroll Now
                </div>

            </div>

            {/* How is works section */}

        </div>
    );

}

export default LandingPage;