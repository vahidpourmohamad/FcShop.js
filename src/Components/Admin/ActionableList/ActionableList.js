import React from "react";
import "./ActionableList.css";
export default function ActionableList(props) {
  const { headerList, listData, editFunction, deleteFunction, insertFunction } =
    props;
  

  return (
    <table class="table-right table is-fullwidth">
      <thead>
        <tr>
          {headerList.map((data, Id) => (
            <th>{data}</th>
          ))}
          <th>ویرایش</th>
          <th>حذف</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th style={{ textAlign: "center" }} colSpan={5}>
            اضافه
          </th>
        </tr>
      </tfoot>
      <tbody>
        {listData.map((data, Id) => (
          <tr>
            <td>{Id + 1}</td>
            <td>{Object.values(data)[2]}</td>
            <td>
              <img
                src={`${process.env.PUBLIC_URL}/assets/uploads/images/${
                  Object.values(data)[4]
                }`}
                alt=""
                width="50px"
              />
            </td>
            <td>
              <a
                className="fa fa-pencil"
                id={Object.values(data)[1]}
                onClick={editFunction}
              ></a>
            </td>
            <td>
              <a
                id={Object.values(data)[1]}
                className="fa fa-ban "
                onClick={deleteFunction}
              ></a>
            </td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
}
