import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';
import QuizNav from "../Components/quizNav";
import CountdownTimer from "../Components/countDown";
import { answerValidation, getAllAssignmentQuizs, getAllQuizs, saveMarks } from "../services/service";
import Loader from "../Components/loader";
import { toast } from "react-toastify";

const Quize_data = [
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

const AssignmentContent = () => {

const [Quize,setQuize]= useState([]);
const [isLoading,setIsLoading]= useState(true);
const [q1Answer,setQ1Answer]= useState("");
const [q2Answer,setQ2Answer]= useState("");
const [marksArr,setMarksArr]= useState([]);
const [user,setUser]= useState({});

useEffect(() => {
    getAllQuizes();
    const storedUser = localStorage.getItem('user');
    const courseCode = localStorage.getItem('CourseCode');
    const lessionNumber = localStorage.getItem('LessionNumber');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
}, []);

const getAllQuizes =()=>{
    setIsLoading(true)
    getAllAssignmentQuizs().then(res => {
        if (res) {

           let quizdata= res.map((data,index)=>{
            return {
                
                Q1: data.quiz,
                Q2: data.labelstwo,
                answer: data.answer,
                answertwo: data.answertwo,
                lectureName: data.subject,
                lectureNo: `0${index+1}`
            }; 
           });
           setQuize(quizdata)
           //console.log("quizdata",quizdata);
           setIsLoading(false)
        } 
    }).catch(err => { 
        console.log(err);   
    
    })
}

    const [currentLectureIndex, setCurrentLectureIndex] = useState(0);

    const currentLecture = Quize[currentLectureIndex];

    const navigate = useNavigate();

    const [activeLecture, setActiveLecture] = useState(1);

    const handleNextClick = () => {

        if (q1Answer == "" || q2Answer == "") {
            return toast.error("Please answer all questions")
        }
        setIsLoading(true);
        const api_data1 = {
            "answer1": currentLecture.answer,
            "answer2": q1Answer,
        }

        const api_data2 = {
            "answer1": currentLecture.answertwo,
            "answer2": q2Answer,
        }

        answerValidation(api_data1).then(res1 => {
            if (res1) {
                console.log("MOdel mark2:",res1);
                setMarksArr([...marksArr, { score: res1.similarity_score }]);
                answerValidation(api_data2).then(res2 => {
                    if (res2) {
                        console.log("MOdel mark2:",res2);
                        setMarksArr([...marksArr, { score: res2.similarity_score }])
                        setIsLoading(false);
                        setQ1Answer("");
                        setQ2Answer("");
                        if (currentLectureIndex < Quize.length - 1) {
                            setActiveLecture(activeLecture + 1);
                            setCurrentLectureIndex(currentLectureIndex + 1);
                        }
                        else {
                            setIsLoading(true);
                            let marks_data={
                                userId:user.id,
                                points:caqulateMarks()
                            }
                            saveMarks(marks_data).then(res => {
                                if (res) {
                                   setIsLoading(false)
                                   const marksstr={
                                    mark:caqulateMarks()
                                   }
                                   localStorage.setItem('marks', JSON.stringify(marksstr));
                                   navigate('/ProfileCreationLoading');
                                } 
                            }).catch(err => { 
                                console.log(err); 
                                navigate('/ProfileCreationLoading');   
                                setIsLoading(false);
                            });
                           
                        }
                    }
                }).catch(err => {
                    console.log(err);

                })
            }
        }).catch(err => {
            console.log(err);

        })

    };

    const caqulateMarks =()=>{
        let totalMark =0.0;
        let finalMark =0.0;
        marksArr.forEach(obj=>{
            totalMark=totalMark+ parseFloat(obj.score)
        });

        finalMark=totalMark/marksArr.length;
        if (finalMark >= 75) {
            return "Highest_level";
          } else if (finalMark >= 45) {
            return "Middle_level";
          } else {
            return "Low_level";
          }
        
    }

    const handlePaste = (event) => {
        const clipboardData = event.clipboardData;
        if (clipboardData && clipboardData.types.includes('text/plain')) {
          toast.warn("Warning: Pasting text into answer is not allowed");
          toast.warn("Please enter your response manually");
        }
      };



    return (

<>
{isLoading? <Loader loading={isLoading}/>:

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
                        <div className="sm:w-[20%] lg:w-[40%] sm:justify-center items-center flex " onClick={()=>caqulateMarks()}>
                            <div className="w-[50%] ">
                                <CountdownTimer />
                            </div>

                        </div>
                    </div>
                </div>

            </div>





            <div className="w-full h-screen bg-[#0E063D] mt-5 justify-between  flex sm:flex-row z-40 flex-col overflow-y-scroll sm:overflow-hidden ">

          

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
                                onPaste={handlePaste}
                                placeholder="Answer type here..."
                                className="p-3 bg-[#10144E] resize-none text-white"
                                rows={10}
                                cols={5}
                                value={q1Answer}
                                onChange={(e)=>setQ1Answer(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className="quiz-row flex flex-col w-full p-5 z-40 space-y-3">
                            <p className="text-white ">
                                2.{currentLecture.Q2}
                            </p>
                            <textarea
                                onPaste={handlePaste}
                                placeholder="Answer type here..."
                                className="p-3 bg-[#10144E] resize-none text-white"
                                rows={10}
                                cols={5}
                                value={q2Answer}
                                onChange={(e)=>setQ2Answer(e.target.value)}
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
    }

</>
    );
}


export default AssignmentContent;