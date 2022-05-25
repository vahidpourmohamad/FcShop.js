import React from "react";

export default function BulmaInputInLine(props) {
  const { name, icon, onChange, require, type, text } = props;
 
  function requireFunction(requireFlag) {
    if (requireFlag == true) {
      return <div className="help">این مورد اجباری است</div>;
    } else {
      return <div />;
    }
  }
  return (
    <div className="field is-horizontal">
      <div className="field-label is-small">
        <label className="label">{text}</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div className="control is-expanded has-icons-left">
            <input
              className="input "
              type={type}
              placeholder={text}
              name={name}
              onChange={onChange}
            />
            <span className="icon is-small is-left">
              <i className={icon}></i>
            </span>
            {requireFunction(require)}
          </div>
        </div>
      </div>
    </div>
  );
}
