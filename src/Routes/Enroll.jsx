import { useState } from "react";
import logo from '../Assets/Images/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import difbg from '../Assets/Images/differncebg-01.png';




const Enroll = () => {



    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(prevState => !prevState);
    const togglePasswordVisibility2 = () => setShowConfirmPassword(prevState => !prevState);




    return (
        <div className="w-full h-screen bg-[#0E063D] overflow-hidden">

            <div className="nav-wrapper w-full   fixed flex flex-col top-0 items-center justify-center bg-white bg-opacity-10 border-collapse border-b-[1px] border-opacity-40 border-white backdrop-blur-sm z-50">


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

                <div className="bottom-row w-full border-collapse border-t-[1px] border-white border-opacity-30">
                    <div className="flex flex-row full ">
                        <div className="w-1/3 flex flex-row p-5 bg-[#0E063D] bg-opacity-40 justify-center space-x-10">
                            <div className="flex flex-col">
                                <h4>Student Details</h4>
                                <p>Enter your Details</p>
                            </div>
                            <div>icon</div>
                        </div>
                        <div className="w-1/3 flex flex-row p-5 justify-center space-x-10">
                            <div className="flex flex-col">
                                <h4>Student Details</h4>
                                <p>Enter your Details</p>
                            </div>
                            <div>icon</div>
                        </div>
                        <div className="w-1/3 flex flex-row p-5 justify-center space-x-10">
                            <div className="flex flex-col">
                                <h4>Student Details</h4>
                                <p>Enter your Details</p>
                            </div>
                            <div>icon</div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="w-full h-screen bg-[#0E063D] mt-5 justify-center">
                <form onSubmit={handleSubmit} className="bg-[#331497] mx-auto rounded-2xl px-8 py-5 mb-4 w-[400px] h-auto  flex flex-col justify-center overflow-clip relative top-1/2 -translate-y-1/2 backdrop-blur-md z-40">

                    <h3 className="mb-6 text-center text-xl z-10 text-white uppercase font-link">Lets get Started</h3>
                    <div className="mb-8 z-10">
                        <label className="block text-white  mb-2 z-10" htmlFor="email">
                            Student Email
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
                        <label className="block text-white  mb-2 z-10" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none  w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-[#4F00F1] rounded-3xl outline-none border-0"
                            id="username"
                            type="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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


                    </div>




                    <div className="mb-8 z-10">
                        <label className="block text-white  mb-2 z-10" htmlFor="confirmPassword">
                            Re-Enter Password
                        </label>

                        <div className="relative flex items-center">
                            <input
                                className="shadow appearance-none  w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-[#4F00F1] rounded-3xl outline-none border-0"
                                id="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'confirmPassword'}
                                placeholder="confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                                onClick={togglePasswordVisibility2}
                            >
                                {showConfirmPassword ? (
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


                    </div>




                    <Link to="/Dashboard"><div className="flex items-center justify-between z-10">
                        <button
                            className="text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full bg-gradient-to-r from-[#F0B000] to-[#F029A0] z-10"
                            type="submit"
                        >
                            LOGIN
                        </button>
                    </div></Link>

                    <div className="text-center mt-5 z-10 ">
                        <span className="text-white">Already have an account ? <Link to="/Login" className="text-[#00FADF] cursor-pointer fonr-link"> Login </Link></span>
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



export default Enroll;