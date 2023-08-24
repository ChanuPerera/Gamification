import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import herobannerfront from '../Assets/Images/herobannerfront-01.png';
import gamer1 from '../Assets/Images/gamer_1.png';
import heroback from '../Assets/Images/heroBack-01.png';
import course1 from '../Assets/Images/c.png';
import lec from '../Assets/Images/lec.jpg';


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

                    <div className="course-slide-wrapper mt-5">

                        <div className="course-card sm:w-[300px] sm:h-[500px] bg-[#2A0976] bg-opacity-60 rounded-xl flex flex-col relative">
                            <div className="top-cover w-full h-[180px] bg-slate-500 rounded-t-xl">
                                <img src={course1} alt="" srcset="" className="object-cover w-[100%] h-[100%] rounded-t-xl" />
                            </div>
                            <div className="card-content p-3 w-full">
                                <div className="row-1  w-full justify-between flex flex-row">
                                    <span className="text-[0.6rem] text-white justify-start">View more</span>
                                    <span className="text-[0.6rem] text-white ">10+ Short Notes and Helpless Videos</span>


                                </div>
                                <p className="text-[1rem] text-white justify-start text-left mt-5">
                                    Exploring the Foundations: An Introduction to Programming in C Language
                                </p>
                                <div className="mt-5 w-full border-b-[1px] border-t-[1px] border-gray-50 flex flex-row justify-center items-center">
                                    <div className="lecture-profile  flex flex-row w-2/3 justify-between items-center">

                                        <div className="lec-img  rounded-full relative w-[80px] h-[80px] p-2">
                                            <img src={lec} alt="" srcset="" className="object-cover w-full h-full rounded-full" />
                                        </div>
                                        <div className="p-2 text-left ">
                                            <h5 className="text-white">Adam Nore</h5>
                                            <span className="text-gray-300 text-[0.7rem]">C Developer</span>
                                        </div>
                                    </div>
                                    <div className="student-count justify-end flex flex-row w-1/3 ">
                                        <span className="text-white text-[0.7rem]">50+ Students</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* popular course */}


        </div>
    );

}

export default LandingPage;