import { useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';
import QuizNav from "../Components/quizNav";




const QuizContent = () => {

    return (


        <div className="w-full h-screen bg-[#0E063D] overflow-hidden">

            <div className="nav-wrapper w-full   fixed flex flex-col top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-opacity-40 border-white backdrop-blur-sm z-50">


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

                <div className="bottom-row w-full border-collapse border-t-[1px] border-white border-opacity-30">
                    <div className="flex flex-row full ">
                        <div className="w-1/3 flex flex-row p-5 bg-[#0E063D] bg-opacity-40 justify-center items-center space-x-10">
                            <div className="flex flex-col">
                                <h4 className="text-white" >Student Details</h4>
                                <p className="text-white opacity-50">Enter your Details</p>
                            </div>
                            <div className="text-[#28C600] sm:text-[1.7rem]"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        </div>
                        <div className="w-1/3 flex flex-row p-5 justify-center items-center space-x-10 bg-[#0E063D]] bg-opacity-40 ">
                            <div className="flex flex-col">
                                <h4 className="text-white">Overall questions of C Language</h4>
                                <p className="text-white opacity-50">Answer all the questions </p>
                            </div>
                            <div className="text-[#28C600] sm:text-[1.7rem]"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        </div>
                        <div className="w-1/3 flex flex-row p-5 justify-center items-center space-x-10 bg-[#606060] bg-opacity-40">
                            <div className="flex flex-col">
                                <h4 className="text-white">Create Profile</h4>
                                <p className="text-white opacity-50">Automatically generated</p>
                            </div>
                            {/* <div>icon</div> */}
                        </div>
                    </div>
                </div>
            </div>





            <div className="w-full h-screen bg-[#0E063D] mt-5 justify-between  flex flex-row z-40">

                <div className="w-1/6 ">
                    <QuizNav />
                </div>

                <div className="w-3/4 mx-auto overflow-y-scroll mb-10" id="style-6">
                    <div className="w-[80%] mt-[200px] mx-auto flex flex-col rounded-lg bg-[#331497] p-5 z-40 " >
                        <div className="head-row flex flex-col w-full  pb-5 border-collapse border-b-[1px] border-white border-opacity-40 z-40">
                            <h5 className="text-white font-semibold">Lecture 01</h5>
                            <h4 className="text-white font-semibold text-[2rem]">Introduction to programming</h4>
                            <p className="text-white opacity-40">
                                In this lecture coves on, Describe the evolution of programming languages and Write a simple C program
                            </p>
                        </div>



                        <div className="quiz-row flex flex-col w-full p-5 z-40 space-y-3">

                            <p className="text-white ">
                                1.Describe the key characteristics of programming and explain how it differs from other problem-solving
                                approaches. Provide examples to support your answer. ?
                            </p>

                            <textarea
                                placeholder="Answer type here..."
                                className="p-3 bg-[#10144E] resize-none text-white"
                                rows={10}
                                cols={5}
                            >

                            </textarea>
                        </div>


                        <div className="quiz-row flex flex-col w-full p-5 z-40 space-y-3">

                            <p className="text-white ">
                                1.Describe the key characteristics of programming and explain how it differs from other problem-solving
                                approaches. Provide examples to support your answer. ?
                            </p>

                            <textarea
                                placeholder="Answer type here..."
                                className="p-3 bg-[#10144E] resize-none text-white"
                                rows={10}
                                cols={5}
                            >

                            </textarea>
                        </div>


                        <Link to="/ProfileCreationLoading" className="z-30"><div className="sm:w-[220px] sm:h-[48px] rounded-full justify-center flex cursor-pointer  items-center mx-auto mt-5 bg-gradient-to-t from-[#F0B000] to-[#F029A0]">
                                        <span className="text-white font-semibold">Next</span>
                        </div></Link>


                        







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


export default QuizContent;