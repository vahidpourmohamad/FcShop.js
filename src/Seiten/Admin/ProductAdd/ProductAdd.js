import { useQuery } from "@apollo/client";
import React, { Fragment, useState, useEffect } from "react";
import AdminSideMenu from "../../../Components/Admin/AdminSideMenu/AdminSideMenu";
import AdminTopNavbar from "../../../Components/Admin/AdminTopNavbar/AdminTopNavbar";
import { GET_CATEGORIES } from "../../../GraphQl/Queries";
import BulmaInputInLine from "../../../Utility/Bulmainputinline";
import BulmaInputSelectInline from "../../../Utility/BulmaInputSelectInline";
import { useForm } from "../../../Utility/Hooks";

import "./ProductAdd.css";
export default function ProductAdd() {
  const { onChange, onSubmit, values } = useForm(productAddCallback, {});
  const [categories, setCategories] = useState([]);
  const { error, loading, data } = useQuery(GET_CATEGORIES);
  useEffect(() => {
    console.log("test");
    if (!loading && !error) {
      console.log("test23");
      const { getCatgories } = data;
      console.log(getCatgories);
         setCategories(getCatgories);
    }
    return () => {
      // console.log(data);
      // console.log(getProducts[0]);
    };
  }, [data]);

  function productAddCallback() {}
  return (
    <Fragment>
      <div className="" dir="rtl">
        <AdminTopNavbar />
        <div className="hero is-fullheight ">
          <div class="columns is-variable is-vcentered  ">
            <AdminSideMenu></AdminSideMenu>
            <div className="column is-8 is-offset-1 ">
              <div className="box">
                <div className="columns is-centered is-vcentered ">
                  <div className="column is-6">
                    <p className="title is-6 colored ">اضافه کردن محصول</p>
                    <p className="description">
                      در این قسمت لطفا تمام اطلاعات مربوز به محصول را وارد کنید
                      در ضمن اطلاعات ضروری به صورت هشدار تنمایش داده شده است
                    </p>
                    <form className="box ">
                      <BulmaInputInLine
                        name="ProductName"
                        icon="fa fa-user"
                        onChange={onChange}
                        require={true}
                        type="text"
                        text="نام محصول"
                      ></BulmaInputInLine>
                      <BulmaInputInLine
                        name="ProductName"
                        icon="fa fa-user"
                        onChange={onChange}
                        require={true}
                        type="text"
                        text="نام محصول"
                      ></BulmaInputInLine>
                      <BulmaInputInLine
                        name="ProductName"
                        icon="fa fa-user"
                        onChange={onChange}
                        require={true}
                        type="text"
                        text="نام محصول"
                                          ></BulmaInputInLine>
                                          
                      <BulmaInputSelectInline
                        name="Category"
                        onChange={onChange}
                        require={false}
                        selectData={categories}
                        text="دسته بندی"
                      />
                    </form>
                  </div>
                  <div className="column is-6">
                    <p className="title is-6 colored ">گالری تصاویر محصول</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
