import { useEffect, useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faFire   } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faClock   } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';
import PlayerDashNav from "../Components/playerDashNav";
import player from '../Assets/Images/Illustration-player.png';
import Mon from '../Assets/Images/M.png';
import Tue from '../Assets/Images/T.png';
import course1 from '../Assets/Images/c.png';
import profileimg from '../Assets/Images/profileuser.png';
import UserStatistic from "../Components/statistic";



const PlayerDashboard = () => {
    
    const [points,setPoints]=useState(0)
    const [points2,setPoints2]=useState(0)

    useEffect(() => {
        const value01 = localStorage.getItem('value01');
        const value02 = localStorage.getItem('value02');
        if(value01){
            setPoints(value01)
        }
        if(value02){
            setPoints2(value02)
        }
        
    }, [localStorage]);


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
                        
                        <div className="sm:w-[20%] md:w-[40%]  lg:w-[40%] sm:flex flex-row hidden ">
                            <div className="w-1/3 flex justify-center items-center">
                                         <h3 className="text-[#FEBD27] text-[2rem]">{points}</h3>
                            </div>
                            <div className="w-1/3 flex justify-center items-center">
                                        <h3 className="text-[#FEBD27] text-[2rem] ">{points2}</h3>
                            </div>
                            <div className="w-1/3 flex justify-center relative">
                                        <div className="w-[54px] h-[53px] rounded-full bg-white">
                                                <img src={profileimg} alt="" className="object-cover w-full h-full"/>
                                        </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            

            <div className="w-full h-screen bg-[#0E063D] sm:mt-5  flex flex-row ">

                <div className="dash-container w-full  sm:p-5 z-30 flex sm:flex-row mt-[110px] mb-[44px] relative flex-col ">
                        <PlayerDashNav/>

                        <div className="w-full flex sm:flex-row flex-col h-full relative space-y-[64px] sm:space-y-0 ">
                            
                            <div className="flex flex-col p-5 space-y-5 sm:w-2/3 h-full w-full relative ">
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
                                <div className="profile-log w-full bg-[#331497] rounded-lg  h-full p-5 flex flex-col pb-5">
                                        <h3 className="text-white font-semibold sm:text-[1.5rem] text-left text-[1.2rem]"> Courses </h3>


                                        <div  className="flex flex-row w-full ">
                                            <ul className="flex flex-row justify-between lg:w-[50%] w-full">
                                                <li className="text-white text-[12px]">Enroll Courses</li>
                                                <li className="text-white text-[12px] text-opacity-60">The Newest</li>
                                                <li className="text-white text-[12px] text-opacity-60">Top Rated</li>
                                                <li className="text-white text-[12px] text-opacity-60">Most Popular</li>

                                            </ul>
                                        </div>                               
                                        <div className="w-full p-3 h-auto bg-white mt-5 rounded-sm flex flex-row space-x-2 justify-between items-center mb-5">
                                                <div className="course-ico w-[32px] h-[32px] ">
                                                            <img src={course1} alt="" className="object-cover w-full h-full rounded-sm "/>
                                                </div>
                                                <div className="flex flex-col text-left">
                                                    <h4 className="font-semibold sm:text-[0.8rem] md:text-[1rem] text-[9px]">An Introduction to C</h4>
                                                    <span className="text-[10px] sm:text-[0.6rem] md:text-[0.8rem]">by Christopher Morgan</span>
                                                </div>
                                                <div className="flex flex-row">
                                                        <span className="sm:text-[10px] lg:text-[1rem] text-[8px]"><FontAwesomeIcon icon={faClock} /> 6h 30min</span>
                                                
                                                </div>
                                                <div className="flex flex-row">
                                                        <span className="sm:text-[10px] lg:text-[1rem] text-[8px]"><FontAwesomeIcon icon={faFire} /> 4.9</span>

                                                </div>
                                                <div className="flex flex-row">
                                                    <button className="sm:w-[120px] sm:py-3 p-2 sm:text-[0.7rem] font-semibold text-[8px] text-white bg-gray-900 rounded-md">
                                                    View Course
                                                        </button>
                                                </div>
                                        </div>


                                        

                                        <hr></hr>

                                        <div className="w-full p-3 h-auto bg-white mt-5 rounded-sm flex flex-col justify-center  mb-5">
                                            <h4 className="font-semibold sm:text-[0.8rem] md:text-[1rem] text-[12px] text-left">Your Path</h4>
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


                                        <div className="w-full p-3 h-auto bg-white mt-5 rounded-sm flex flex-col justify-center  mb-5">
                                            <div className="p-2 flex flex-row space-x-2">
                                                <div className="p-2 bg-[#68DBF2] text-[12px] sm:text-[1rem] font-semibold rounded-md uppercase">NEXT UP</div>
                                                <div className="p-2 bg-[#F16063] text-[12px] sm:text-[1rem] font-semibold rounded-md uppercase">1:30 HRS LEFT</div>
                                            </div>
                                            <h2 className="text-[14px] font-semibold sm:text-[1.2rem]">2.Data Types and C Formatted Input/Output</h2>
                                        </div>                               
                                </div>
                                <div className="p-5 sm:hidden"></div>
                            </div>




                            <div className="flex flex-col p-5 space-y-5 sm:w-1/3 h-full w-full relative ">
                                <div className="flex flex-row p-3 space-x-5 justify-center ">
                                    <div className="w-1/2 rounded-md justify-center items-center flex flex-row bg-[#F8E8B0] p-3 md:text-[14px]">
                                            <h3 className="lg:text-[3rem] md:text-[2rem] font-semibold text-black">11</h3>
                                            <span>Lectures Completed</span>
                                    </div>

                                    <div className="w-1/2 rounded-md justify-center items-center flex flex-row bg-[#F8E8B0] p-3 md:text-[14px]">
                                            <h3 className="lg:text-[3rem] md:text-[2rem] font-semibold text-black">4</h3>
                                            <span>Assignments Completed</span>
                                    </div>
                                </div>



                                <div className="p-5 bg-[#331497] rounded-md flex flex-col w-full h-full">
                                    <h3 className="text-white sm:text-[1.3rem]">Your Statistic</h3>

                                    <div className="flex flex-row justify-between p-3">
                                        <h3 className="text-[1rem] text-white font-semibold">Learning hours</h3>
                                    </div>
                                    <div className="w-full">
                                                            <UserStatistic/>
                                    </div>
                                </div>
                                <div className="p-5 sm:hidden"></div>
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