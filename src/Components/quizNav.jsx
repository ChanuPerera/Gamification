import { useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';


const QuizNav = () =>{

    return(


        <div className="md:w-[300px] h-screen fixed  top-0 z-40 ">
                <div className="nav-body p-5 relative w-full  h-[80vh] mt-[192px] flex flex-col overflow-y-scroll space-y-7 " id="style-6" >


                        <div className="content-wrapper flex flex-row justify-between items-center w-full ">
                            <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-sky-500 ">
                                <span className="quize-no text-white font-semibold">01</span>
                            </div>
                            <div className="text-white justify-start items-center text-left w-2/3">
                                    <h5 className="lecture-no text-[#7AB2FF] opacity-50 sm:text-[0.7rem]">Lecture 01</h5>
                                    <h4 className="lecture-no text-[#7AB2FF]  sm:text-[1rem]">Introduction to programming</h4>
                            </div>
                        </div>



                        <div className="content-wrapper flex flex-row justify-between items-center w-full">
                            <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white ">
                                <span className="quize-no text-black font-semibold">02</span>
                            </div>
                            <div className="text-white justify-start items-center text-left w-2/3">
                                    <h5 className="lecture-no text-white opacity-50 sm:text-[0.7rem]">Lecture 02</h5>
                                    <h4 className="lecture-no text-white  sm:text-[1rem]">Data Types and C Formatted Input/Output</h4>
                            </div>
                        </div>



                        <div className="content-wrapper flex flex-row justify-between items-center w-full">
                            <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white ">
                                <span className="quize-no text-black font-semibold">03</span>
                            </div>
                            <div className="text-white justify-start items-center text-left w-2/3">
                                    <h5 className="lecture-no text-white opacity-50 sm:text-[0.7rem]">Lecture 03</h5>
                                    <h4 className="lecture-no text-white  sm:text-[1rem]">Operators in C</h4>
                            </div>
                        </div>



                        <div className="content-wrapper flex flex-row justify-between items-center w-full">
                            <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white ">
                                <span className="quize-no text-black font-semibold">04</span>
                            </div>
                            <div className="text-white justify-start items-center text-left w-2/3">
                                    <h5 className="lecture-no text-white opacity-50 sm:text-[0.7rem]">Lecture 04</h5>
                                    <h4 className="lecture-no text-white  sm:text-[1rem]">Selection Statements in C / Character Handling</h4>
                            </div>
                        </div>



                        <div className="content-wrapper flex flex-row justify-between items-center w-full">
                            <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white ">
                                <span className="quize-no text-black font-semibold">05</span>
                            </div>
                            <div className="text-white justify-start items-center text-left w-2/3">
                                    <h5 className="lecture-no text-white opacity-50 sm:text-[0.7rem]">Lecture 05</h5>
                                    <h4 className="lecture-no text-white  sm:text-[1rem]">Repetition statements in C</h4>
                            </div>
                        </div>



                        <div className="content-wrapper flex flex-row justify-between items-center w-full">
                            <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white ">
                                <span className="quize-no text-black font-semibold">06</span>
                            </div>
                            <div className="text-white justify-start items-center text-left w-2/3">
                                    <h5 className="lecture-no text-white opacity-50 sm:text-[0.7rem]">Lecture 06</h5>
                                    <h4 className="lecture-no text-white  sm:text-[1rem]">Functions</h4>
                            </div>
                        </div>


                        <div className="content-wrapper flex flex-row justify-between items-center w-full">
                            <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white ">
                                <span className="quize-no text-black font-semibold">07</span>
                            </div>
                            <div className="text-white justify-start items-center text-left w-2/3">
                                    <h5 className="lecture-no text-white opacity-50 sm:text-[0.7rem]">Lecture 07</h5>
                                    <h4 className="lecture-no text-white  sm:text-[1rem]">Arrays</h4>
                            </div>
                        </div>


                        <div className="content-wrapper flex flex-row justify-between items-center w-full">
                            <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white ">
                                <span className="quize-no text-black font-semibold">08</span>
                            </div>
                            <div className="text-white justify-start items-center text-left w-2/3">
                                    <h5 className="lecture-no text-white opacity-50 sm:text-[0.7rem]">Lecture 08</h5>
                                    <h4 className="lecture-no text-white  sm:text-[1rem]">Arrays</h4>
                            </div>
                        </div>

                        
                       
                </div>
        </div>
    );
}


export default QuizNav;