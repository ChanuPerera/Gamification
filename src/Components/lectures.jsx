import React from "react";

const lectures = [
  {
    lectureNo: "01",
    lectureName: "Introduction to programming",
  },
  {
    lectureNo: "02",
    lectureName: "Data Types and C Formatted Input/Output",
  },
  {
    lectureNo: "03",
    lectureName: "Operators in C",
  },
  {
    lectureNo: "04",
    lectureName: "Selection Statements in C / Character Handling",
  },
  {
    lectureNo: "05",
    lectureName: "Repetition statements in C",
  },
  {
    lectureNo: "06",
    lectureName: "Functions",
  },
  {
    lectureNo: "07",
    lectureName: "Arrays",
  },
  {
    lectureNo: "08",
    lectureName: "Arrays",
  },
];

const LectureList = () => {
  return (
    <div>
      {lectures.map((lecture, index) => (
        <div
          key={index}
          className="content-wrapper flex flex-row justify-between items-center w-full"
        >
          <div className="w-[40px] h-[40px] rounded-full justify-center items-center flex bg-white">
            <span className="quize-no text-black font-semibold">
              {lecture.lectureNo}
            </span>
          </div>
          <div className="text-white justify-start items-center text-left w-2/3">
            <h5 className="lecture-no text-white opacity-50 sm:text-[0.7rem]">
              Lecture {lecture.lectureNo}
            </h5>
            <h4 className="lecture-no text-white sm:text-[1rem]">
              {lecture.lectureName}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LectureList;
