import React, { useEffect, useState } from "react";
import { BlockPicker } from "react-color";

export default function ColorPicker(props) {
  const { onDelete, onChoose, id, onPlus, color } = props;
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [chosenColor, setChosenColor] = useState();
  const cover = {
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };
  useEffect(() => {
    setChosenColor(color);
  }, [color]);

  const colorPickerClick = (event) => {
    event.preventDefault();
    if (showColorPicker == true) {
      setShowColorPicker(false);
    } else {
      setShowColorPicker(true);
    }
  };
  const onColorSelect = (color) => {
    setChosenColor(color.hex);
    setShowColorPicker(false);
    onChoose(color.hex, id);
  };
  const onRemove = (event) => {
    event.preventDefault();
    onDelete(id);
  };
  return (
    <div className="columns">
      <div className="column is-4">
        <div className="field">
          <div className="control">
            <a
              onClick={colorPickerClick}
              className="button  is-fullwidth is-info  is-small"
            >
              انتخاب رنگ
            </a>
            {showColorPicker ? (
              <BlockPicker
                styles={{ cover }}
                onChangeComplete={onColorSelect}
                disableAlpha={true}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className="column is-6">
        <div className="field">
          <div className="control">
            <button
              className="button is-fullwidth  is-small"
              style={{ backgroundColor: chosenColor }}
              disabled
                      >{id}</button>
          </div>
        </div>
      </div>
      <div className="column is-1">
        <div className="field">
          <div className="control">
            <a
              className="fa fa-minus fa "
              style={{ color: "red" }}
              onClick={onRemove}
            ></a>
          </div>
        </div>
      </div>
      <div className="column is-1">
        <div className="field">
          <div className="control">
            <a
              className="fa fa-plus fa "
              style={{ color: "green" }}
              onClick={onPlus}
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}
