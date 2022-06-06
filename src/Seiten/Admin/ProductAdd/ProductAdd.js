import { useQuery } from "@apollo/client";
import React, { Fragment, useState, useEffect } from "react";
import AdminSideMenu from "../../../Components/Admin/AdminSideMenu/AdminSideMenu";
import AdminTopNavbar from "../../../Components/Admin/AdminTopNavbar/AdminTopNavbar";
import { GET_CATEGORIES } from "../../../GraphQl/Queries";
import BulmaInputInLine from "../../../Utility/Bulmainputinline";
import BulmaInputSelectInline from "../../../Utility/BulmaInputSelectInline";
import BulmaTextAreaInline from "../../../Utility/BulmaTextAreaInline";
import { useForm } from "../../../Utility/Hooks";
import { BlockPicker } from "react-color";
import "./ProductAdd.css";
export default function ProductAdd() {
  const { onChange, onSubmit, values } = useForm(productAddCallback, {});
  const [categories, setCategories] = useState([]);
  const { error, loading, data } = useQuery(GET_CATEGORIES);
  useEffect(() => {
    if (!loading && !error) {
      const { getCatgories } = data;

      setCategories(getCatgories);
    }
    return () => {};
  }, [data]);
  let colorPickerInit = {
    displayColorPicker: true,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  };
  const [colorPicker, setColorPicker] = useState();

  const colorPickerClick = (event) => {
    event.preventDefault();
    console.log("test");
    if (colorPicker == true) {
      setColorPicker(false);
    } else {
      setColorPicker(true);
    }
  };
  const cover = {
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };
  // pcode: String!
  // name: String!
  // category: String!
  // OLname: String!
  // price: String!
  // shortDescription: String!
  // LongDescription: String!
  // OLshortDescription: String!
  // OLLongDescription: String!
  // H: Float
  // W: Float
  // L: Float
  // wieght: Float
  // color: String!
  // material: String!
  // images: [String]
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
                        name="pcode"
                        icon="fa fa-user"
                        onChange={onChange}
                        require={true}
                        type="text"
                        text="کد محصول"
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
                      <BulmaInputInLine
                        name="price"
                        icon="fa fa-user"
                        onChange={onChange}
                        require={true}
                        type="text"
                        text="قیمت"
                      ></BulmaInputInLine>
                      <BulmaTextAreaInline
                        name="shortDescription"
                        onChange={onChange}
                        require={true}
                        row="2"
                        text="توضیح کوتاه"
                      ></BulmaTextAreaInline>
                      <div class="columns">
                        <div className="column is-6">
                          <BulmaInputInLine
                            name="H"
                            icon=""
                            onChange={onChange}
                            require={false}
                            type="text"
                            text="ارتفاع"
                          ></BulmaInputInLine>
                        </div>
                        <div className="column is-6">
                          <BulmaInputInLine
                            name="W"
                            icon=""
                            onChange={onChange}
                            require={false}
                            type="text"
                            text="عرض"
                          ></BulmaInputInLine>
                        </div>
                      </div>
                      <div class="columns">
                        <div className="column is-6">
                          <BulmaInputInLine
                            name="L"
                            icon=""
                            onChange={onChange}
                            require={false}
                            type="text"
                            text="طول"
                          ></BulmaInputInLine>
                        </div>
                        <div className="column is-6">
                          <BulmaInputInLine
                            name="wieght"
                            icon="fa fa-user"
                            onChange={onChange}
                            require={false}
                            type="text"
                            text="وزن"
                          ></BulmaInputInLine>
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <a
                            onClick={colorPickerClick}
                            className="button is-success  is-medium"
                          >
                              انتخاب رنگ
                          </a>
                        </div>
                      </div>
                      {colorPicker ? (
                        <div className="field">
                          <div className="control">
                            <BlockPicker
                              styles={{cover}}
                              onChangeComplete={onChange}
                              disableAlpha={true}
                            />
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}

                      <BulmaInputInLine
                        name="color"
                        icon="fa fa-user"
                        onChange={onChange}
                        require={true}
                        type="text"
                        text="رنگ"
                      ></BulmaInputInLine>
                      <BulmaInputInLine
                        name="material"
                        icon="fa fa-user"
                        onChange={onChange}
                        require={true}
                        type="text"
                        text="جنس"
                      ></BulmaInputInLine>
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
