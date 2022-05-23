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

      <div class="column  is-variable is-10">
        <i
          className="fa fa-bars has-text-left"
          id="toggleButton"
          style={{ cursor: "pointer" }}
        ></i>

        <div class="p-1">
          <div class="columns is-variable is-desktop">
            <div class="column">
              <h1 class="title"></h1>
            </div>
          </div>

          <div class="columns  is-variable is-desktop">
            <div class="column">
              <div class="card has-background-primary has-text-white">
                <div class="card-header">
                  <div class="card-header-title has-text-white">
                    Top Seller Total
                  </div>
                </div>
                <div class="card-content">
                  <p class="is-size-3">56,590</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card has-background-warning has-text-black">
                <div class="card-header">
                  <div class="card-header-title has-text-black is-uppercase">
                    Revenue
                  </div>
                </div>
                <div class="card-content">
                  <p class="is-size-3">55%</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card has-background-info has-text-white">
                <div class="card-header">
                  <div class="card-header-title has-text-white is-uppercase">
                    Feedback
                  </div>
                </div>
                <div class="card-content">
                  <p class="is-size-3">78 %</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card has-background-danger has-text-white">
                <div class="card-header">
                  <div class="card-header-title has-text-white">Orders</div>
                </div>
                <div class="card-content">
                  <p class="is-size-3">425k</p>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-variable">
            <div class="column is-4-desktop is-6-tablet">
              <article class="message is-info">
                <div class="message-header">
                  <p>Info</p>
                  <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <strong>Pellentesque risus mi</strong>, tempus quis placerat
                  ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                  fringilla. Nullam gravida purus diam, et dictum
                  <a>felis venenatis</a> efficitur. Aenean ac
                  <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu
                  et sollicitudin porttitor, tortor urna tempor ligula, id
                  porttitor mi magna a neque. Donec dui urna, vehicula et sem
                  eget, facilisis sodales sem.
                </div>
              </article>
            </div>
            <div class="column is-4-desktop is-6-tablet">
              <article class="message is-success">
                <div class="message-header">
                  <p>Info</p>
                  <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <strong>Pellentesque risus mi</strong>, tempus quis placerat
                  ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                  fringilla. Nullam gravida purus diam, et dictum
                  <a>felis venenatis</a> efficitur. Aenean ac
                  <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu
                  et sollicitudin porttitor, tortor urna tempor ligula, id
                  porttitor mi magna a neque. Donec dui urna, vehicula et sem
                  eget, facilisis sodales sem.
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <script>(document).ready(function() );</script>
    </Fragment>
  );
}
