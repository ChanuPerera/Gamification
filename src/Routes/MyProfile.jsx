import { useState } from "react";
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
import userpro from '../Assets/Images/userpro.png';
import elite from '../Assets/Images/elite-trophy.png';
import OverallEarnings from '../Assets/Images/1.png';


const MyProfile = () => {


    const [isMaterialsVisible, setIsMaterialsVisible] = useState(false);

    const toggleMaterials = () => {
        setIsMaterialsVisible(!isMaterialsVisible);
    };


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
                                <h3 className="text-[#FEBD27] text-[2rem]">0023</h3>
                            </div>
                            <div className="w-1/3 flex justify-center items-center">
                                <h3 className="text-[#FEBD27] text-[2rem] ">0423</h3>
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



            <div className="w-full h-screen bg-[#0E063D] sm:mt-5  flex flex-row ">

                <div className="dash-container w-full  sm:p-5 z-30 flex sm:flex-row mt-[110px] mb-[44px] relative flex-col ">
                    <PlayerDashNav />





                    <div className="course-set sm:flex-col lg:flex-wrap md:flex-col flex flex-col w-full p-5  sm:space-y-5 overflow-y-scroll" id="style-6">

                        <div className="course-item-holder sm:w-full md:w-full lg:w-full  bg-[#331497] space-y-5 rounded-md flex flex-col border-[1px] border-[#331497] cursor-pointer items-center justify-between relative -z-10">

                            <div className="user-profile w-full flex flex-row justify-start space-x-5 items-center p-10 border-collapse border-b-[1px] border-opacity-40 border-white">
                                <div className="user-pro-img w-[100px] h-[100px] rounded-full relative">
                                    <img src={userpro} alt="" className="object-fill w-full h-full" />
                                </div>
                                <div className="user-info flex-col flex">
                                    <h3 className="user-name text-white font-link text-[14px] sm:text-[22pt]">Carter Stanton</h3>
                                    <h4 className="user-name neon-font font-link text-[10px] sm:text-[14pt] ">1.2K FOLLOWERS</h4>
                                </div>

                                <button className="h-[44px] w-[120px] text-white rounded-full bg-gradient-to-t from-[#F0B000] to-[#F029A0] uppercase text-[12px] font-semibold">
                                    edit profile
                                </button>


                                <button className="h-[44px] w-[120px] text-white rounded-full bg-gradient-to-t from-[#F0B000] to-[#F029A0] uppercase text-[12px] font-semibold">
                                    Message
                                </button>


                            </div>


                            <div className="profile-bottom-nav  w-full text-white ">
                                <ul className="flex flex-row ">
                                    <li>
                                        <div className="px-4 border-collapse border-r-[1px] border-white border-opacity-40 flex justify-center items-center pb-2 ">
                                            <span>Overview</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="px-4 border-collapse border-r-[1px] border-white border-opacity-40 flex justify-center items-center pb-2">
                                            <span>Team</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="px-4 border-collapse border-r-[1px] border-white border-opacity-40 flex justify-center items-center pb-2">
                                            <span>Statics</span>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="px-4 border-collapse border-r-[1px] border-white border-opacity-40 flex justify-center items-center pb-2">
                                            <span>Achievement</span>
                                        </div>
                                    </li>



                                </ul>
                            </div>

                        </div>


                        <div className="overview course-item-holder sm:w-full md:w-full lg:w-full space-y-5 rounded-md flex flex-col   cursor-pointer items-center justify-between relative -z-10">
                            <div className="trophy-card-wrapper flex flex-row space-x-5 w-full ">
                                <div className="trophy-card rounded-md bg-[#331497] w-1/4 p-5 flex flex-row justify-center items-center space-x-5" >
                                    <div className="trophy-img w-[70px] h-[70px] ">
                                        <img src={elite} alt="" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="trophy-info flex-col flex">
                                        <h4 className="trophy-count   text-white font-link text-[10px] sm:text-[14pt] ">Elite Trophies</h4>
                                        <h3 className="trophy-name neon-font font-link text-[14px] sm:text-[22pt]">5</h3>
                                    </div>

                                </div>

                                <div className="trophy-card rounded-md bg-[#331497] w-1/4 p-5 flex flex-row justify-center items-center space-x-5" >
                                    <div className="trophy-img w-[70px] h-[70px] ">
                                        <img src={elite} alt="" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="trophy-info flex-col flex">
                                        <h4 className="trophy-count   text-white font-link text-[10px] sm:text-[14pt] ">Elite Trophies</h4>
                                        <h3 className="trophy-name neon-font font-link text-[14px] sm:text-[22pt]">5</h3>
                                    </div>

                                </div>

                                <div className="trophy-card rounded-md bg-[#331497] w-1/4 p-5 flex flex-row justify-center items-center space-x-5" >
                                    <div className="trophy-img w-[70px] h-[70px] ">
                                        <img src={elite} alt="" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="trophy-info flex-col flex">
                                        <h4 className="trophy-count   text-white font-link text-[10px] sm:text-[14pt] ">Elite Trophies</h4>
                                        <h3 className="trophy-name neon-font font-link text-[14px] sm:text-[22pt]">5</h3>
                                    </div>

                                </div>

                                <div className="trophy-card rounded-md bg-[#331497] w-1/4 p-5 flex flex-row justify-center items-center space-x-5" >
                                    <div className="trophy-img w-[70px] h-[70px] ">
                                        <img src={elite} alt="" className="object-cover w-full h-full" />
                                    </div>
                                    <div className="trophy-info flex-col flex">
                                        <h4 className="trophy-count   text-white font-link text-[10px] sm:text-[14pt] ">Elite Trophies</h4>
                                        <h3 className="trophy-name neon-font font-link text-[14px] sm:text-[22pt]">5</h3>
                                    </div>

                                </div>



                                {/* <div className="w-3/4 rounded-md p-5 bg-[#331497] ">

                                </div>
                                <div className="w-1/4 rounded-md p-5 bg-[#331497]">

                                </div> */}



                            </div>


                            <div className="info-wrapper flex flex-row w-full space-x-5">
                                <div className="w-3/4 rounded-md p-5 bg-[#331497] flex flex-col space-y-5">
                                    <div className="w-full flex flex-row justify-between">
                                        <div>
                                            <div className="trophy-info flex-col flex">
                                                <h3 className="trophy-name text-white font-link text-[14px] sm:text-[22pt] capitalize">learning Statistics</h3>
                                                <h4 className="trophy-count font-light text-white font-link text-[10px] sm:text-[10pt] opacity-50">Player's game specific statistics</h4>
                                            </div>
                                        </div>

                                        <div className="w-[280px] border-[1px] border-white border-opacity-40 rounded-md flex justify-center items-center ">
                                            <span className="text-white">Last Update: <span className="neon-font">3 days ago</span></span>
                                        </div>
                                    </div>

                                    <div className="card-set-wrapper flex flex-row space-x-5">
                                        <div className="flex flex-col p-3 rounded-md bg-[#ffffff] bg-opacity-10 justify-center items-center w-1/4">
                                            <img src={OverallEarnings} alt="" />
                                            <h4 className="text-white text-[12px] mb-10">Overall Earnings</h4>
                                            <span className="text-white text-[22pt] font-link">5</span>
                                        </div>
                                        <div className="flex flex-col p-3 rounded-md bg-[#ffffff] bg-opacity-10 justify-center items-center w-1/4">
                                            <img src={OverallEarnings} alt="" />
                                            <h4 className="text-white text-[12px] mb-10">Overall Earnings</h4>
                                            <span className="text-white text-[22pt] font-link">5</span>
                                        </div>
                                        <div className="flex flex-col p-3 rounded-md bg-[#ffffff] bg-opacity-10 justify-center items-center w-1/4">
                                            <img src={OverallEarnings} alt="" />
                                            <h4 className="text-white text-[12px] mb-10">Overall Earnings</h4>
                                            <span className="text-white text-[22pt] font-link">5</span>
                                        </div>
                                        <div className="flex flex-col p-3 rounded-md bg-[#ffffff] bg-opacity-10 justify-center items-center w-1/4">
                                            <img src={OverallEarnings} alt="" />
                                            <h4 className="text-white text-[12px] mb-10">Overall Earnings</h4>
                                            <span className="text-white text-[22pt] font-link">5</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-1/4 rounded-md p-5 bg-[#331497]">

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


export default MyProfile;