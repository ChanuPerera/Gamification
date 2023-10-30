import { useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';

const CreateProfile = () => {




    return (

        <div className="w-full h-screen bg-[#0E063D] overflow-hidden ">

            <div className="nav-wrapper w-full fixed flex flex-col top-0  items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-opacity-40 border-white backdrop-blur-sm z-50">


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


            <div className="w-full h-screen bg-[#0E063D] mt-5 justify-center flex items-center sm:p-0 p-5">

                <div className="sm:w-[400px] sm:h-[400px] p-5 flex flex-col bg-white rounded-2xl shadow-md shadow-slate-700 z-40">

                                        <div className="w-[50px] h-[50px] flex justify-center items-center mx-auto bg-teal-500 rounded-full shadow-lg shadow-slate-500">
                                            <span className="text-white font-semibold">!</span>
                                        </div>

                                        <h4 className="text-[#151515] text-center mt-3 font-semibold">Overall Questions</h4>

                                        <p className="text-black sm:text-[0.8rem] text-center mt-3">
                                        The questions here are related to the syllabus you have studied. Answer all the questions within the given time.
                                        </p>

                                        <p className="text-black sm:text-[0.8rem] text-center mt-3">
                                         <span className="font-bold">Note:</span> This is just a test of your knowledge. Your rank, points, are not determined by the marks here.
                                        </p>

                                        <p className="text-black sm:text-[0.8rem] text-center mt-3">
                                     
                                                Contact us for more information
                                        </p>


                                    <Link to="/QuizContent" className="w-full flex">
                                            <button className="mt-5 rounded-md bg-[#4F00F1] text-white w-[50%] py-3 mx-auto">
                                            Start Questions
                                            </button>
                                    </Link>
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


export default CreateProfile;