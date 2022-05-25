import React, { Fragment } from "react";
import { $CombinedState } from "redux";
import "./AdminSideMenu.css";
export default function AdminSideMenu() {
  return (
    <Fragment>
      <aside className="column is-2 aside2 " id="aside">
        <div class="menu">
          <ul class="menu-list">
            <li>
              <a href="#" class="has-text-black">
                <i class="fa fa-tachometer icon"></i>
                داشبورد مدیریت
              </a>
            </li>
          </ul>
          <p class="menu-label has-text-lighter">محصولات</p>
          <ul class="menu-list">
            <li>
              <a href="#" class="has-text-black">
                <i class="fa fa-comments icon"></i>
                لیست محصولات
              </a>
            </li>
            <li>
              <a href="#" class="has-text-black">
                <i class="fa fa-info-circle icon"></i>
                اضافه کردن محصول
              </a>
            </li>
          </ul>
          <p class="menu-label has-text-lighter">کاربران</p>
          <ul class="menu-list">
            <li>
              <a href="#" class="has-text-black">
                <i class="fa fa-comments icon"></i>
                لیست کاربران
              </a>
            </li>
            <li>
              <a href="#" class="has-text-black">
                <i class="fa fa-info-circle icon"></i>
                اضافه کردن کاربران
              </a>
            </li>
          </ul>
          <p class="menu-label has-text-lighter">فروشها</p>
          <ul class="menu-list">
            <li>
              <a href="#" class="has-text-black">
                <i class="fa fa-comments icon"></i>
                لیست فروشها
              </a>
            </li>
            <li>
              <a href="#" class="has-text-black">
                <i class="fa fa-comments icon"></i>
                ارسال نشده ها
              </a>
            </li>
            <li>
              <a href="#" class="has-text-black">
                <i class="fa fa-comments icon"></i>
                رسیده ها
              </a>
            </li>
            <li>
              <a href="#" class="has-text-black">
                <i class="fa fa-info-circle icon"></i>
                گزارش آمار
              </a>
            </li>
          </ul>
          <p class="menu-label has-text-lighter">صفحات</p>
          <p class="menu-label has-text-lighter">نظرات</p>
          <p class="menu-label has-text-lighter">پشتیبانی</p>
        </div>
      </aside>
    </Fragment>
  );
}
