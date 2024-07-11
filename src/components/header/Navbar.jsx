import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
        <ul>
          <li className={style.selected}>Overview</li>
          <li>Curriculum</li>
          <li>Refund</li>
          <li>Testimonials</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
