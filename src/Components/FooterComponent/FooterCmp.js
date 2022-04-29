import React from "react";
import "./FooterCmp.css";
export default function FooterCmp() {
  return (
    <footer className="footerContainer">
      <div className="upfooterribonborder">
        <div className="upfooterriboncontainer">
          <div className="footerriboniteamcontainer">
            <div className="footerriboniteamtext">
              <div className="footerriboniteamtextHeading">
                هدیه های بی نظیر
              </div>
              <div className="footerriboniteamtextSubHeading">الان ببرید</div>
            </div>
            <div className="footerriboniteamimg">
              <i
                href="#"
                className="fa fa-solid fa-gift fa-3x"
                style={{ color: "var(--main)" }}
              ></i>
            </div>
          </div>
          <div className="footerriboniteamcontainer">
            <div className="footerriboniteamtext">
              <div className="footerriboniteamtextHeading">حمل ونقل رایگان</div>
              <div className="footerriboniteamtextSubHeading">حمل مطمئن</div>
            </div>
            <div className="footerriboniteamimg">
              <li
                href="#"
                className="fa fa-solid fa-truck fa-3x "
                style={{ color: "var(--main)" }}
              ></li>
            </div>
          </div>
          <div className="footerriboniteamcontainer">
            <div className="footerriboniteamtext">
              <div className="footerriboniteamtextHeading">پرداخت آنلاین</div>
              <div className="footerriboniteamtextSubHeading">پرداخت امن</div>
            </div>
            <div className="footerriboniteamimg">
              <li
                href="#"
                className="fa fa-solid fa-credit-card fa-3x "
                style={{ color: "var(--main)" }}
              ></li>
            </div>
          </div>
          <div className="footerriboniteamcontainer">
            <div className="footerriboniteamtext">
              <div className="footerriboniteamtextHeading">پشتیبانی</div>
              <div className="footerriboniteamtextSubHeading">
                پشتیبانی سریع
              </div>
            </div>
            <div className="footerriboniteamimg">
              <li
                href="#"
                className="fa fa-solid fa-headphones fa-3x"
                style={{ color: "var(--main)" }}
              ></li>
            </div>
          </div>
        </div>
      </div>
      <div className="FooterCmpcontainer">
        <div className="fiteam">
          <div className="fiteamhead">نماد اعتماد الکترونیک</div>
          <div className="fiteamline"></div>
          <div className="fiteamtext">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Banners/namad.jpg`}
            ></img>
          </div>
        </div>
        <div className="fiteam">
          <div className="fiteamhead">لگو اصلی</div>
          <div className="fiteamline"></div>
          <div className="fiteamtext">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Banners/namad.jpg`}
            ></img>
          </div>
        </div>
        <div className="fiteam">
          <div className="fiteamhead">درباره ما</div>
          <div className="fiteamline"></div>
          <div className="fiteamtext">این متن آماده و سر خود است</div>
        </div>
        <div className="fiteam">
          <div className="fiteamhead">منو</div>
          <div className="fiteamline"></div>
          <div className="fiteamtext">این منو هنوز آماده نشده است</div>
        </div>
      </div>
    </footer>
  );
}
