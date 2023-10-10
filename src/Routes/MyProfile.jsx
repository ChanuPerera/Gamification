import { useState } from "react";
import logo from "../Assets/Images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faFire } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faClock } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import difbg from "../Assets/Images/differncebg-01.png";
import PlayerDashNav from "../Components/playerDashNav";
import player from "../Assets/Images/Illustration-player.png";
import Mon from "../Assets/Images/M.png";
import Tue from "../Assets/Images/T.png";
import course1 from "../Assets/Images/c.png";
import profileimg from "../Assets/Images/profileuser.png";
import UserStatistic from "../Components/statistic";
import userpro from "../Assets/Images/userpro.png";
import elite from "../Assets/Images/elite-trophy.png";
import OverallEarnings from "../Assets/Images/1.png";
import coin from "../Assets/Images/coin.png";
import trophycup from "../Assets/Images/trophycup.png";
import lvl1avatar1 from "../Assets/Images/level1_avatar_1.png";
import lvl1avatar2 from "../Assets/Images/level1_avatar (2).png";
import lvl1avatar3 from "../Assets/Images/level1_avatar (3).png";
import lvl1avatar4 from "../Assets/Images/level1_avatar (4).png";
import lvl1avatar5 from "../Assets/Images/level1_avatar (5).png";

import lvl2avatar1 from "../Assets/Images/level2_avatar (1).png";
import lvl2avatar2 from "../Assets/Images/level2_avatar (2).png";
import lvl2avatar3 from "../Assets/Images/level2_avatar (3).png";
import lvl2avatar4 from "../Assets/Images/level2_avatar (4).png";
import lvl2avatar5 from "../Assets/Images/level2_avatar (5).png";

import lvl3avatar1 from "../Assets/Images/level3_avatar (1).png";
import lvl3avatar2 from "../Assets/Images/level3_avatar (2).png";
import lvl3avatar3 from "../Assets/Images/level3_avatar (3).png";
import lvl3avatar4 from "../Assets/Images/level3_avatar (4).png";
import lvl3avatar5 from "../Assets/Images/level3_avatar (5).png";

import ProgressBarColors from "../Components/progressBar";

