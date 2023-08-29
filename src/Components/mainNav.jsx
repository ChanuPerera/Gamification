import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from '../Assets/Images/logo2.png';
import { Link } from "react-router-dom";


const MainNav = () => {

    return(

<div className="nav-wrapper w-full sm:h-[96px]  fixed flex top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-white backdrop-blur-sm z-50">
        <div className="nav-body p-3 flex flex-row justify-between items-center w-full" >
            <div className="logo sm:w-[10%] lg:w-[20%] h-auto justify-center items-center text-center ">
                 <img src={logo} alt="" srcset=""  className="sm:w-[180px] h-full object-fill justify-center w-[100px]"/>    
            </div>



            <div className="nav-links justify-center w-[60%] sm:flex flex-row hidden mx-auto ">
                    <ul className="flex flex-row space-x-3 text-white justify-between">
                        <li className="nav-link active text-[#00FADF]">Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Tournaments</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
            </div>



            <div className="nav-links justify-center s:w-[30%] lg:w-[20%] sm:flex flex-row hidden">
                <ul className="flex flex-row space-x-3 w-full">
                    <li>
                    <Link to="/Login"><div className="lg:w-[180px] sm:w-[100px] h-[36px] border-[#F0B000] border-[1px] flex justify-center items-center rounded-full">
                                <span className="capitalize text-white sm:text-[0.8rem] font-semibold">Login</span>
                        </div></Link>
                    </li>

                    <li>
                    <Link to="/Enroll"><div className="lg:w-[180px] sm:w-[100px] h-[36px] flex justify-center items-center rounded-full bg-gradient-to-t from-[#F0B000] to-[#F029A0]">
                                <span className="capitalize text-white sm:text-[0.8rem] font-semibold">Enroll Now</span>
                        </div></Link>
                    </li>
                   
                </ul>
            </div>
            
        </div>
    </div>
    );

}

export default MainNav;