import { useMutation, useQuery } from "@apollo/client";
import React, { Fragment, useState, useEffect } from "react";
import ActionableList from "../../../Components/Admin/ActionableList/ActionableList";
import AdminSideMenu from "../../../Components/Admin/AdminSideMenu/AdminSideMenu";
import AdminTopNavbar from "../../../Components/Admin/AdminTopNavbar/AdminTopNavbar";
import { DELETE_CATEGORY } from "../../../GraphQl/Mutations";
import { GET_CATEGORIES } from "../../../GraphQl/Queries";
import BulmaInputInLine from "../../../Utility/Bulmainputinline";
import BulmaInputSelectInline from "../../../Utility/BulmaInputSelectInline";
import { useForm } from "../../../Utility/Hooks";

export default function CategoryList() {
  //* Category Read State
  const {
    error: categoriesError,
    loading: categoriesLoading,
    data: categoriesData,
  } = useQuery(GET_CATEGORIES, { pollInterval: 500 });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (!categoriesLoading && !categoriesError) {
      const { getCatgories } = categoriesData;
      setCategories(getCatgories);
    }
  }, [categoriesData]);
  //*

  //*Delete Category Mutation
  const [deleteCategoryMutation] = useMutation(DELETE_CATEGORY, {
    onCompleted: () => {},
  });
  //
  const { onChange, onSubmit, values } = useForm;
  const headerList = ["ردیف", "نام دسته", "آیکون"];

  const deleteFunction = (Id) => {
    console.log(Id);
    deleteCategoryMutation({ variables: { categoryId: Id } });
  };
  const editFunction = (event) => {
    event.preventDefault();
    const Id = event.target.id;
  };

  function insertFunction() {}

  return (
    <Fragment>
      <div className="" dir="rtl">
        <AdminTopNavbar />
        <div className="hero is-fullHeight ">
          <div class="columns is-variable  ">
            <AdminSideMenu></AdminSideMenu>
            <div className="column is-10  ">
              <div className="Box">
                <div class="columns is-variable is-multiline">
                  <div className="column is-12 " style={{marginTop:"20px"}}>
                    <h2 className="title">لیست دسته بندی ها</h2>
                    <div className="subtitle">
                      شما می توانید دسته بندی خود را در اینجا اصلاح کنید
                    </div>
                  </div>
                  <div className="column is-8 ">
                    <ActionableList
                      headerList={headerList}
                      listData={categories}
                      editFunction={editFunction}
                      deleteFunction={deleteFunction}
                      insertFunction={insertFunction}
                    ></ActionableList>
                  </div>

                  <div className="column is-4  ">
                    <form className="box " onSubmit={onSubmit}>
                      <BulmaInputInLine
                        name="CategoryName"
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
                          <button className="button is-fullwidth  is-success  is-small">
                            فیلتر دسته بندی
                          </button>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <button className="button  is-fullwidth   is-primary is-small">
                            اضافه کردن دسته جدید
                          </button>
                        </div>
                      </div>
                    </form>
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
