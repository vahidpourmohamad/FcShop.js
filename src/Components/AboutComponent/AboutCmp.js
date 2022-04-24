import React from "react";
import "./AboutCmp.css";
export default function AboutCmp() {
  return (
    <div className="AboutCmpContainer">
      <div className="AboutCmpParent">
        <div className="imgleftcontainer">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Products/offer.png`}
            alt=""
          />
        </div>

        <div className="imgrightcontainer">
          <div className="topheader">درباره ما</div>
          <div className="Header">گروه صنعتی سوافاست</div>
          <div dir="rtl" className="text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن
            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
            لازم است
          </div>
        </div>
      </div>
    </div>
  );
}
