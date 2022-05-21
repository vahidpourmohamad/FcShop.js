import React from "react";
import "./MenuCmp.css";
import Logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";

export default function MenuCmp() {
  const t = "627a7f83a1ef622dc1e466e0";
  return (
    <div className="MenucmpContainer" dir="rtl">
      <div className="MenucmpParent">
        <div className="MenuLogo">
          <img src={Logo}></img>{" "}
        </div>
        <div className="MenuIteam">
          <ul>
            <li>
              <a href="#">
                <Link to="/">خانه</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to={`/ProduktSeite/${t}`} key={t}>
                  Prüfung
                </Link>
              </a>
            </li>
            <li>
              <Link to="/UberSeite">درباره ما</Link>
            </li>
            <li>
              <Link to="/BloggenSeite">بلاگ</Link>
            </li>
            <li>
              <a href="/KontaktSeite">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div className="MenuIcon">
          <a href="#">
            <Link className="fa fa-user-o fa-2x " to="/login"></Link>
          </a>

          <a href="#" className="fa fa-shopping-cart fa-2x "></a>

          <a href="#" className="fa fa-heart-o fa-2x "></a>
        </div>
      </div>
    </div>
  );
}
