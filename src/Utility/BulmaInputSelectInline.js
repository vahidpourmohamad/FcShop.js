import React from "react";

export default function BulmaInputSelectInline(props) {
  const { name, selectData, onChange, require,text } = props;

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
          <div className="  control is-rounded  select is-expanded   is-fullwidth">
            <select name={name} onChange={onChange}>
              <option value="0" defaultValue>
                ندارد
              </option>
              {selectData.map((data, i) => (
                <option value={data.id}>{data.name}</option>
              ))}
            </select>
            {requireFunction(require)}
          </div>
        </div>
      </div>
    </div>
  );
}
