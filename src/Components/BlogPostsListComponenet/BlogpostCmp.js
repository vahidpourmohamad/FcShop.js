import React from "react";
import "./BlogpostCmp.css";
export default function BlogpostCmp(props) {

 const { id, title, datetime, link, author, image } = props; 
  return (
    <div className="BlogpostCmpcontainer">
      <div className="image">
        <img src={`${process.env.PUBLIC_URL}/Assets/Banners/` + image}></img>
      </div>
      <div className="textcontainer">
        <div className="date">{datetime}</div>
        <div className="title">{title}</div>
      </div>

      <div className="btn">ادامه مطلب</div>
    </div>
  );
}
