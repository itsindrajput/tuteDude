import React from "react";
import style from "./Course.module.css";
import TechCard from "./TechCard";

const techCourses = [
  {
    title: "C++",
    description: "Learn C++ for strong programming fundamentals.",
    button: "👁️ View Curriculum",
  },
  {
    title: "MERN Stack",
    description: "Master the MERN stack for high-demand projects.",
    button: "👁️ View Curriculum",
  },
  {
    title: "Data Structure & Algorithm",
    description:
      "Excel in Data Structures and Algorithms for interview success.",
    button: "👁️ View Curriculum",
  },
  {
    title: "Competitve Programming",
    description:
      "Excel in Data Structures and Algorithms for interview success.",
    button: "👁️ View Curriculum",
  },
];

const Course = () => {
  return (
    <>
      <div className={style.course_container}>
        <h5 className={style.course_title}>DATASCIENCE COURSE LEARNING PATH</h5>
        <h1 className={style.course_heading}>
          <b>Data Science</b> Course Curriculum
        </h1>

        <div className={style.cardContainer}>
          {techCourses.map((course, index) => (
            <TechCard
              key={index}
              title={course.title}
              description={course.description}
              button={course.button}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
