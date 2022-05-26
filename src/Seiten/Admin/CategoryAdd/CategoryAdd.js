import { useMutation, useQuery } from "@apollo/client";
import React, { Fragment, useState, useEffect } from "react";
import AdminSideMenu from "../../../Components/Admin/AdminSideMenu/AdminSideMenu";
import AdminTopNavbar from "../../../Components/Admin/AdminTopNavbar/AdminTopNavbar";
import BulmaInputSelectInline from "../../../Utility/BulmaInputSelectInline";
import { GET_CATEGORIES } from "../../../GraphQl/Queries";
import { useForm } from "../../../Utility/Hooks";
import "./CategoryAdd.css";
import BulmaInputInLine from "../../../Utility/Bulmainputinline";
import { useNavigate } from "react-router-dom";
import UploadAndDisplayImage from "../../../Utility/BulmaFileInput";
import { UPLOAD_FILE } from "../../../GraphQl/Mutations";
export default function CategoryAdd() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { onChange, onSubmit, values } = useForm(categoryAddCallback, {});
  const [categories, setCategories] = useState([]);
  const {
    error: categoriesError,
    loading: categoriesLoading,
    data: categoriesData,
  } = useQuery(GET_CATEGORIES);

  const [uploadFile, { loading }] = useMutation(UPLOAD_FILE, {
    Completed: (data) => console.log("data"),
  });

  useEffect(() => {
    console.log("eett");
    if (!categoriesLoading && !categoriesError) {
      const { getCatgories } = categoriesData;
      console.log(getCatgories);
      setCategories(getCatgories);
    }
  }, [categoriesData]);

  function categoryAddCallback() {
    console.log(values);
    const { imageFile } = values;

    console.log(imageFile);
    uploadFile({ variables: { file: imageFile } });
  }

  return (
    <Fragment>
      <div className="" dir="rtl">
        <AdminTopNavbar />
        <div className="hero is-fullheight ">
          <div class="columns is-variable  ">
            <AdminSideMenu></AdminSideMenu>
            <div className="column is-8 is-offset-1 ">
              <div className="box">
                <div className="columns is-centered ">
                  <div className="column is-6">
                    <p className="title is-6 colored ">اضافه کردن دسته بندی</p>
                    <p className="description">
                      لطفا دسته بندی مورد نظر خود را در این قسمت اضافه کنید
                    </p>
                    <form className="box " onSubmit={onSubmit}>
                      <BulmaInputInLine
                        name="ProductName"
                        icon="fa fa-folder"
                        onChange={onChange}
                        require={true}
                        type="text"
                        text="نام دسته بندی"
                      ></BulmaInputInLine>
                      <BulmaInputSelectInline
                        name="Category"
                        onChange={onChange}
                        require={false}
                        selectData={categories}
                        text="دسته بندی والد"
                      />
                      <div className="field">
                        <div className="control">
                          <button className="button is-block  is-success is-fullwidth is-medium">
                            ثبت دسته بندی
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="column is-6">
                    <p className="title is-6 colored "> تصویر دسته بندی</p>
                    <UploadAndDisplayImage
                      name="imageFile"
                      onChange={onChange}
                    />
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
