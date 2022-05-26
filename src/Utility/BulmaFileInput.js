import React, { Fragment, useState } from "react";

const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { onChange, name } = props;
//this is only for test
  return (
    <Fragment>
      <p className="description">تصویر مورد نظر را انتخاب کنید</p>
      {selectedImage && (
        <div className="field">
          <div className="control">
            <img
              alt="پیدا نشد"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />

            <button
              className="button is-block  is-danger  is-small"
              onClick={() => setSelectedImage(null)}
            >
              پاک کردن
            </button>
          </div>
        </div>
      )}
      <div className="field">
        <div className="control">
          <div class="file has-name is-boxed">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                name={name}
                onChange={(event) => {
                   setSelectedImage(event.target.files[0]);
                  onChange(event);
                }}
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fa fa-upload"></i>
                </span>
                <span class="file-label">Choose a file…</span>
              </span>
              <span class="file-name">{!selectedImage?"":selectedImage.name}</span>
            </label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UploadAndDisplayImage;
