import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from '../Assets/Images/logo2.png';


const MainNav = () => {

    return(

<div className="nav-wrapper w-full sm:h-[96px]  fixed flex top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-white backdrop-blur-sm z-50">
        <div className="nav-body p-3 flex flex-row justify-between items-center w-full" >
            <div className="logo sm:w-[20%] h-auto justify-center items-center text-center ">
                 <img src={logo} alt="" srcset=""  className="sm:w-[180px] h-full object-fill justify-center w-[100px]"/>    
            </div>
            <div className="nav-links justify-center w-[60%] sm:flex flex-row hidden">
                    <ul className="flex flex-row space-x-3">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
            </div>
            <div className="nav-links justify-center w-[20%] sm:flex flex-row hidden">
                <ul className="flex flex-row space-x-3">
                    <li>Log</li>
                    <li>Log</li>
                </ul>
            </div>
            
        </div>
    </div>
    );

}

export default MainNav;