import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.header_items}>
        <ul className={style.header_item1}>
          <li>LOGO</li>
        </ul>

        <ul className={style.header_item2}>
          <li>Login</li>
          <li>
            <button>Signup</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
