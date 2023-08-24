import React, { useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import herobannerfront from '../Assets/Images/herobannerfront-01.png';
import gamer1 from '../Assets/Images/gamer_1.png';
import heroback from '../Assets/Images/heroBack-01.png';
import course1 from '../Assets/Images/c.png';
import lec from '../Assets/Images/lec.jpg';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Rating, Button } from "@mui/material";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';






const CourseCarousel = () => {

    return (

        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            partialVisible={true}
            responsive={{
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 3,
                    partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2,
                    
                    partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                    // partialVisibilityGutter: 10 // this is needed to tell the amount of px that should be visible.
                }

            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >

            <div className="course-card sm:w-[300px] sm:h-[500px] bg-[#2A0976] bg-opacity-60 rounded-xl flex flex-col relative h-[400px] ">
                <div className="top-cover w-full sm:h-[180px] bg-slate-500 rounded-t-xl">
                    <img src={course1} alt="" srcset="" className="object-cover w-[100%] h-[100%] rounded-t-xl" />
                </div>
                <div className="card-content p-3 w-full">
                    <div className="row-1  w-full justify-between flex flex-row">
                        <span className="text-[0.6rem] text-white justify-start">View more</span>
                        <span className="text-[0.6rem] text-white ">10+ Short Notes and Helpless Videos</span>
                    </div>
                    <p className="sm:text-[1rem] text-white justify-start text-left mt-5 text-[12px]">
                        Exploring the Foundations: An Introduction to Programming in C Language
                    </p>
                    <div className="mt-5 w-full border-b-[1px] border-t-[1px] border-gray-50 flex flex-row justify-center items-center">
                        <div className="lecture-profile  flex flex-row w-2/3 justify-center items-center">
                            <div className="lec-img  rounded-full relative sm:w-[80px] sm:h-[80px] p-2 w-[50px] h-[50px] ">
                                <img src={lec} alt="" srcset="" className="object-cover w-full h-full rounded-full" />
                            </div>
                            <div className="p-2 text-left  ">
                                <h5 className="text-white sm:text-[1rem] text-[10px]">Adam Nore</h5>
                                <span className="text-gray-300 sm:text-[0.7rem] text-[9px]">C Developer</span>
                            </div>
                        </div>
                        <div className="student-count justify-end flex flex-row w-1/3 ">
                            <span className="text-white sm:text-[0.7rem] text-[9px]">50+ Students</span>
                        </div>
                    </div>
                    <div className="row-2  w-full justify-center text-center flex flex-col mt-3 items-center">
                        <Rating name="read-only" value={3} readOnly />
                        <span className="text-white sm:text-[1rem] text-[12px] mt-2 underline">Enroll Now</span>
                    </div>
                </div>
            </div>



            <div className="course-card sm:w-[300px] sm:h-[500px] bg-[#2A0976] bg-opacity-60 rounded-xl flex flex-col relative h-[400px]">
                <div className="top-cover w-full sm:h-[180px] bg-slate-500 rounded-t-xl">
                    <img src={course1} alt="" srcset="" className="object-cover w-[100%] h-[100%] rounded-t-xl" />
                </div>
                <div className="card-content p-3 w-full">
                    <div className="row-1  w-full justify-between flex flex-row">
                        <span className="text-[0.6rem] text-white justify-start">View more</span>
                        <span className="text-[0.6rem] text-white ">10+ Short Notes and Helpless Videos</span>
                    </div>
                    <p className="sm:text-[1rem] text-white justify-start text-left mt-5 text-[12px]">
                        Exploring the Foundations: An Introduction to Programming in C Language
                    </p>
                    <div className="mt-5 w-full border-b-[1px] border-t-[1px] border-gray-50 flex flex-row justify-center items-center">
                        <div className="lecture-profile  flex flex-row w-2/3 justify-center items-center">
                            <div className="lec-img  rounded-full relative sm:w-[80px] sm:h-[80px] p-2 w-[50px] h-[50px] ">
                                <img src={lec} alt="" srcset="" className="object-cover w-full h-full rounded-full" />
                            </div>
                            <div className="p-2 text-left  ">
                                <h5 className="text-white sm:text-[1rem] text-[10px]">Adam Nore</h5>
                                <span className="text-gray-300 sm:text-[0.7rem] text-[9px]">C Developer</span>
                            </div>
                        </div>
                        <div className="student-count justify-end flex flex-row w-1/3 ">
                            <span className="text-white sm:text-[0.7rem] text-[9px]">50+ Students</span>
                        </div>
                    </div>
                    <div className="row-2  w-full justify-center text-center flex flex-col mt-3 items-center">
                        <Rating name="read-only" value={3} readOnly />
                        <span className="text-white sm:text-[1rem] text-[12px] mt-2 underline">Enroll Now</span>
                    </div>
                </div>
            </div>





            <div className="course-card sm:w-[300px] sm:h-[500px] bg-[#2A0976] bg-opacity-60 rounded-xl flex flex-col relative h-[400px]">
                <div className="top-cover w-full sm:h-[180px] bg-slate-500 rounded-t-xl">
                    <img src={course1} alt="" srcset="" className="object-cover w-[100%] h-[100%] rounded-t-xl" />
                </div>
                <div className="card-content p-3 w-full">
                    <div className="row-1  w-full justify-between flex flex-row">
                        <span className="text-[0.6rem] text-white justify-start">View more</span>
                        <span className="text-[0.6rem] text-white ">10+ Short Notes and Helpless Videos</span>
                    </div>
                    <p className="sm:text-[1rem] text-white justify-start text-left mt-5 text-[12px]">
                        Exploring the Foundations: An Introduction to Programming in C Language
                    </p>
                    <div className="mt-5 w-full border-b-[1px] border-t-[1px] border-gray-50 flex flex-row justify-center items-center">
                        <div className="lecture-profile  flex flex-row w-2/3 justify-center items-center">
                            <div className="lec-img  rounded-full relative sm:w-[80px] sm:h-[80px] p-2 w-[50px] h-[50px] ">
                                <img src={lec} alt="" srcset="" className="object-cover w-full h-full rounded-full" />
                            </div>
                            <div className="p-2 text-left  ">
                                <h5 className="text-white sm:text-[1rem] text-[10px]">Adam Nore</h5>
                                <span className="text-gray-300 sm:text-[0.7rem] text-[9px]">C Developer</span>
                            </div>
                        </div>
                        <div className="student-count justify-end flex flex-row w-1/3 ">
                            <span className="text-white sm:text-[0.7rem] text-[9px]">50+ Students</span>
                        </div>
                    </div>
                    <div className="row-2  w-full justify-center text-center flex flex-col mt-3 items-center">
                        <Rating name="read-only" value={3} readOnly />
                        <span className="text-white sm:text-[1rem] text-[12px] mt-2 underline">Enroll Now</span>
                    </div>
                </div>
            </div>




            <div className="course-card sm:w-[300px] sm:h-[500px] bg-[#2A0976] bg-opacity-60 rounded-xl flex flex-col relative h-[400px]">
                <div className="top-cover w-full sm:h-[180px] bg-slate-500 rounded-t-xl">
                    <img src={course1} alt="" srcset="" className="object-cover w-[100%] h-[100%] rounded-t-xl" />
                </div>
                <div className="card-content p-3 w-full">
                    <div className="row-1  w-full justify-between flex flex-row">
                        <span className="text-[0.6rem] text-white justify-start">View more</span>
                        <span className="text-[0.6rem] text-white ">10+ Short Notes and Helpless Videos</span>
                    </div>
                    <p className="sm:text-[1rem] text-white justify-start text-left mt-5 text-[12px]">
                        Exploring the Foundations: An Introduction to Programming in C Language
                    </p>
                    <div className="mt-5 w-full border-b-[1px] border-t-[1px] border-gray-50 flex flex-row justify-center items-center">
                        <div className="lecture-profile  flex flex-row w-2/3 justify-center items-center">
                            <div className="lec-img  rounded-full relative sm:w-[80px] sm:h-[80px] p-2 w-[50px] h-[50px] ">
                                <img src={lec} alt="" srcset="" className="object-cover w-full h-full rounded-full" />
                            </div>
                            <div className="p-2 text-left  ">
                                <h5 className="text-white sm:text-[1rem] text-[10px]">Adam Nore</h5>
                                <span className="text-gray-300 sm:text-[0.7rem] text-[9px]">C Developer</span>
                            </div>
                        </div>
                        <div className="student-count justify-end flex flex-row w-1/3 ">
                            <span className="text-white sm:text-[0.7rem] text-[9px]">50+ Students</span>
                        </div>
                    </div>
                    <div className="row-2  w-full justify-center text-center flex flex-col mt-3 items-center">
                        <Rating name="read-only" value={3} readOnly />
                        <span className="text-white sm:text-[1rem] text-[12px] mt-2 underline">Enroll Now</span>
                    </div>
                </div>
            </div>




            <div className="course-card sm:w-[300px] sm:h-[500px] bg-[#2A0976] bg-opacity-60 rounded-xl flex flex-col relative h-[400px]">
                <div className="top-cover w-full sm:h-[180px] bg-slate-500 rounded-t-xl">
                    <img src={course1} alt="" srcset="" className="object-cover w-[100%] h-[100%] rounded-t-xl" />
                </div>
                <div className="card-content p-3 w-full">
                    <div className="row-1  w-full justify-between flex flex-row">
                        <span className="text-[0.6rem] text-white justify-start">View more</span>
                        <span className="text-[0.6rem] text-white ">10+ Short Notes and Helpless Videos</span>
                    </div>
                    <p className="sm:text-[1rem] text-white justify-start text-left mt-5 text-[12px]">
                        Exploring the Foundations: An Introduction to Programming in C Language
                    </p>
                    <div className="mt-5 w-full border-b-[1px] border-t-[1px] border-gray-50 flex flex-row justify-center items-center">
                        <div className="lecture-profile  flex flex-row w-2/3 justify-center items-center">
                            <div className="lec-img  rounded-full relative sm:w-[80px] sm:h-[80px] p-2 w-[50px] h-[50px] ">
                                <img src={lec} alt="" srcset="" className="object-cover w-full h-full rounded-full" />
                            </div>
                            <div className="p-2 text-left  ">
                                <h5 className="text-white sm:text-[1rem] text-[10px]">Adam Nore</h5>
                                <span className="text-gray-300 sm:text-[0.7rem] text-[9px]">C Developer</span>
                            </div>
                        </div>
                        <div className="student-count justify-end flex flex-row w-1/3 ">
                            <span className="text-white sm:text-[0.7rem] text-[9px]">50+ Students</span>
                        </div>
                    </div>
                    <div className="row-2  w-full justify-center text-center flex flex-col mt-3 items-center">
                        <Rating name="read-only" value={3} readOnly />
                        <span className="text-white sm:text-[1rem] text-[12px] mt-2 underline">Enroll Now</span>
                    </div>
                </div>
            </div>




        </Carousel>

    );

}






export default CourseCarousel;