import { useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';
import PlayerDashNav from "../Components/playerDashNav";
import player from '../Assets/Images/Illustration-player.png';
import Mon from '../Assets/Images/M.png';
import Tue from '../Assets/Images/T.png';

const PlayerDashboard = () => {




    return (

        <div className="w-full h-screen bg-[#0E063D] overflow-hidden relative">

            <div className="nav-wrapper w-full fixed flex flex-col top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-opacity-40 border-white backdrop-blur-sm z-50">


                <div className="top-row w-full">
                    <div className="nav-body p-3 flex flex-row justify-between items-center w-full" >

                        <Link to="/">
                            <span className="text-[2rem] text-white ml-10 cursor-pointer"><FontAwesomeIcon icon={faChevronLeft} /></span>
                        </Link>
                        <div className="logo sm:w-[10%] lg:w-[20%] h-auto justify-center items-center text-center mx-auto">
                            <img src={logo} alt="" srcset="" className="sm:w-[180px] h-full object-fill justify-center w-[100px]" />
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="w-full h-screen bg-[#0E063D] mt-5  flex flex-row">

            <div className="dash-container w-full  p-5 z-30 flex sm:flex-row mt-[110px] mb-[44px] relative flex-col">
                    <PlayerDashNav/>

                    <div className="w-fullflex flex-row w-full h-full relative">
                        <div className="flex flex-col p-5 space-y-5 sm:w-1/2 h-full w-full relative">
                            <div className="profile-log w-full bg-white rounded-lg p-5 sm:h-[168px] flex lg:flex-row flex-col justify-between items-center relative space-y-3 lg:space-y-0">
                                    <div className="lg:w-1/4 w-full relative h-full flex flex-col justify-center items-left">
                                        <h3 className="text-left md:text-[1.5rem] text-[1.2rem]">
                                                Hello Hiran!
                                        </h3>
                                        <p>It is good to see you again</p>
                                    </div>


                                    <div className="lg:w-3/4 h-full flex justify-center items-center flex-row w-full relative">
                                        
                                       <ul className="flex flex-row justify-between w-full">
                                        <li>
                                            <div className="sm:w-[44px] sm:h-[44px] w-[24px] h-[24px] relative">
                                                        <img src={Mon} alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sm:w-[44px] sm:h-[44px]  w-[24px] h-[24px] relative">
                                                        <img src={Tue} alt=""/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sm:w-[44px] sm:h-[44px] w-[24px] h-[24px] relative rounded-full flex justify-center items-center bg-slate-400 border-[1px] border-gray-600">
                                                       <span>
                                                        W
                                                       </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sm:w-[44px] sm:h-[44px] w-[24px] h-[24px] relative rounded-full flex justify-center items-center bg-slate-400 border-[1px] border-gray-600">
                                                       <span>
                                                        T
                                                       </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sm:w-[44px] sm:h-[44px] w-[24px] h-[24px] relative rounded-full flex justify-center items-center bg-slate-400 border-[1px] border-gray-600">
                                                       <span>
                                                        F
                                                       </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sm:w-[44px] sm:h-[44px] w-[24px] h-[24px] relative rounded-full flex justify-center items-center bg-slate-400 border-[1px] border-gray-600">
                                                       <span>
                                                        S
                                                       </span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sm:w-[44px] sm:h-[44px] w-[24px] h-[24px] relative rounded-full flex justify-center items-center bg-slate-400 border-[1px] border-gray-600">
                                                       <span>
                                                        S
                                                       </span>
                                            </div>
                                        </li>
                                        
                                       </ul>
                                    </div>


                                    
                            </div>

                            <div className="profile-log w-full bg-[#331497] rounded-lg  h-full p-5 flex flex-col">
                                    <h3 className="text-white font-semibold sm:text-[1.5rem] text-left text-[1.2rem]"> Courses </h3>


                                    <div  className="flex flex-row w-full">
                                        <ul className="flex flex-row justify-between lg:w-[50%] w-full">
                                            <li className="text-white text-[12px]">Enroll Courses</li>
                                            <li className="text-white text-[12px] text-opacity-60">The Newest</li>
                                            <li className="text-white text-[12px] text-opacity-60">Top Rated</li>
                                            <li className="text-white text-[12px] text-opacity-60">Most Popular</li>

                                        </ul>
                                    </div>

                                    
                                    <div className="w-full p-3 h-auto bg-white mt-5 rounded-sm flex flex-row space-x-2">
                                            <div className="course-ico w-[32px] h-[32px] ">

                                            </div>

                                            <div className="flex flex-col text-left">
                                                <h4 className="text-[12px] font-semibold sm:text-[0.8rem] md:text-[1rem]">An Introduction to C</h4>
                                                <span className="text-[10px] sm:text-[0.6rem] md:text-[0.8rem]">by Christopher Morgan</span>
                                            </div>
                                    </div>
                            </div>

                        </div>
                    </div>
            </div>



                <img
                    src={difbg}
                    alt=""
                    srcset=""
                    className="w-full h-full object-cover absolute top-0 "
                />

            </div>



        </div>

    );



}


export default PlayerDashboard;