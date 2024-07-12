import React from "react";
import style from "./TechCard.module.css";

const TechCard = ({ title, description, button }) => {
  return (
    <>
      <div className={style.singleCard}>
        <div className={style.content}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <button>{button}</button>
      </div>
    </>
  );
};

export default TechCard;
