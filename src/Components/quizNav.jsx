import { useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';


const QuizNav = () =>{


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



    return(


        <div className="md:w-[300px] h-screen fixed  top-0 z-40 ">
                <div className="nav-body p-5 relative w-full  h-[80vh] mt-[192px] flex flex-col overflow-y-scroll space-y-7 " id="style-6" >


                        {lectures.map((lecture, index) => (
        <div
          key={index}
          className="content-wrapper flex flex-row justify-between items-center w-full"
        >
          <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white">
            <span className="quize-no text-black font-semibold">
              {lecture.lectureNo}
            </span>
          </div>
          <div className="text-white justify-start items-center text-left w-2/3">
            <h5 className="lecture-no text-white opacity-50 sm:text-[0.7rem]">
              Lecture {lecture.lectureNo}
            </h5>
            <h4 className="lecture-no text-white sm:text-[1rem]">
              {lecture.lectureName}
            </h4>
          </div>
        </div>
      ))}













                       


                        


                        

                        
                       
                </div>
        </div>
    );
}


export default QuizNav;