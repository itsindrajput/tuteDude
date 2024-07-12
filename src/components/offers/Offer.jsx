import React from "react";
import style from "./Offer.module.css";
import StepCard from "./StepCard";

import image1 from "../../assets/step1.png";
import image2 from "../../assets/step2.png";
import image3 from "../../assets/step3.png";

const stepData = [
  {
    image: image1,
    step: "Step 1",
    title: "Step 1 : Enroll into your favorite course for only ₹1,499",
    description: "Start Learning with Lifetime Course Access.",
  },
  {
    image: image2,
    step: "Step 2",
    title: "Step 2: Complete Course & Assignments within 2 Years!",

    description: "Finish the course within 2 Years to Qualify for Refund.",
  },
  {
    image: image3,
    step: "Step 3",
    title: "Step 3: Receive 100% Refund upon completion",
    description: "Upon Course Completion within 2 Years, Get Your ₹1,499 Back.",
  },
];

const Offer = () => {
  return (
    <>
      <div className={style.offer_Container}>
        <h1>
          Don't miss out on this <span>limited-time opportunity</span> to learn
          for <span>Free!</span>
        </h1>

        <div className={style.refund_Card}>
          <h5>100% Refund Offer 😎</h5>
          <div className={style.scrollbar_Container}>
            <p className={style.scrollbar_firstChild}>20 Seats Left</p>
            <div className={style.scrollbar}>
              <div></div>
            </div>
            <p className={style.scrollbar_lastChild}>
              ⏱️ Offer ends in 10:00Mins
            </p>
          </div>
        </div>

        <div className={style.work_Card_Container}>
          <h3>How does it work?</h3>

          <div className={style.step_Card_Container}>
            {stepData.map((data, index) => (
              <StepCard
                key={index}
                step={data.step}
                title={data.title}
                image={data.image}
                description={data.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
