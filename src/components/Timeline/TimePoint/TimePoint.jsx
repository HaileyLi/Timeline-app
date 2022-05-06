import React, { useEffect } from "react";
import PointPopup from "../PointPopup/PointPopup";

function TimePoint(props) {
  // use to fetch Data, work as componentDidMount
  useEffect(() => {}, []);

  const { lengthPerYear, lengthPerMonth } = props;

  // function defs
  const togglePopup = (id) => {
    const { updateMainContent, getSelectedTime } = props;
    typeof updateMainContent === "function" && updateMainContent(id);
    typeof getSelectedTime === "function" && getSelectedTime(id);
  };

  const generateStyle = (date) => {
    //input: {year, month, day},output: style object
    const { allData } = props;
    const earliestDate = allData[0].date;
    const yearCalc = (date.year - +earliestDate.substr(0, 4)) * lengthPerYear;
    const monthCalc = date.month * lengthPerMonth;
    const leftNum = yearCalc + monthCalc;
    return {
      left: `${leftNum}px`,
    };
  };

  const generateDateExp = (calcDate) => {
    const { year, month } = calcDate;
    return `${year}.${month}`;
  };

  const getPointColor = (cateCode) => {
    let pointColor;
    switch (cateCode) {
      case "WK":
        pointColor = "type-1";
        break;
      case "ST":
        pointColor = "type-2";
        break;
      case "OT":
        pointColor = "type-3";
        break;
      default:
    }
    return pointColor;
  };

  const generateLineWidth = (data) => {
    const { endDate, date, startDate } = data;
    if (endDate === undefined && startDate === undefined) return {};
    if (endDate) {
      let { year, month } = calcDurationYearMonth(date, endDate);
      let resWidth = lengthPerYear * year + lengthPerMonth * month;
      return { width: resWidth + "px" };
    }
    if (startDate) {
      let { year, month } = calcDurationYearMonth(startDate, date);
      console.log(year, month);
      let resWidth = lengthPerYear * year + lengthPerMonth * month;
      return { width: resWidth + "px", right: "50px" };
    }
  };

  const calcDurationYearMonth = (startDate, endDate) => {
    const startYear = +startDate.substr(0, 4);
    const endYear = +endDate.substr(0, 4);
    const startMonth = +startDate.substr(4, 2);
    const endMonth = +endDate.substr(4, 2);
    let month;
    if (startMonth > endMonth) {
      month = 12 - startMonth + endMonth;
      return {
        year: endYear - startYear - 1,
        month,
      };
    } else {
      month = endMonth - startMonth;
      return {
        year: endYear - startYear,
        month,
      };
    }
  };

  const { data, calcDate, selectedTime } = props;
  const { id, cateCode } = data;

  return (
    <div
      className={`timepoint-container ${
        id === selectedTime ? "show-popup" : ""
      }`}
      style={generateStyle(calcDate)}
    >
      <div
        className={`time-point ${getPointColor(cateCode)}`}
        onClick={() => togglePopup(id)}
      >
        <div className="duration-line" style={generateLineWidth(data)}></div>
      </div>
      <p className="date-exp">{generateDateExp(calcDate)}</p>
      <PointPopup data={data} />
    </div>
  );
}

export default TimePoint;
