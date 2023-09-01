import React from "react";
import Link from "antd/es/typography/Link";
import home from '../Assets/Images/home.png';
import cap from '../Assets/Images/capvector.png';
import user from '../Assets/Images/uservec.png';
import message from '../Assets/Images/messagevec.png';
import setting from '../Assets/Images/setting.png';
import notify from '../Assets/Images/bell.png';
import logout from '../Assets/Images/logout.png';



const PlayerDashNav = () => {

    return(

        <div className="dash-nav-wrapper sm:w-[108px]  h-auto sm:p-5 p-3 bg-[#331497] sm:rounded-lg flex sm:flex-col flex-row float-left  items-center relative">
            <ul className="flex sm:flex-col flex-row sm:space-y-5 items-center h-full w-full justify-between sm:justify-normal">
                <li>
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={home} alt="" className=""/>
                    </div>
                </li>

                <li>
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={cap} alt="" className=""/>
                    </div>
                </li>

                <li>
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px]  flex justify-center items-center">
                        <img src={user} alt="" className=""/>
                    </div>
                </li>

                <li>
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={message} alt="" className=""/>
                    </div>
                </li>

                <li>
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={setting} alt="" className=""/>
                    </div>
                </li>

                <li>
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={notify} alt="" className=""/>
                    </div>
                </li>

                <li >
                    <div className="sm:w-[54px] sm:h-[54px] w-[18px] h-[18px] flex justify-center items-center">
                        <img src={logout} alt="" className=""/>
                    </div>
                </li>

            </ul>
        </div>
    );
}


export default PlayerDashNav;