import { useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';


const QuizNav = ({ activeLecture }) => {


    const lectures = [
        {
            lectureNo: "01",
            lectureName: "Introduction to programming",
        },
        {
            lectureNo: "02",
            lectureName: "Data Types and C Formatted Input/Output",
        },
        {
            lectureNo: "03",
            lectureName: "Operators in C",
        },
        {
            lectureNo: "04",
            lectureName: "Selection Statements in C / Character Handling",
        },
        {
            lectureNo: "05",
            lectureName: "Repetition statements in C",
        },
        {
            lectureNo: "06",
            lectureName: "Functions",
        },
        {
            lectureNo: "07",
            lectureName: "Arrays",
        },
        {
            lectureNo: "08",
            lectureName: "Arrays",
        },
    ];



    return (


        <div className="md:w-[300px] h-screen fixed  top-0 z-40 ">
            <div className="nav-body p-5 relative w-full  h-[80vh] mt-[192px] flex flex-col overflow-y-scroll space-y-7 " id="style-6" >


                {lectures.map((lecture, index) => (
                    <Link key={index} >
                        <div className={`content-wrapper flex flex-row justify-between items-center w-full ${activeLecture === lecture.lectureNo ? "bg-blue-500" : ""}`}>
                            <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white">
                                <span className={`quize-no font-semibold ${activeLecture === lecture.lectureNo ? "text-white" : "text-black"}`}>
                                    {lecture.lectureNo}
                                </span>
                            </div>
                            <div className="text-white justify-start items-center text-left w-2/3">
                                <h5 className={`lecture-no opacity-50 sm:text-[0.7rem] ${activeLecture === lecture.lectureNo ? "text-white" : "text-[#7AB2FF]"}`}>
                                    Lecture {lecture.lectureNo}
                                </h5>
                                <h4 className={`lecture-no sm:text-[1rem] ${activeLecture === lecture.lectureNo ? "text-white" : ""}`}>
                                    {lecture.lectureName}
                                </h4>
                            </div>
                        </div>
                    </Link>
                ))}




            </div>
        </div>
    );
}


export default QuizNav;