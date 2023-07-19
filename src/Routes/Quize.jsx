import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";

function Quize() {
  return (
    <div className="main-wrapper w-full h-full bg-slate-100 mt-[96px] ">
      <div className="main-body-wrapper text-center items-center">
        <div className="body-content text-center h-full">
          <div className="quize-form-body w-full flex flex-col bg-slate-100 h-full space-y-5">

            <div className="process-nav flex flex-row h-[110px] bg-white w-full shadow-md shadow-slate-300 ">

              <div className="process p-3 flex flex-row justify-center items-center w-1/3">
                <div className="w-[70%] mx-auto flex flex-row justify-center items-center">
                  <div className="w-full flex flex-col text-left ">
                    <h4 className="nav-head font-semibold text-[#191919]">
                      1. Student Details
                    </h4>
                    <h5 className="text-[#5d5d5d]">
                      Lorem ipsum dolor sit amet.
                    </h5>
                  </div>
                  <div className="w-full">
                   <span className="text-[18pt] text-green-600"><FontAwesomeIcon icon={faCheck} /></span> 
                  </div>
                </div>
              </div>

              <div className="process p-3 flex flex-col justify-center items-center w-1/3 border-gray-300 border-r-[1px] border-l-[1px]">
                <div className="w-[70%] mx-auto flex flex-row justify-center items-center">
                  <div className="w-full flex flex-col text-left ">
                    <h4 className="nav-head font-semibold text-[#191919]">
                      2. Overall questions of C Language
                    </h4>
                    <h5 className="text-[#5d5d5d]">
                      Lorem ipsum dolor sit amet.
                    </h5>
                  </div>
                  <div className="w-full">
                   <span className="text-[18pt] text-green-600"><FontAwesomeIcon icon={faCheck} /></span> 
                  </div>
                </div>
              </div>

              <div className="process p-3 flex flex-col justify-center items-center w-1/3">
                <div className="w-[70%] mx-auto flex flex-row justify-center items-center">
                  <div className="w-full flex flex-col text-left ">
                    <h4 className="nav-head font-semibold text-[#191919]">
                      3. Create Profile
                    </h4>
                    <h5 className="text-[#5d5d5d]">
                      Lorem ipsum dolor sit amet.
                    </h5>
                  </div>
                  <div className="w-full">
                   <span className="text-[18pt] text-green-600"><FontAwesomeIcon icon={faCheck} /></span> 
                  </div>
                </div>
              </div>

            </div>

            <div className="quize-panel p-5 w-full h-full flex flex-row bg-white ">
              <div className="quize-items p-2 h-full w-1/4 space-y-5  border-r-[1px] border-slate-300 bg-white ">
                <div className="quize-item-card flex flex-row w-full justify-center items-center space-x-5 p-2">
                  <div className="quize-item-number w-[48px] h-[48px] bg-blue-950 rounded-full justify-center items-center flex shadow-md shadow-slate-400">
                    <h4 className="font-semibold text-white ">01</h4>
                  </div>
                  <div className="q-name w-full flex flex-col space-y-1 text-left ">
                    <span className="text-[#1f1f71]">Lecture 01</span>
                    <h3 className="text-[#1f1f71] font-semibold text-[14pt]">
                      Introduction to Programming
                    </h3>
                  </div>
                </div>

                <div className="quize-item-card flex flex-row w-full justify-center items-center space-x-5 p-2">
                  <div className="quize-item-number w-[48px] h-[48px] bg-white border-2 rounded-full justify-center items-center flex">
                    <h4 className="font-semibold text-[#828282] ">02</h4>
                  </div>
                  <div className="q-name w-full flex flex-col space-y-1 text-left">
                    <span className="text-[#828282]">Lecture 02</span>
                    <h3 className="text-[#828282] font-semibold text-[14pt]">
                      Data Types and C Formatted Input/Output
                    </h3>
                  </div>
                </div>

                <div className="quize-item-card flex flex-row w-full justify-center items-center space-x-5 p-2">
                  <div className="quize-item-number w-[48px] h-[48px] bg-white border-2 rounded-full justify-center items-center flex">
                    <h4 className="font-semibold text-[#828282] ">03</h4>
                  </div>
                  <div className="q-name w-full flex flex-col space-y-1 text-left">
                    <span className="text-[#828282]">Lecture 03</span>
                    <h3 className="text-[#828282] font-semibold text-[14pt]">
                      Operations in C
                    </h3>
                  </div>
                </div>

                <div className="quize-item-card flex flex-row w-full justify-center items-center space-x-5 p-2">
                  <div className="quize-item-number w-[48px] h-[48px] bg-white border-2 rounded-full justify-center items-center flex">
                    <h4 className="font-semibold text-[#828282] ">04</h4>
                  </div>
                  <div className="q-name w-full flex flex-col space-y-1 text-left">
                    <span className="text-[#828282]">Lecture 04</span>
                    <h3 className="text-[#828282] font-semibold text-[14pt]">
                      Selection Statements in C
                    </h3>
                  </div>
                </div>

                <div className="quize-item-card flex flex-row w-full justify-center items-center space-x-5 p-2">
                  <div className="quize-item-number w-[48px] h-[48px] bg-white border-2 rounded-full justify-center items-center flex">
                    <h4 className="font-semibold text-[#828282] ">05</h4>
                  </div>
                  <div className="q-name w-full flex flex-col space-y-1 text-left">
                    <span className="text-[#828282]">Lecture 05</span>
                    <h3 className="text-[#828282] font-semibold text-[14pt]">
                      Repetation Statements in C
                    </h3>
                  </div>
                </div>

                <div className="quize-item-card flex flex-row w-full justify-center items-center space-x-5 p-2">
                  <div className="quize-item-number w-[48px] h-[48px] bg-white border-2 rounded-full justify-center items-center flex">
                    <h4 className="font-semibold text-[#828282] ">06</h4>
                  </div>
                  <div className="q-name w-full flex flex-col space-y-1 text-left">
                    <span className="text-[#828282]">Lecture 06</span>
                    <h3 className="text-[#828282] font-semibold text-[14pt]">
                      Functions
                    </h3>
                  </div>
                </div>

                <div className="quize-item-card flex flex-row w-full justify-center items-center space-x-5 p-2">
                  <div className="quize-item-number w-[48px] h-[48px] bg-white border-2 rounded-full justify-center items-center flex">
                    <h4 className="font-semibold text-[#828282] ">07</h4>
                  </div>
                  <div className="q-name w-full flex flex-col space-y-1 text-left">
                    <span className="text-[#828282]">Lecture 07</span>
                    <h3 className="text-[#828282] font-semibold text-[14pt]">
                      Array
                    </h3>
                  </div>
                </div>

                <div className="quize-item-card flex flex-row w-full justify-center items-center space-x-5 p-2">
                  <div className="quize-item-number w-[48px] h-[48px] bg-white border-2 rounded-full justify-center items-center flex">
                    <h4 className="font-semibold text-[#828282] ">08</h4>
                  </div>
                  <div className="q-name w-full flex flex-col space-y-1 text-left">
                    <span className="text-[#828282]">Lecture 08</span>
                    <h3 className="text-[#828282] font-semibold text-[14pt]">
                      File Handling
                    </h3>
                  </div>
                </div>
              </div>

              <div className="quize-area p-5 w-3/4  flex flex-col ">
                <div className="qa-head p-5 flex flex-col text-left border-b-[1px] border-gray-300">
                  <h3 className="text-[#1f1f71] text-[14pt]">Lecture 01</h3>
                  <h2 className="text-[#1f1f71] font-semibold text-[20pt]">
                    Introduction to Programming
                  </h2>
                  <p className="text-[#828282]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate officia fuga suscipit dicta velit similique
                    veritatis autem odit ea voluptatibus.
                  </p>
                </div>

                <div className="quize-generate-form p-5 flex flex-col text-left space-y-5">
                  <div className="w-full space-y-3">
                    <h3 className="text-[14pt] font-semibold">
                      1. Describe the key characteristics of programming and
                      explain how it differs from other problem-solving
                      approaches. Provide examples to support your answer. ?
                    </h3>
                    <textarea
                      name="postContent"
                      rows={6}
                      cols={40}
                      placeholder="Type here..."
                      className="border-2 border-gray-200 rounded-lg resize-none w-full p-3"
                    />
                  </div>

                  <div className="w-full space-y-3">
                    <h3 className="text-[14pt] font-semibold">
                      2. Explain the concepts of algorithms and flowcharts.
                      Discuss their importance in the programming process and
                      provide an example of a simple algorithm along with its
                      corresponding flowchart.
                    </h3>
                    <textarea
                      name="postContent"
                      rows={6}
                      cols={40}
                      placeholder="Type here..."
                      className="border-2 border-gray-200 rounded-lg resize-none w-full p-3"
                    />
                  </div>

                  <div className="btn-holder text-right text-white font-semibold">
                    <input
                      type="button"
                      value="Next"
                      className="w-[108px] py-2 bg-blue-500 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quize;
