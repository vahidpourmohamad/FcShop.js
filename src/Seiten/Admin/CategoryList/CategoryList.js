import { useMutation, useQuery } from "@apollo/client";
import React, { Fragment, useState, useEffect } from "react";
import ActionableList from "../../../Components/Admin/ActionableList/ActionableList";
import AdminSideMenu from "../../../Components/Admin/AdminSideMenu/AdminSideMenu";
import AdminTopNavbar from "../../../Components/Admin/AdminTopNavbar/AdminTopNavbar";
import { GET_CATEGORIES } from "../../../GraphQl/Queries";
import { useForm } from "../../../Utility/Hooks";

export default function CategoryList() {
  //* Category Read State
  const {
    error: categoriesError,
    loading: categoriesLoading,
    data: categoriesData,
  } = useQuery(GET_CATEGORIES);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (!categoriesLoading && !categoriesError) {
      const { getCatgories } = categoriesData;
      setCategories(getCatgories);
      // console.log(categories);
    }
  }, [categoriesData]);
  //*
  const headerList = ["ردیف", "نام دسته", "آیکون"];

  const deleteFunction = (event) => {
    event.preventDefault();
    const Id = event.target.id;
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
            <div className="column is-8 is-offset-1 ">
              <ActionableList
                headerList={headerList}
                listData={categories}
                editFunction={editFunction}
                deleteFunction={deleteFunction}
                insertFunction={insertFunction}
              ></ActionableList>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
