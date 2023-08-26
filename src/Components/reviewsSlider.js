import React, { useState, Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
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
import pethz from "../Assets/Images/pethz.png";




const ReviewSlider = () => {


  
      const CustomButtonGroupAsArrows = ({ next, previous }) => {
        return (
          <div
            style={{
              textAlign: "right",
            }}
          > 
            <button onClick={previous} className="w-[40px] h-[40px] bg-gradient-to-l from-[#F0B000] to-[#F029A0] text-white rounded-full cursor-pointer z-50"> <FontAwesomeIcon icon={faAngleLeft} /></button>
            <button onClick={next} className="w-[40px] h-[40px] bg-gradient-to-l from-[#F0B000] to-[#F029A0] text-white rounded-full cursor-pointer ml-3 z-50"><FontAwesomeIcon icon={faAngleRight} /></button>
          </div>
        );
      };



    return(

<div
className="z-50"
  style={{
    position: 'relative'
    
  }}
>
        <Carousel
    additionalTransfrom={0}
    arrows={false}
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container-padding-bottom"
    customButtonGroup={<CustomButtonGroupAsArrows />}
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite={false}
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1,
       
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
     
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1,
       
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



            <div className="review-slider w-full">
                    <div className="w-full flex  items-center py-3 flex-row border-collapse border-b-[1px] border-[#EDB8FF]">
                    <div className="flex flex-row space-x-3 w-full ">
                        <div className="customer-profile sm:w-[60px] sm:h[60px] rounded-full  relative">
                        <img
                            src={pethz}
                            alt=""
                            srcset=""
                            className=" object-cover "
                        />
                        </div>
                        <div className="customer-name flex flex-col text-left w-full">
                        <span className="text-white sm:text-[1rem] text-[0.8rem]">Anjello Zaheena</span>
                        <span className="text-gray-400 sm:text-[0.8rem] text-[0.7rem]">Student</span>
                        </div>
                    </div>
                    <div className="text-left items-end justify-end ">  <Rating name="read-only size-small" value={5} readOnly size="small" /></div>
                    </div>

                    <div className="w-full mt-5 ">
                    <p className="text-white text-justify sm:text-[0.7rem] lg:text-[0.8rem] text-[10px]">
                        When I hang out with my friends, we all play cording Tournament, its so much fun to learn C language. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    </div>
                </div>

                <div className="review-slider w-full">
                    <div className="w-full flex  items-center py-3 flex-row border-collapse border-b-[1px] border-[#EDB8FF]">
                    <div className="flex flex-row space-x-3 w-full ">
                        <div className="customer-profile sm:w-[60px] sm:h[60px] rounded-full  relative">
                        <img
                            src={pethz}
                            alt=""
                            srcset=""
                            className=" object-cover "
                        />
                        </div>
                        <div className="customer-name flex flex-col text-left w-full">
                        <span className="text-white sm:text-[1rem] text-[0.8rem]">Anjello Zaheena</span>
                        <span className="text-gray-400 sm:text-[0.8rem] text-[0.7rem]">Student</span>
                        </div>
                    </div>
                    <div className="text-left items-end justify-end ">  <Rating name="read-only size-small" value={5} readOnly size="small" /></div>
                    </div>

                    <div className="w-full mt-5 ">
                    <p className="text-white text-justify sm:text-[0.7rem] lg:text-[0.8rem] text-[10px]">
                        When I hang out with my friends, we all play cording Tournament, its so much fun to learn C language. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    </div>
                </div>

                <div className="review-slider w-full">
                    <div className="w-full flex  items-center py-3 flex-row border-collapse border-b-[1px] border-[#EDB8FF]">
                    <div className="flex flex-row space-x-3 w-full ">
                        <div className="customer-profile sm:w-[60px] sm:h[60px] rounded-full  relative">
                        <img
                            src={pethz}
                            alt=""
                            srcset=""
                            className=" object-cover "
                        />
                        </div>
                        <div className="customer-name flex flex-col text-left w-full">
                        <span className="text-white sm:text-[1rem] text-[0.8rem]">Anjello Zaheena</span>
                        <span className="text-gray-400 sm:text-[0.8rem] text-[0.7rem]">Student</span>
                        </div>
                    </div>
                    <div className="text-left items-end justify-end ">  <Rating name="read-only size-small" value={5} readOnly size="small" /></div>
                    </div>

                    <div className="w-full mt-5 ">
                    <p className="text-white text-justify sm:text-[0.7rem] lg:text-[0.8rem] text-[10px]">
                        When I hang out with my friends, we all play cording Tournament, its so much fun to learn C language. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    </div>
                </div>

                <div className="review-slider w-full">
                    <div className="w-full flex  items-center py-3 flex-row border-collapse border-b-[1px] border-[#EDB8FF]">
                    <div className="flex flex-row space-x-3 w-full ">
                        <div className="customer-profile sm:w-[60px] sm:h[60px] rounded-full  relative">
                        <img
                            src={pethz}
                            alt=""
                            srcset=""
                            className=" object-cover "
                        />
                        </div>
                        <div className="customer-name flex flex-col text-left w-full">
                        <span className="text-white sm:text-[1rem] text-[0.8rem]">Anjello Zaheena</span>
                        <span className="text-gray-400 sm:text-[0.8rem] text-[0.7rem]">Student</span>
                        </div>
                    </div>
                    <div className="text-left items-end justify-end ">  <Rating name="read-only size-small" value={5} readOnly size="small" /></div>
                    </div>

                    <div className="w-full mt-5 ">
                    <p className="text-white text-justify sm:text-[0.7rem] lg:text-[0.8rem] text-[10px]">
                        When I hang out with my friends, we all play cording Tournament, its so much fun to learn C language. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    </div>
                </div>
        </Carousel>
</div>
    );
}


export default ReviewSlider;