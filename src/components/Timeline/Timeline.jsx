import React, { useState, useEffect, useRef } from "react";
import FilterLegend from "./FilterLegend/FilterLegend";

import TimePoint from "./TimePoint";
import YearGrid from "./YearGrid";

function Timeline(props) {
  const { updateMainContent, data } = props;

  const lengthPerYear = 540;
  const lengthPerMonth = 45;

  // use to fetch Data, work as componentDidMount
  useEffect(() => {
    window.addEventListener("scroll", checkTimelineScroll, true);
  }, []);

  const getAllCategory = (data) => {
    return data.map((item) => item.category).distinct();
  };

  const [selectedCate, setSelectedCate] = useState(getAllCategory(data));
  const [selectedTime, setSelectedTime] = useState(null);
  const [hasHover, setHasHover] = useState(null);
  const [scrollTimeStamp, setScrollTimeStamp] = useState(null);

  // function defs
  const getDate = (date) => {
    //input: "yyyymmdd", output: {year, month, day}
    const year = +date.substr(0, 4);
    const month = +date.substr(4, 2);
    const day = +date.substr(6, 2);
    return { year, month, day };
  };

  const generateTimelineWidth = (data) => {
    //input: json data, output: style
    const earliestDate = getDate(data[0].date);
    const latestDate = getDate(data[data.length - 1].date);
    const { year: earliestYear } = earliestDate;
    const { year: latestYear, month: latestMonth } = latestDate;
    let calcedWidth =
      (latestYear - earliestYear) * lengthPerYear +
      latestMonth * lengthPerMonth;

    let currentTimeObj = new Date();
    let currentYear = currentTimeObj.getFullYear();
    let currentMonth = currentTimeObj.getMonth() + 1;
    const todayCalcedWidth =
      (currentYear - earliestYear) * lengthPerYear +
      currentMonth * lengthPerMonth;

    calcedWidth = Math.max(calcedWidth, todayCalcedWidth);

    const screenWidth = window.innerWidth;
    const resWidth =
      screenWidth - 100 >= calcedWidth ? screenWidth - 100 : calcedWidth + 100;
    return {
      width: `${resWidth}px`,
    };
  };

  const generateOverlayWidth = (data) => {
    let { width: timelineWidth } = generateTimelineWidth(data);

    timelineWidth = timelineWidth.substr(0, timelineWidth.length - 2);
    return {
      width: `${+timelineWidth + 50}px`,
    };
  };

  //legend toggle selected
  const toggleSelected = (selectedList) => {
    setSelectedCate([...selectedList]);
    resetSelected();
  };

  //get Selected time point
  const getSelectedTime = (id) => {
    setSelectedTime(id);
  };

  //get if hover is active
  const handleHover = (id) => {
    setHasHover(id);
  };

  const resetSelected = () => {
    const { resetContent } = props;
    setSelectedTime(null);
    setHasHover(null);
    resetContent();
  };

  const generateTodayLine = (data) => {
    const earliestDate = getDate(data[0].date);
    const { year: earliestYear } = earliestDate;
    let currentTimeObj = new Date();
    let currentYear = currentTimeObj.getFullYear();
    let currentMonth = currentTimeObj.getMonth() + 1;
    const calcedWidth =
      (currentYear - earliestYear) * lengthPerYear +
      currentMonth * lengthPerMonth;

    return { marginLeft: calcedWidth + 9 + "px" };
  };

  const generateArrowAnimStyle = () => {
    const screenWidth = window.innerWidth;
    return { left: screenWidth * 0.9 + "px" };
  };

  const checkTimelineScroll = (e) => {
    if (e.timeStemp !== scrollTimeStamp) {
      setScrollTimeStamp(true);
      return;
    }
    setScrollTimeStamp(e.timeStemp);
  };

  return (
    <React.Fragment>
      <FilterLegend
        data={data}
        allCategory={getAllCategory(data)}
        selectedCate={selectedCate}
        toggleSelected={toggleSelected}
      />
      {(hasHover !== null || selectedTime !== null) && (
        <div
          className="cover-overlay"
          onClick={() => resetSelected()}
          style={generateOverlayWidth(data)}
        ></div>
      )}
      <div
        className="timeline"
        style={generateTimelineWidth(data)}
        onScroll={(e) => checkTimelineScroll(e)}
      >
        <div className="today-line" style={generateTodayLine(data)}></div>
        <YearGrid
          lengthPerYear={lengthPerYear}
          lengthPerMonth={lengthPerMonth}
          allData={data}
        />
        {data
          .filter((item) => selectedCate.indexOf(item.category) !== -1)
          .map((item, ind) => (
            <TimePoint
              key={`key_${ind}_${item}`}
              data={item}
              allData={data}
              calcDate={getDate(item.date)}
              selectedTime={selectedTime}
              updateMainContent={updateMainContent}
              getSelectedTime={getSelectedTime}
              handleHover={handleHover}
              lengthPerYear={lengthPerYear}
              lengthPerMonth={lengthPerMonth}
            />
          ))}
      </div>

      {scrollTimeStamp !== true && (
        <div className="arrow-anim" style={generateArrowAnimStyle()}>
          <p>Slide for More</p>
          <div className="arrow arrow-first"></div>
          <div className="arrow arrow-second"></div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Timeline;
