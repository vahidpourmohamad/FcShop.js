import React, { Fragment, useState, useEffect } from "react";
import "./ActionableList.css";
import Modal from "react-modal";

export default function ActionableList(props) {
  const { headerList, listData, editFunction, deleteFunction } =
    props;
  const [modalOpen, setModalOpen] = useState(false);
  const [deletedItemId, setDeletedItemId] = useState("0");
  const deleteFunctions = (event) => {
    event.preventDefault();
    const Id = event.target.id;
    setDeletedItemId(Id);
    openModal();
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      transition: "cubic-bezier(0.075, 0.82, 0.165, 1) 1s",
    },
  };

  function openModal() {
    setModalOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setModalOpen(false);
    setDeletedItemId("0");
  }
  function deleteItem()
  {
    deleteFunction(deletedItemId);
    closeModal();

  }
  return (
    <Fragment>
      <Modal
        isOpen={modalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="columns is-variable">
          <div className="column is-3">
            <button className="button is-primary" onClick={deleteItem}>
              بله
            </button>
          </div>
          <div className="column is-3">
            <button className="button is-info" onClick={closeModal}>
              خیر
            </button>
          </div>
          <div className="column is-6">آیا مطمئن هستید؟</div>
        </div>
      </Modal>
      <table class="table-right table is-fullwidth is-hoverable">
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
            <th className="is-danger" style={{ textAlign: "center" }} colSpan={5}>
              تغییرات این لیست دائمی است لطفا مراقب باشید
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
                  onClick={deleteFunctions}
                ></a>
              </td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </Fragment>
  );
}
