import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import home from '../Assets/Images/home.png';
import cap from '../Assets/Images/capvector.png';
import user from '../Assets/Images/uservec.png';
import message from '../Assets/Images/messagevec.png';
import setting from '../Assets/Images/setting.png';
import notify from '../Assets/Images/bell.png';
import logout from '../Assets/Images/logout.png';



const PlayerDashNav = () => {
    const location = useLocation(); // Get the current pathname
    const [activeLink, setActiveLink] = useState(location.pathname);

    // Function to handle li click and set activeLink
    const handleLiClick = (linkName) => {
        setActiveLink(linkName);
    };


    return (

        <div className="dash-nav-wrapper sm:w-[108px]  h-auto sm:p-5 p-3 bg-[#331497] sm:rounded-lg flex sm:flex-col flex-row float-left  items-center relative">
            <ul className="flex sm:flex-col flex-row sm:space-y-5 items-center h-full w-full justify-between sm:justify-normal">
                <li>
                <Link
                        to="/PlayerDashboard"
                        onClick={() => handleLiClick("/PlayerDashboard")}
                        className={activeLink === "/PlayerDashboard" ? "active-link" : ""}
                    >
                        <div
                            className={`sm:w-[54px] sm:h-[54px] md:w-[54px] md:h-[54px] w-[18px] h-[18px] flex justify-center items-center rounded-lg ${activeLink === "/PlayerDashboard"
                                    ? "bg-[#8098FA] bg-opacity-40"
                                    : "bg-transparent"
                                }`}
                        >
                            <img src={home} alt="" />
                        </div>
                    </Link>

                </li>

                <li>
                <Link
                        to="/Courses"
                        onClick={() => handleLiClick("/Courses")}
                        className={activeLink === "/Courses" ? "active-link" : ""}
                    >
                        <div
                            className={`sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center rounded-lg ${activeLink === "/Courses" ? "bg-[#8098FA] bg-opacity-40" : "bg-transparent"
                                }`}
                        >
                            <img src={cap} alt="" />
                        </div>
                    </Link>
                </li>

                <li>
                    <Link
                        to="/MyProfile"
                        onClick={() => handleLiClick("/MyProfile")}
                        className={activeLink === "/MyProfile" ? "active-link" : ""}
                    >
                    <div
                            className={`sm:w-[54px] sm:h-[54px] md:w-[54px] md:h-[54px] w-[18px] h-[18px] flex justify-center items-center rounded-lg ${activeLink === "/MyProfile"
                                    ? "bg-[#8098FA] bg-opacity-40"
                                    : "bg-transparent"
                                }`}
                        >
                        <img src={user} alt="" className="" />
                    </div>
                    </Link>
                </li>

                <li>
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={message} alt="" className="" />
                    </div>
                </li>

                <li>
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={setting} alt="" className="" />
                    </div>
                </li>

                <li>
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={notify} alt="" className="" />
                    </div>
                </li>

                <li >
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={logout} alt="" className="" />
                    </div>
                </li>

            </ul>
        </div>
    );
}


export default PlayerDashNav;