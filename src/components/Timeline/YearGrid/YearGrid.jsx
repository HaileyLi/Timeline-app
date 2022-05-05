import React, { useEffect } from "react";

function YearGrid(props) {
  // use to fetch Data, work as componentDidMount
  useEffect(() => {}, []);

  const { allData, lengthPerYear, lengthPerMonth } = props;
  const earliestDate = allData[0].date;
  const earliestYear = +earliestDate.substr(0, 4);

  const getBorderYears = () => {
    let currentTimeObj = new Date();
    let currentYear = currentTimeObj.getFullYear();

    return currentYear - earliestYear + 1;
  };

  const generateLine = (value) => {
    return { left: lengthPerYear * value + lengthPerMonth + 7 + "px" };
  };

  // dom render
  return (
    <div className="year-grid">
      {[...Array(getBorderYears()).keys()].map((item) => (
        <div
          className="year-grid-line"
          style={generateLine(item)}
          key={`${item}_key`}
        >
          <div className="year-grid-year">{item + earliestYear}</div>
        </div>
      ))}
    </div>
  );
}

export default YearGrid;
