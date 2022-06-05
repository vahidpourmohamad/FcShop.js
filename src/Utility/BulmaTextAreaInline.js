import React from "react";

export default function BulmaTextAreaInline(props) {
  const { name, onChange, require, row, text } = props;

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
          <div className="control is-expanded ">
            <textarea
              class="textarea is-info"
              placeholder={text}
              name={name}
              onChange={onChange}
              required={require}
              row={row}
            ></textarea>
            {requireFunction(require)}
          </div>
        </div>
      </div>
    </div>
  );
}
