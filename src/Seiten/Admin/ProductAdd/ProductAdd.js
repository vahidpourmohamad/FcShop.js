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
import ColorPicker from "../../../Utility/ColorPicker";
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

  const [colorArray, setColorArray] = useState({ 0: "#d9e3f0" });

  const colorAddClick = (event) => {
    event.preventDefault();

    let length = Object.keys(colorArray).length;
    console.log(Object.keys(colorArray).length);
    if (colorArray[length]) {
      length += 10;
    }
    setColorArray({
      ...colorArray,
      [length]: "#d9e3f0",
    });
  };
  const colorRemoveClick = (id) => {
    if (Object.keys(colorArray).length > 1) {
      delete colorArray[id];
      setColorArray({ ...colorArray });
    }
  };
  const colorChosenClick = (color, id) => {
    setColorArray({ ...colorArray, [id]: color });
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
                      {Object.keys(colorArray).map((key, index) => (
                        <div key={index}>
                          <ColorPicker
                            id={key}
                            onPlus={colorAddClick}
                            onDelete={colorRemoveClick}
                            onChoose={colorChosenClick}
                            color={colorArray[key]}
                          />
                        </div>
                      ))}

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
