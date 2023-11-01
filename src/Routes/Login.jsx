import { useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';
import axios from "axios";
import { signIn } from "../services/service";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

const Login = () => {


    const navigate =useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if(email==""){
            return toast.error("Please enter Email address")
        }
        if(password==""){
            return toast.error("Please enter Password")
        }
        signIn({email:email,password:password}).then(res => {
            if (res) {
                if (res.response) {
                    toast.error(res.response.data.message)
                } else {
                    localStorage.setItem('user', JSON.stringify(res));
                    setLoading(false);
                    toast.success("Login successful");
                    navigate('/playerDashboard');
                }
            } 
        }).catch(err => { 
            console.log(err);
            navigate('/playerDashboard'); 
            setLoading(false)  
        });

    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(prevState => !prevState);


    return (

        <div className="w-full h-screen bg-[#0E063D] overflow-hidden">

            <div className="nav-wrapper w-full sm:h-[96px]  fixed flex top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-white backdrop-blur-sm z-50">
                <div className="nav-body p-3 flex flex-row justify-between items-center w-full" >

                    <Link to="/">
                        <span className="text-[2rem] text-white ml-10 cursor-pointer"><FontAwesomeIcon icon={faChevronLeft} /></span>
                    </Link>
                    <div className="logo sm:w-[10%] lg:w-[20%] h-auto justify-center items-center text-center mx-auto">
                        <img src={logo} alt="" srcset="" className="sm:w-[180px] h-full object-fill justify-center w-[100px]" />
                    </div>


                </div>
            </div>


            <div className="w-full h-screen bg-[#0E063D] mt-5 justify-center">
                <form onSubmit={handleSubmit} className="bg-[#331497] mx-auto rounded-2xl px-8 p-[56px] mb-4 w-[400px] h-auto  flex flex-col justify-center overflow-clip relative top-1/2 -translate-y-1/2 backdrop-blur-md z-40">

                    <h3 className="mb-6 text-center text-xl z-10 text-white uppercase font-link">Welcome Back</h3>
                    <div className="mb-8 z-10">
                        <label className="block text-white  mb-2 z-10" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none  w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-[#4F00F1] rounded-3xl outline-none border-0"
                            id="email"
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>



                    <div className="mb-8 z-10">
                        <label className="block text-white  mb-2 z-10" htmlFor="password">
                            Password
                        </label>

                        <div className="relative flex items-center">
                            <input
                                className="shadow appearance-none  w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-[#4F00F1] rounded-3xl outline-none border-0"
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M19 12h.01M12 4a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" />
                                    </svg>
                                ) : (
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.94 7.94A5.002 5.002 0 0117 12a5.002 5.002 0 01-9.06 2.94M12 17.97V21M12 3v2.02" />
                                    </svg>
                                )}
                            </button>

                            
                        </div>

                        <div className="text-left mt-2 z-10 ">
                            <span className="text-white sm:text-[0.7rem] ">Forgot your password? <Link to="/signup" className="text-[#81F904] cursor-pointer underline"> Recover Password </Link></span>
                        </div>
                    </div>




                    <div className="flex items-center justify-between z-10">
                        <button
                            className="text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full bg-gradient-to-r from-[#F0B000] to-[#F029A0] z-10"
                            type="submit"
                        >
                            LOGIN{loading && <CircularProgress size={20} className="mx-2" />}
                        </button>
                    </div>

                    <div className="text-center mt-5 z-10 ">
                        <span className="text-white">Don't have an account ? <Link to="/Enroll" className="text-[#00FADF] cursor-pointer fonr-link"> Enroll Now </Link></span>
                    </div>
                </form>
         

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


export default Login;