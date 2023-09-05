import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';
import QuizNav from "../Components/quizNav";
import CountdownTimer from "../Components/countDown";



const QuizContent = () => {




    const Quize = [
        {
            lectureNo: "01",
            lectureName: "Introduction to programming",
            Q1: "  Describe the key characteristics of programming and explain how it differs from other problem-solving approaches. Provide examples to support your answer. ?",
            Q2: "Explain the concepts of algorithms and flowcharts. Discuss their importance in the programming process and provide an example of a simple algorithm along with its corresponding flowchart."
        },
        {
            lectureNo: "02",
            lectureName: "Data Types and C Formatted Input/Output",
            Q1: "Discuss the concept of data types in C programming and provide examples of different data types along with their respective ranges and memory sizes.",
            Q2: "Explain the concept of formatted input/output in C programming. Discuss the importance of formatting options and provide examples of using format specifiers for input and output operations."
        },
        {
            lectureNo: "03",
            lectureName: "Operators in C",
            Q1: "Discuss the concept of operators in C programming. Differentiate between unary, binary, and ternary operators and provide examples of each.",
            Q2: "Explain the concept of precedence and associativity in C programming. Provide examples to illustrate their importance in evaluating expressions with multiple operators."
        },
        {
            lectureNo: "04",
            lectureName: "Selection Statements in C / Character",
            Q1: "What is the purpose of the 'if-else' statement in C programming? Provide an example of its usage.",
            Q2: "What are character arrays in C programming? How can we manipulate them using selection statements?"
        },
        {
            lectureNo: "05",
            lectureName: "Repetition statements in C.",
            Q1: "Explain the concept of repetition statements in C programming. Discuss the differences between the 'while' loop and the 'do-while' loop, providing examples of their usage.",
            Q2: "Discuss the usage of the 'for' loop in C programming. Provide an example that demonstrates its application in iterative tasks"
        },
        {
            lectureNo: "06",
            lectureName: "Functions",
            Q1: "Explain the concept of function prototypes in C programming and briefly discuss their purpose",
            Q2: "Explain the concept of functions in C programming and discuss their advantages. Provide an example of a user-defined function and explain how it can be called and used in a program"
        },
        {
            lectureNo: "07",
            lectureName: "Arrays",
            Q1: "Discuss the concept of arrays in C programming. Explain how arrays are declared, initialised, and accessed. Provide an example that demonstrates the use of arrays in solving a problem",
            Q2: "Explain the concept of multidimensional arrays in C programming. Discuss their advantages and provide an example that demonstrates the use of multidimensional arrays."
        },
        {
            lectureNo: "08",
            lectureName: "File Handling",
            Q1: "Explain the concept of file handling in C programming. Discuss the different modes used to open a file and provide examples of each mode. Illustrate your answer with a code snippet that demonstrates reading data from a file.",
            Q2: "Discuss the importance of error handling in file operations. Explain how you would handle errors while opening a file and provide an example of handling a file opening error in C."
        }
    ];





    const [currentLectureIndex, setCurrentLectureIndex] = useState(0);

    const currentLecture = Quize[currentLectureIndex];

    const navigate = useNavigate();

    const [activeLecture, setActiveLecture] = useState(1);
    const handleNextClick = () => {
        if (currentLectureIndex < Quize.length - 1) {
            setActiveLecture(activeLecture + 1);
            setCurrentLectureIndex(currentLectureIndex + 1);
        }
        else {
            navigate('/ProfileCreationLoading');
        }
    };



    return (


        <div className="w-full h-screen bg-[#0E063D] overflow-hidden">

            <div className="nav-wrapper w-full   fixed flex flex-col top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-opacity-40 border-white backdrop-blur-sm z-50">


                <div className="top-row w-full">
                    <div className="nav-body p-3 flex flex-row justify-between items-center w-full" >

                        <Link to="/">
                            <span className="sm:text-[2rem] text-[1rem] text-white ml-10 cursor-pointer"><FontAwesomeIcon icon={faChevronLeft} /></span>
                        </Link>
                        <div className="logo sm:w-[10%] lg:w-[20%] h-auto justify-center items-center text-center mx-auto">
                            <img src={logo} alt="" srcset="" className="sm:w-[180px] h-full object-fill justify-center w-[100px]" />
                        </div>
                        <div className="sm:w-[20%] lg:w-[40%] sm:justify-center items-center flex ">
                            <div className="w-[50%] ">
                                <CountdownTimer />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bottom-row w-full border-collapse border-t-[1px] border-white border-opacity-30">
                    <div className="flex sm:flex-row full flex-col ">


                        <div className="sm:w-1/3 w-full hidden sm:flex flex-row p-5 bg-[#0E063D] bg-opacity-40 justify-center items-center space-x-10">
                            <div className="flex flex-col">
                                <h4 className="text-white" >Student Details</h4>
                                <p className="text-white opacity-50">Enter your Details</p>
                            </div>
                            <div className="text-[#28C600] sm:text-[1.7rem]"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        </div>


                        <div className="sm:w-1/3 w-full sm:flex flex-row p-5 justify-center items-center space-x-10 bg-[#0E063D] bg-opacity-40 ">
                            <div className="flex flex-col ">
                                <h4 className="text-white">Overall questions of C Language</h4>
                                <p className="text-white opacity-50">Answer all the questions </p>
                            </div>
                            <div className="text-[#28C600] sm:text-[1.7rem]"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        </div>


                        <div className="sm:w-1/3 hidden sm:flex flex-row p-5 justify-center items-center space-x-10 bg-[#606060] bg-opacity-40">
                            <div className="flex flex-col">
                                <h4 className="text-white">Create Profile</h4>
                                <p className="text-white opacity-50">Automatically generated</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>





            <div className="w-full h-screen bg-[#0E063D] mt-5 justify-between  flex sm:flex-row z-40 flex-col overflow-y-scroll sm:overflow-hidden ">

                <div className="sm:w-1/3 lg:w-1/6 sm:mt-5 sm:block hidden">
                    <QuizNav activeLecture={activeLecture} />
                </div>

                <div className="sm:w-3/4 mx-auto sm:overflow-y-scroll mt-[200px] mb-10 relative " id="style-6">
                    <div className="w-[80%]  mx-auto flex flex-col rounded-lg bg-[#331497] p-5 z-40 ">
                        <div className="head-row flex flex-col w-full  pb-5 border-collapse border-b-[1px] border-white border-opacity-40 z-40">
                            <h5 className="text-white font-semibold">Lecture {currentLecture.lectureNo}</h5>
                            <h4 className="text-white font-semibold text-[2rem]">{currentLecture.lectureName}</h4>
                            <p className="text-white opacity-40">
                                In this lecture coves on, Describe the evolution of programming languages and Write a simple C program
                            </p>
                        </div>
                        <div className="quiz-row flex flex-col w-full p-5 z-40 space-y-3">
                            <p className="text-white ">
                                1.{currentLecture.Q1}
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
                                2.{currentLecture.Q2}
                            </p>
                            <textarea
                                placeholder="Answer type here..."
                                className="p-3 bg-[#10144E] resize-none text-white"
                                rows={10}
                                cols={5}
                            >
                            </textarea>
                        </div>
                        {currentLectureIndex < Quize.length && (
                            <div className="sm:w-[220px] sm:h-[48px] w-[96px] h-[44px] rounded-full justify-center flex cursor-pointer  items-center mx-auto mt-5 bg-gradient-to-t from-[#F0B000] to-[#F029A0] z-20" onClick={handleNextClick}>
                                <span className="text-white font-semibold">Next</span>
                            </div>
                        )}
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