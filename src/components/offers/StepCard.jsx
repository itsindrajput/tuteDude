import React from "react";
import style from "./StepCard.module.css";

const StepCard = ({ step, title, image, description, index }) => {
  return (
    <>
      <ul className={style.stepCard}>
        <li className={style.stepCard_steps}>{step}</li>
        {index < 2 && <div className={style.card_hr}></div>}
        <div className={style.stepCard_bgColor}>
          <li className={style.stepCard_title}>{title}</li>
          <li>
            <img src={image} alt={title} className={style.card_image} />
          </li>
          <li className={style.stepCard_description}>{description}</li>
        </div>
      </ul>
    </>
  );
};

export default StepCard;
