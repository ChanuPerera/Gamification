import React, { useEffect, useState } from 'react';
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';

const ProfileCreationLoading = () => {
    const [loadingComplete, setLoadingComplete] = useState(false);



    useEffect(() => {

        const loadingTimeout = setTimeout(() => {
            setLoadingComplete(true);

            window.location.href = '/CreateProfile';
        }, 5000);

        return () => clearTimeout(loadingTimeout);
    }, []);




    return (

        <div className="w-full h-screen bg-[#0E063D] overflow-hidden">

            <div className="nav-wrapper w-full sm:h-[168px] fixed flex flex-col top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-opacity-40 border-white backdrop-blur-sm z-50">


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

                <div className="bottom-row w-full border-collapse border-t-[1px] border-white border-opacity-30 sm:block hidden">
                    <div className="flex flex-row full ">
                        <div className="w-1/3 hidden sm:flex flex-row p-5 bg-[#0E063D] bg-opacity-40 justify-center items-center space-x-10">
                            <div className="flex flex-col">
                                <h4 className="text-white" >Student Details</h4>
                                <p className="text-white opacity-50">Enter your Details</p>
                            </div>
                            <div className="text-[#f6f8f6] sm:text-[1.7rem]"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        </div>
                        <div className="w-1/3 hidden sm:flex flex-row p-5 justify-center items-center space-x-10 bg-[#0E063D] bg-opacity-40 ">
                            <div className="flex flex-col">
                                <h4 className="text-white">Overall questions of C Language</h4>
                                <p className="text-white opacity-50">Answer all the questions </p>
                            </div>
                            <div className="text-[#28C600] sm:text-[1.7rem]"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        </div>
                        <div className="w-1/3 hidden sm:flex flex-row p-5 justify-center items-center space-x-10 bg-[#0E063D] bg-opacity-40">
                            <div className="flex flex-col">
                                <h4 className="text-white">Create Profile</h4>
                                <p className="text-white opacity-50">Automatically generated</p>
                            </div>
                            <div className="text-[#28C600] sm:text-[1.7rem]"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        </div>
                    </div>
                </div>


            </div>


            <div className="w-full h-screen bg-[#0E063D] mt-5 justify-center flex items-center  ">



                <div className=" sm:h-[400px] p-5 flex flex-col rounded-2xl z-40">
                    <h2 className="font-link font-semibold lg:text-[3rem] md:text-[3rem] sm:text-[2rem] text-[#ffffff] uppercase text-center">
                        Your <span className="text-[#00FADF]">Profile</span> is Creating
                    </h2>
                    <p className="text-[1rem] text-white font-semibold text-center">Please Wait..</p>
                    <div className="loading-process ">
                        <div className={`loading-circle ${loadingComplete ? 'filled' : ''}`}></div>
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


export default ProfileCreationLoading;