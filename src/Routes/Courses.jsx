import { useEffect, useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faFire } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';
import PlayerDashNav from "../Components/playerDashNav";
import player from '../Assets/Images/Illustration-player.png';
import Mon from '../Assets/Images/M.png';
import Tue from '../Assets/Images/T.png';
import course1 from '../Assets/Images/c.png';
import profileimg from '../Assets/Images/profileuser.png';
import UserStatistic from "../Components/statistic";
import doc from '../Assets/Notes/Introduction_to_C_programming.pdf';



const Courses = () => {

    const [isMaterialsVisible, setIsMaterialsVisible] = useState(false);

    const toggleMaterials = () => {
        setIsMaterialsVisible(!isMaterialsVisible);
    };

    const [points,setPoints]=useState(0)
    const [points2,setPoints2]=useState(0)

    useEffect(() => {
        const value01 = parseInt(localStorage.getItem('value01'));
        const value02 = parseInt(localStorage.getItem('value02'));
        if(value01){
            setPoints(value01)
        }
        if(value02){
            setPoints2(value02)
        }
        
    }, [localStorage]);

    const setValue01=()=>{
        localStorage.setItem('value01', 100+points);
        localStorage.setItem('value02', 100+points);
        setPoints(100+points);
        setPoints2(100+points);
    }


    return (

        <div className="w-full h-screen bg-[#0E063D] sm:overflow-hidden relative">

            <div className="nav-wrapper w-full fixed flex flex-col top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-opacity-40 border-white backdrop-blur-sm z-50">


                <div className="top-row w-full">
                    <div className="nav-body p-3 flex flex-row justify-between items-center w-full" >

                        <Link to="/">
                            <span className="text-[2rem] text-white ml-10 cursor-pointer"><FontAwesomeIcon icon={faChevronLeft} /></span>
                        </Link>
                        <div className="logo sm:w-[10%] lg:w-[20%] h-auto justify-center items-center text-center mx-auto">
                            <img src={logo} alt="" srcset="" className="sm:w-[180px] h-full object-fill justify-center w-[100px]" />
                        </div>

                        <div className="sm:w-[20%] md:w-[40%] lg:w-[40%] sm:flex flex-row hidden ">
                            <div className="w-1/3 flex justify-center items-center">
                                <h3 className="text-[#FEBD27] text-[2rem]">{points}</h3>
                            </div>
                            <div className="w-1/3 flex justify-center items-center">
                                <h3 className="text-[#FEBD27] text-[2rem] ">{points2}</h3>
                            </div>
                            <div className="w-1/3 flex justify-center relative">
                                <div className="w-[54px] h-[53px] rounded-full bg-white">
                                    <img src={profileimg} alt="" className="object-cover w-full h-full" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className="w-full h-full bg-[#0E063D] sm:mt-5  flex flex-row " >

                <div className="dash-container w-full  sm:p-5 z-30 flex sm:flex-row mt-[110px] mb-[44px] relative flex-col ">
                    <PlayerDashNav />

                    <div className="w-full flex sm:flex-col flex-col h-full space-y-[64px] sm:space-y-0 overflow-y-scroll" id="style-6">

                        <div className="flex flex-col p-5 w-full sm:h-[96px] md:h-[108px] lg:h-[128px] sm:space-x-5 sm:flex-row">

                            <div className="sm:w-1/2 p-3 bg-white rounded-md flex flex-row space-x-2 justify-between  items-center ">

                                <div className="justify-center flex flex-row space-x-5">
                                    <div className="course-ico sm:w-[44px] sm:h-[44px] lg:h-[54px] lg:w-[100px] ">
                                        <img src={course1} alt="" className="object-cover w-full h-full rounded-sm " />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <h4 className="font-semibold sm:text-[0.8rem] md:text-[1rem] text-[9px]">An Introduction to C</h4>
                                        <span className="text-[10px] sm:text-[0.6rem] md:text-[0.8rem]">by Christopher Morgan</span>
                                    </div>
                                </div>



                                <div className="flex flex-row">
                                    <button className="sm:w-[120px] sm:py-3 p-2 sm:text-[0.7rem] font-semibold text-[8px] text-white bg-gray-900 rounded-md">
                                        View Daily Missions
                                    </button>
                                </div>

                            </div>

                            <div className="sm:w-1/2 p-3 bg-white rounded-md flex justify-center items-center">
                                <div className="w-full flex flex-row justify-start items-center space-x-2 p-3 bg-[#66CB9F] rounded-full mx-auto">

                                    <h3 className="text-[12px] sm:text-[1rem] font-semibold">1.</h3>
                                    <div className="sm:w-[32px] sm:h-[32px] lg:w-[44px] lg:h-[44px] w-[22px] h-[22px] rounded-full border-green-400 border-[1px] flex justify-center items-center bg-white">
                                        <span className="text-[10px] sm:text-[1rem]">01</span>
                                    </div>

                                    <div className="sm:w-[32px] sm:h-[32px] lg:w-[44px] lg:h-[44px] w-[22px] h-[22px] rounded-full border-green-400 border-[1px] flex justify-center items-center bg-white">
                                        <span className="text-[10px] sm:text-[1rem]">02</span>
                                    </div>

                                    <div className="sm:w-[32px] sm:h-[32px] lg:w-[44px] lg:h-[44px] w-[22px] h-[22px] rounded-full border-green-400 border-[1px] flex justify-center items-center bg-white">
                                        <span className="text-[10px] sm:text-[1rem]">03</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 sm:hidden"></div>
                        </div>

                        <div className="course-set sm:flex-col lg:flex-wrap md:flex-col flex flex-col w-full p-5  sm:space-y-5 ">


                            <div
                                className={`course-item-holder ${isMaterialsVisible ? "unlock" : ""
                                    } sm:w-full md:w-full lg:w-full p-2 bg-[#151515] rounded-md flex flex-col border-[1px] border-[#151515] hover:border-[#EDB8FF] cursor-pointer items-center justify-between`}
                                onClick={toggleMaterials}
                            >

                                <div className="flex flex-row w-full justify-between items-center">
                                    <div className="course-img sm:w-[180px] lg:w-[300px] sm:h-[180px] relative w-1/4" >
                                        <img src={course1} alt="" className="object-cover w-full h-full rounded-md" />
                                    </div>
                                    <div className="p-2 flex flex-col w-3/4">
                                        <h2 className="text-white sm:text-[1.8rem] font-semibold ">Introduction to C programming</h2>
                                        <div className="p-1 flex flex-row space-x-3 mb-3 lg:w-1/2">
                                            <div className="p-2 bg-[#4F4F4F] w-1/3 rounded-md border-[1px] border-[#FAFF01] justify-center items-center md:text-[12px]">
                                                <span className="text-white">Earn 250 Stars</span>
                                            </div>

                                            <div className="p-2 bg-[#4F4F4F] w-2/3 rounded-md border-[1px] border-[#FAFF01] justify-center items-center md:text-[12px]">
                                                <span className="text-white">Up to level 01 complete this lesson </span>
                                            </div>

                                        </div>

                                        <div className="w-full pt-5 border-collapse border-t-[1px] border-gray-300 border-opacity-40 flex flex-row space-x-3 lg:justify-between">
                                            <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                                <span className="sm:text-[2rem] text-white font-semibold">1</span>
                                                <div className="star-row flex flex-row">
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                </div>
                                            </div>

                                            <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                                <span className="sm:text-[2rem] text-white font-semibold">2</span>
                                                <div className="star-row flex flex-row">
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                </div>
                                            </div>

                                            <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                                <span className="sm:text-[2rem] text-white font-semibold">3</span>
                                                <div className="star-row flex flex-row">
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                </div>
                                            </div>

                                            <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                                <span className="sm:text-[2rem] text-white font-semibold">4</span>
                                                <div className="star-row flex flex-row">
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                </div>
                                            </div>

                                            <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                                <span className="sm:text-[2rem] text-white font-semibold">5</span>
                                                <div className="star-row flex flex-row">
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                </div>
                                            </div>
                                            <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                                <span className="sm:text-[2rem] text-white font-semibold">6</span>
                                                <div className="star-row flex flex-row">
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                    <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {isMaterialsVisible && (
                                    <div className="course-metarials p-2 flex flex-col w-full">
                                        <div className="flex flex-col w-full justify-between">
                                            <h2 className="text-white sm:text-[1.2rem] font-semibold">Lesson 01 : Part 1</h2>
                                        </div>
                                        <div className="note-set w-full flex flex-row mt-3 space-x-3">
                                            <div className="note-card w-[160px] h-[160px] rounded-sm bg-[#4A4582] flex flex-col justify-center items-center relative">
                                                <div className="w-[60px] py-1 rounded-md bg-[#90D83C] justify-center items-center flex absolute top-3 right-3"> <span className="text-[1rem] font-semibold text-white ">100</span></div>

                                                <div className="p-2 justify-center items-center text-center flex w-full mx-auto">
                                                    <h2 className="text-white font-semibold">Algorithms and Flowcharts</h2>
                                                </div>

                                                <a
                                                    href={doc}
                                                    download="Example-PDF-document"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><span onClick={()=>setValue01()} className="text-white text-[12px] underline ">Read Short Notes</span></a>
                                            </div>


                                            <div className="note-card w-[160px] h-[160px] rounded-sm bg-[#4A4582] flex flex-col justify-center items-center relative">
                                                <div className="w-[60px] py-1 rounded-md bg-[#90D83C] justify-center items-center flex absolute top-3 right-3"> <span className="text-[1rem] font-semibold text-white ">100</span></div>

                                                <div className="p-2 justify-center items-center text-center flex w-full mx-auto">
                                                    <h2 className="text-white font-semibold">Algorithms and Flowcharts</h2>
                                                </div>

                                                <a
                                                    href={doc}
                                                    download="Example-PDF-document"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><span onClick={()=>setValue01()} className="text-white text-[12px] underline ">Read Short Notes</span></a>
                                            </div>


                                            <div className="note-card w-[160px] h-[160px] rounded-sm bg-[#4A4582] flex flex-col justify-center items-center relative">
                                                <div className="w-[60px] py-1 rounded-md bg-[#90D83C] justify-center items-center flex absolute top-3 right-3"> <span className="text-[1rem] font-semibold text-white ">100</span></div>

                                                <div className="p-2 justify-center items-center text-center flex w-full mx-auto">
                                                    <h2 className="text-white font-semibold">Algorithms and Flowcharts</h2>
                                                </div>

                                                <a
                                                    href={doc}
                                                    download="Example-PDF-document"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><span onClick={()=>setValue01()} className="text-white text-[12px] underline ">Read Short Notes</span></a>
                                            </div>

                                            <div className="note-card w-[160px] h-[160px] rounded-sm bg-[#4A4582] flex flex-col justify-center items-center relative">
                                                <div className="w-[60px] py-1 rounded-md bg-[#90D83C] justify-center items-center flex absolute top-3 right-3"> <span className="text-[1rem] font-semibold text-white ">100</span></div>

                                                <div className="p-2 justify-center items-center text-center flex w-full mx-auto">
                                                    <h2 className="text-white font-semibold">Algorithms and Flowcharts</h2>
                                                </div>

                                                <a
                                                    href={doc}
                                                    download="Example-PDF-document"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                ><span onClick={()=>setValue01()} className="text-white text-[12px] underline ">Read Short Notes</span></a>
                                            </div>


                                        </div>
                                    </div>
                                )}

                            </div>













                            <div className="course-item-holder sm:w-full md:w-full lg:w-full p-2 bg-[#151515] rounded-md flex flex-row border-[1px] border-[#151515] cursor-pointer items-center justify-between relative -z-10">
                                <div className="course-img sm:w-[180px] lg:w-[300px] sm:h-[180px] relative w-1/4" >
                                    <img src={course1} alt="" className="object-cover w-full h-full rounded-md" />
                                </div>
                                <div className="p-2 flex flex-col w-3/4">
                                    <h2 className="text-white sm:text-[1.8rem] font-semibold ">Introduction to C programming</h2>
                                    <div className="p-1 flex flex-row space-x-3 mb-3 lg:w-1/2">
                                        <div className="p-2 bg-[#4F4F4F] w-1/3 rounded-md border-[1px] border-[#FAFF01] justify-center items-center md:text-[12px]">
                                            <span className="text-white">Earn 250 Stars</span>
                                        </div>

                                        <div className="p-2 bg-[#4F4F4F] w-2/3 rounded-md border-[1px] border-[#FAFF01] justify-center items-center md:text-[12px]">
                                            <span className="text-white">Up to level 01 complete this lesson </span>
                                        </div>

                                    </div>

                                    <div className="w-full pt-5 border-collapse border-t-[1px] border-gray-300 border-opacity-40 flex flex-row space-x-3 lg:justify-between  z-0 cursor-pointer">
                                        <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center cursor-pointer">
                                            <span className="sm:text-[2rem] text-white font-semibold">1</span>
                                            <div className="star-row flex flex-row">
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                            </div>
                                        </div>

                                        <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                            <span className="sm:text-[2rem] text-white font-semibold">2</span>
                                            <div className="star-row flex flex-row">
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                            </div>
                                        </div>

                                        <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                            <span className="sm:text-[2rem] text-white font-semibold">3</span>
                                            <div className="star-row flex flex-row">
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                            </div>
                                        </div>

                                        <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                            <span className="sm:text-[2rem] text-white font-semibold">4</span>
                                            <div className="star-row flex flex-row">
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                            </div>
                                        </div>

                                        <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                            <span className="sm:text-[2rem] text-white font-semibold">5</span>
                                            <div className="star-row flex flex-row">
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                            </div>
                                        </div>
                                        <div className="level-card p-2 sm:w-[80px] sm:h-[80px] bg-[#E2BC80] rounded-md border-[3px] border-[#FFF6D8] flex flex-col justify-center items-center">
                                            <span className="sm:text-[2rem] text-white font-semibold">6</span>
                                            <div className="star-row flex flex-row">
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                                <div className="star-pattern bg-[#000000] sm:w-[18px] sm:h-[18px]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="backdrop-overlay sm:w-full md:w-full lg:w-full bg-[#151515] rounded-md flex flex-row border-[1px] border-[#151515] h-full z-40 cursor-pointer absolute backdrop-blur-sm bg-opacity-20 top-0 "></div>
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


export default Courses;