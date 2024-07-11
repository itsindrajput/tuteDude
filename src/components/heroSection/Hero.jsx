import React from "react";
import style from "./Hero.module.css";
import Card from "./Card";

import image1 from "../../assets/Hero_Card_Img_1.png";
import image2 from "../../assets/Hero_Card_Img_2.png";
import image3 from "../../assets/Hero_Card_Img_3.png";
import image4 from "../../assets/Hero_Card_Img_4.png";

const cardsData = [
  {
    image: image1,
    title: "24",
    description: "Courses",
  },
  {
    image: image2,
    title: "30k+",
    description: "Learners",
  },
  {
    image: image3,
    title: "100k+",
    description: "Doubts Solved",
  },
  {
    image: image4,
    title: "10k+",
    description: "Student Projects",
  },
];

const Hero = () => {
  return (
    <>
      <div className={style.section_one}>
        <h5>
          🎓 An <b>IIT Delhi</b> Alumni Initiative
        </h5>
        <h1>
          Become an Expert in the field of <b> Data Science with 6 courses</b>
        </h1>
        <p>
          A specially crafted Tech Kickstarter, with 5+ extensive online
          courses.
        </p>

        <ul className={style.award}>
          <li>✴️ Personal Mentorship</li>
          <li>✴️ Internship Assistance</li>
          <li>✴️ Industry Certified Courses</li>
        </ul>

        <ul className={style.enroll}>
          <li>
            <button>Enroll Now ↗️</button>
          </li>
          <li>Know More ❓</li>
        </ul>
      </div>

      <div className={style.section_two}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Hero;
