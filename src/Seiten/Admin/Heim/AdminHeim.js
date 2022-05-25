import React, { Fragment } from 'react'
import AdminSideMenu from '../../../Components/Admin/AdminSideMenu/AdminSideMenu'
import AdminTopNavbar from '../../../Components/Admin/AdminTopNavbar/AdminTopNavbar'
import './AdminHeim.css'
export default function AdminHeim() {
  return (
    <Fragment>
      <div className="" dir="rtl">
        <AdminTopNavbar />
        <div className="hero is-fullheight ">
          <div class="columns is-variable ">
            <AdminSideMenu></AdminSideMenu>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
