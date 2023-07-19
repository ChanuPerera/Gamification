import React from "react";
import logo from "../Assets/Images/logo.png"

function Navbar()
{
    return(
        <div className="Nav-wrapper w-full h-[96px] bg-white fixed top-0 shadow-sm shadow-slate-300 items-center z-10">
            <div className="Nav-body p-3 flex flex-row justify-between w-[95%] mx-auto">
                <div className="Logo w-[220px]">
        <img src={logo} alt="" srcset=""  className="w-full h-full object-fill"/>
                </div>

                <div className="w-2/12 flex flex-row items-center justify-center space-x-5">
                    <h3 className="font-semibold text-[#191919]">Welcome Supun,</h3>
                    <div className="pro-img w-[56px] h-[56px] bg-slate-300 rounded-full" >

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;