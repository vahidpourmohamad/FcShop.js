import React from "react";
import "./MenuCmp.css";
import Logo from "../../Assets/Images/logo.png";

export default function MenuCmp() {
  return (
    <div className="MenucmpContainer" dir="rtl">
      <div className="MenucmpParent">
        <div className="MenuLogo">
          <img src={Logo}></img>{" "}
        </div>
        <div className="MenuIteam">
          <ul>
            <li>
              <a href="#" >
                خانه
              </a>
            </li>
            <li>
              <a href="#" >
                درباره ما
              </a>
            </li>
            <li>
              <a href="#" >
                بلاگ
              </a>
            </li>
            <li>
              <a href="#" >
                تماس با ما
              </a>
            </li>
          </ul>
        </div>
        <div className="MenuIcon">
          <a href="#" className="fa fa-user-o fa-2x "></a>
          <a href="#" className="fa fa-shopping-cart fa-2x "></a>
          <a href="#" className="fa fa-heart-o fa-2x "></a>
        </div>
      </div>
    </div>
  );
}
