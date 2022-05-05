import React, { useEffect } from "react";

function FilterLegend(props) {
  const { allCategory, selectedCate } = props;

  const getPointColor = (cateCode) => {
    let pointColor;
    switch (cateCode) {
      case "Work":
        pointColor = "type-1";
        break;
      case "Academic":
        pointColor = "type-2";
        break;
      case "Project":
        pointColor = "type-3";
        break;
      default:
    }
    return pointColor;
  };

  const toggleSelected = (item) => {
    const { toggleSelected } = props;
    let selectedList = selectedCate;
    if (selectedList.indexOf(item) === -1) {
      selectedList.push(item);
    } else {
      selectedList = selectedList.filter((it) => it !== item);
    }
    toggleSelected(selectedList);
  };

  useEffect((prevProps) => {
    //work as componentDidMount
    //work as componentDidUpdate
  }, []);

  return (
    <div className="legend-container">
      {allCategory.map((item) => (
        <div
          key={`key_${item}`}
          className={`legend-dot-row ${
            selectedCate.indexOf(item) === -1 ? "disabled-cate" : ""
          }`}
          onClick={() => toggleSelected(item)}
        >
          <span className={`legend-dot ${getPointColor(item)}`}></span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

export default FilterLegend;

/*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
Array.prototype.distinct = function () {
  return this.reduce(function (new_array, old_array_value) {
    if (new_array.indexOf(old_array_value) === -1)
      new_array.push(old_array_value);
    return new_array;
  }, []);
};
