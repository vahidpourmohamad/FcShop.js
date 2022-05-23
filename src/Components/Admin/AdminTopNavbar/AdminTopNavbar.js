import React, { Fragment } from 'react'
import './AdminTopNavbar.css'
export default function AdminTopNavbar() {
  return (
    <Fragment>
      <nav class="navbar  box-shadow-y" dir="rtl">
        <div class="navbar-brand">
          <a
            role="button"
            class="navbar-burger toggler"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

          <a href="#" class="navbar-item has-text-weight-bold has-text-black">
            پنل مدیریت فروشگاه
          </a>
          <a
            role="button"
            class="navbar-burger nav-toggler"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu has-background-white">
          <div class="navbar-start">
            <a href="#" class="navbar-item">
              <i class="fa fa-home icon"></i>
              صفحه اصلی
            </a>
            <a href="#" class="navbar-item">
              درباره فروشگاه ساز
            </a>
            <a href="#" class="navbar-item">
              امکانات
            </a>
            <a href="#" class="navbar-item">
              خدمات پشتیبانی
            </a>
          </div>
          <div class="navbar-end">
            <a href="#" class="navbar-item">
              اعلانات
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a href="#" class="navbar-link">
                مدیریت
              </a>
              <div class="navbar-dropdown is-right">
                <a href="#" class="navbar-item">
                  صفحه کاربری
                </a>
                <a href="#" class="navbar-item">
                  تنظیمات
                </a>
                <hr class="navbar-divider" />
                <a href="#" class="navbar-item">
                  خروج
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