const MyProfile = () => {
  const [isMaterialsVisible, setIsMaterialsVisible] = useState(false);

  const toggleMaterials = () => {
    setIsMaterialsVisible(!isMaterialsVisible);
  };

  const [activeTab, setActiveTab] = useState("Overview");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const avatarIcons = [
    {
      level1: [
        { id: 1, image: lvl1avatar1 },
        { id: 2, image: lvl1avatar2 },
        { id: 3, image: lvl1avatar3 },
        { id: 4, image: lvl1avatar4 },
        { id: 5, image: lvl1avatar5 },
      ],
      level2: [
        { id: 1, image: lvl2avatar1 },
        { id: 2, image: lvl2avatar2 },
        { id: 3, image: lvl2avatar3 },
        { id: 4, image: lvl2avatar4 },
        { id: 5, image: lvl2avatar5 },
      ],
      level3: [
        { id: 1, image: lvl3avatar1 },
        { id: 2, image: lvl3avatar2 },
        { id: 3, image: lvl3avatar3 },
        { id: 4, image: lvl3avatar4 },
        { id: 5, image: lvl3avatar5 },
      ],
    },
  ];

  return (
    <div className="w-full h-screen bg-[#0E063D] sm:overflow-hidden relative">
      <div className="nav-wrapper w-full fixed flex flex-col top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-opacity-40 border-white backdrop-blur-sm z-50">
        <div className="top-row w-full">
          <div className="nav-body p-3 flex flex-row justify-between items-center w-full">
            <Link to="/">
              <span className="text-[2rem] text-white ml-10 cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
            </Link>
            <div className="logo sm:w-[10%] lg:w-[20%] h-auto justify-center items-center text-center mx-auto">
              <img
                src={logo}
                alt=""
                srcset=""
                className="sm:w-[180px] h-full object-fill justify-center w-[100px]"
              />
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
                  <img
                    src={profileimg}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-[#0E063D] sm:mt-5  flex flex-row ">
        <div className="dash-container w-full  sm:p-5 z-30 flex sm:flex-row mt-[110px] mb-[44px] relative flex-col ">
          <PlayerDashNav />

          <div
            className="course-set sm:flex-col lg:flex-col md:flex-col flex flex-col w-full p-5  sm:space-y-5 overflow-y-scroll"
            id="style-6"
          >
            <div className="course-item-holder sm:w-full md:w-full lg:w-full  bg-[#331497] space-y-5 rounded-md flex flex-col border-[1px] border-[#331497]  items-center justify-between relative ">
              <div className="user-profile w-full flex flex-row justify-start space-x-5 items-center p-10 border-collapse border-b-[1px] border-opacity-40 border-white">
                <div className="user-pro-img w-[100px] h-[100px] rounded-full relative">
                  <img
                    src={userpro}
                    alt=""
                    className="object-fill w-full h-full"
                  />
                </div>
                <div className="user-info flex-col flex">
                  <h3 className="user-name text-white font-link text-[14px] sm:text-[22pt]">
                    Carter Stanton
                  </h3>
                  <h4 className="user-name neon-font font-link text-[10px] sm:text-[14pt] ">
                    1.2K FOLLOWERS
                  </h4>
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
                  <li
                   
                    
                  >
                    <div onClick={() => handleTabClick("Overview")} className="px-4 border-collapse cursor-pointer border-r-[1px] border-white border-opacity-40 flex justify-center items-center pb-2 ">
                      <span>Overview</span>
                    </div>
                  </li>

                  <li >
                    <div onClick={() => handleTabClick("Team")} className="px-4 border-collapse cursor-pointer border-r-[1px] border-white border-opacity-40 flex justify-center items-center pb-2">
                      <span>Team</span>
                    </div>
                  </li>

                  <li >
                    <div onClick={() => handleTabClick("Statics")} className="px-4 border-collapse cursor-pointer border-r-[1px] border-white border-opacity-40 flex justify-center items-center pb-2">
                      <span>Statics</span>
                    </div>
                  </li>

                  <li
                   
                    
                  >
                    <div   onClick={() => handleTabClick("Achievement")} className="px-4 border-collapse cursor-pointer border-r-[1px] border-white border-opacity-40 flex justify-center items-center pb-2">
                      <span>Achievement</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>





<div className="body-content">
        {activeTab === "Overview" && (
          <div className="Overview-body">
            <div className="overview course-item-holder sm:w-full md:w-full lg:w-full space-y-5 rounded-md flex flex-col   cursor-pointer items-center justify-between relative -z-10">
                  <div className="trophy-card-wrapper flex flex-row space-x-5 w-full ">
                    <div className="trophy-card rounded-md bg-[#331497] w-1/4 p-5 flex flex-row justify-center items-center space-x-5">
                      <div className="trophy-img w-[70px] h-[70px] ">
                        <img
                          src={elite}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="trophy-info flex-col flex">
                        <h4 className="trophy-count   text-white font-link text-[10px] sm:text-[14pt] ">
                          Elite Trophies
                        </h4>
                        <h3 className="trophy-name neon-font font-link text-[14px] sm:text-[22pt]">
                          5
                        </h3>
                      </div>
                    </div>

                    <div className="trophy-card rounded-md bg-[#331497] w-1/4 p-5 flex flex-row justify-center items-center space-x-5">
                      <div className="trophy-img w-[70px] h-[70px] ">
                        <img
                          src={elite}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="trophy-info flex-col flex">
                        <h4 className="trophy-count   text-white font-link text-[10px] sm:text-[14pt] ">
                          Elite Trophies
                        </h4>
                        <h3 className="trophy-name neon-font font-link text-[14px] sm:text-[22pt]">
                          5
                        </h3>
                      </div>
                    </div>

                    <div className="trophy-card rounded-md bg-[#331497] w-1/4 p-5 flex flex-row justify-center items-center space-x-5">
                      <div className="trophy-img w-[70px] h-[70px] ">
                        <img
                          src={elite}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="trophy-info flex-col flex">
                        <h4 className="trophy-count   text-white font-link text-[10px] sm:text-[14pt] ">
                          Elite Trophies
                        </h4>
                        <h3 className="trophy-name neon-font font-link text-[14px] sm:text-[22pt]">
                          5
                        </h3>
                      </div>
                    </div>

                    <div className="trophy-card rounded-md bg-[#331497] w-1/4 p-5 flex flex-row justify-center items-center space-x-5">
                      <div className="trophy-img w-[70px] h-[70px] ">
                        <img
                          src={elite}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="trophy-info flex-col flex">
                        <h4 className="trophy-count   text-white font-link text-[10px] sm:text-[14pt] ">
                          Elite Trophies
                        </h4>
                        <h3 className="trophy-name neon-font font-link text-[14px] sm:text-[22pt]">
                          5
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="info-wrapper flex flex-row w-full space-x-5">
                    <div className="w-3/4 rounded-md p-5 bg-[#331497] flex flex-col space-y-5">
                      <div className="w-full flex flex-row justify-between">
                        <div>
                          <div className="trophy-info flex-col flex">
                            <h3 className="trophy-name text-white font-link text-[14px] sm:text-[22pt] capitalize">
                              learning Statistics
                            </h3>
                            <h4 className="trophy-count font-light text-white font-link text-[10px] sm:text-[10pt] opacity-50">
                              Player's game specific statistics
                            </h4>
                          </div>
                        </div>

                        <div className="w-[280px] border-[1px] border-white border-opacity-40 rounded-md flex justify-center items-center ">
                          <span className="text-white">
                            Last Update:{" "}
                            <span className="neon-font">3 days ago</span>
                          </span>
                        </div>
                      </div>

                      <div className="card-set-wrapper flex flex-row space-x-5">
                        <div className="flex flex-col p-3 rounded-md bg-[#ffffff] bg-opacity-10 justify-center items-center w-1/4">
                          <img src={OverallEarnings} alt="" />
                          <h4 className="text-white text-[12px] mb-10">
                            Overall Earnings
                          </h4>
                          <span className="text-white text-[22pt] font-link">
                            5
                          </span>
                        </div>
                        <div className="flex flex-col p-3 rounded-md bg-[#ffffff] bg-opacity-10 justify-center items-center w-1/4">
                          <img src={OverallEarnings} alt="" />
                          <h4 className="text-white text-[12px] mb-10">
                            Overall Earnings
                          </h4>
                          <span className="text-white text-[22pt] font-link">
                            5
                          </span>
                        </div>
                        <div className="flex flex-col p-3 rounded-md bg-[#ffffff] bg-opacity-10 justify-center items-center w-1/4">
                          <img src={OverallEarnings} alt="" />
                          <h4 className="text-white text-[12px] mb-10">
                            Overall Earnings
                          </h4>
                          <span className="text-white text-[22pt] font-link">
                            5
                          </span>
                        </div>
                        <div className="flex flex-col p-3 rounded-md bg-[#ffffff] bg-opacity-10 justify-center items-center w-1/4">
                          <img src={OverallEarnings} alt="" />
                          <h4 className="text-white text-[12px] mb-10">
                            Overall Earnings
                          </h4>
                          <span className="text-white text-[22pt] font-link">
                            5
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/4 rounded-md p-5 bg-[#331497]">
                      <h3 className="text-white text-[22pt] font-link ">
                        Earnings
                      </h3>
                      <h4 className="trophy-count font-light text-white font-link text-[10px] sm:text-[10pt] opacity-50 ">
                        My current earnings
                      </h4>

                      <div className="w-full rounded-md bg-white bg-opacity-10 flex flex-row p-2 justify-center items-center space-x-5 mb-5 mt-5">
                        <div className="er-ico w-[60px] h-[60px] relative">
                          <img
                            src={coin}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="er-info flex flex-col">
                          <h4 className="trophy-count font-light text-white font-link text-[10px] sm:text-[10pt] opacity-80 ">
                            300
                          </h4>
                          <h4 className="trophy-count font-light text-white font-link text-[10px] sm:text-[10pt] opacity-80 ">
                            Total Coins Earned
                          </h4>
                        </div>
                      </div>

                      <div className="w-full rounded-md bg-white bg-opacity-10 flex flex-row p-2 justify-center items-center space-x-5  mt-5">
                        <div className="er-ico w-[60px] h-[60px] relative">
                          <img
                            src={trophycup}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="er-info flex flex-col">
                          <h4 className="trophy-count font-light text-white font-link text-[10px] sm:text-[10pt] opacity-80 ">
                            $473.00
                          </h4>
                          <h4 className="trophy-count font-light text-white font-link text-[10px] sm:text-[10pt] opacity-80 ">
                            Total Cash Earned
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        )}
        {activeTab === "Team" && (
          <div className="Team-body">
            2
          </div>
        )}
        {activeTab === "Statics" && (
          <div className="Statics-body">
            <div className="Statics sm:w-full md:w-full lg:w-full space-y-5 rounded-md flex flex-col  bg-[#331497] cursor-pointer relative p-5 -z-10">
                  <div className="flex justify-start flex-col">
                    <h3 className="trophy-name text-white font-link text-[14px] sm:text-[22pt] capitalize">
                      statics
                    </h3>
                    <h4 className="trophy-count font-light text-white font-link text-[10px] sm:text-[10pt] opacity-50">
                      Player's game statics
                    </h4>
                  </div>

                  <div className="mt-3 justify-start flex flex-col w-full">
                    <ul className="flex flex-row">
                      <li>
                        <div className="px-4 py-2 flex justify-center items-center">
                          <span className="text-white text-[12px] uppercase">
                            your level
                          </span>
                        </div>
                      </li>

                      <li>
                        <div className="px-4 py-2 flex justify-center items-center">
                          <span className="text-white text-[12px] uppercase">
                            learning level
                          </span>
                        </div>
                      </li>
                    </ul>

                    <div className="p-5 w-full">
                      <ProgressBarColors />
                    </div>
                  </div>
                </div>
          </div>
        )}
        {activeTab === "Achievement" && (
          <div className="Achievement-body">
            <div className="Achievement sm:w-full md:w-full lg:w-full space-y-5 rounded-md flex flex-col  bg-[#331497] cursor-pointer relative p-5 -z-10">
                  <div className="flex justify-start flex-col">
                    <h3 className="trophy-name text-white font-link text-[14px] sm:text-[22pt] capitalize">
                      Achievement
                    </h3>
                    <h4 className="trophy-count font-light text-white font-link text-[10px] sm:text-[10pt] opacity-50">
                      Player's game achievements
                    </h4>
                  </div>

                  <div className="mt-3 justify-start flex w-full">
                    <ul className="flex flex-row">
                      <li>
                        <div className="px-4 py-2 flex justify-center items-center">
                          <span className="text-white text-[12px] uppercase">
                            Profile Avatar
                          </span>
                        </div>
                      </li>

                      <li>
                        <div className="px-4 py-2 flex justify-center items-center">
                          <span className="text-white text-[12px] uppercase">
                            Trophies
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full justify-center flex flex-col ">
                    <h3 className="text-white  text-[18pt]">Level 1</h3>
                    <div className="w-full flex flex-wrap mt-5 space-x-5 mb-10">
                      {avatarIcons[0].level1.map((avatar) => (
                        <div
                          className="avatar-ico w-[100px] h-[100px] relative rounded-full bg-[#f0aac6]"
                          key={avatar.id}
                        >
                          <img
                            src={avatar.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full justify-center flex flex-col ">
                    <h3 className="text-white  text-[18pt]">Level 2</h3>
                    <div className="w-full flex flex-wrap mt-5 space-x-5 mb-10">
                      {avatarIcons[0].level2.map((avatar) => (
                        <div
                          className="avatar-ico w-[100px] h-[100px] relative rounded-full bg-[#f0aac6]"
                          key={avatar.id}
                        >
                          <img
                            src={avatar.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full justify-center flex flex-col ">
                    <h3 className="text-white  text-[18pt]">Level 3</h3>
                    <div className="w-full flex flex-wrap mt-5 space-x-5 mb-10">
                      {avatarIcons[0].level3.map((avatar) => (
                        <div
                          className="avatar-ico w-[100px] h-[100px] relative rounded-full bg-[#f0aac6]"
                          key={avatar.id}
                        >
                          <img
                            src={avatar.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
          </div>
        )}
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
};

export default MyProfile;
