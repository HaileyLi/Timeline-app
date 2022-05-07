import React, { useEffect, useRef, useState } from "react";

function PointPopup(props) {
  const { data } = props;
  const {
    brief,
    id,
    category,
    school,
    major,
    company,
    position,
    location,
    date,
    endDate,
    startDate,
    link,
  } = data || {};
  const timelinePopup = useRef(null);
  const [clientRect, setClientRect] = useState({});

  // use to fetch Data, work as componentDidMount
  useEffect(() => {
    setClientRect(timelinePopup.current.getBoundingClientRect());
  }, []);

  const generateBoxStyle = () => {
    const cRect = clientRect;
    const screenWidth = window.innerWidth;
    let res = {};
    if (cRect.left <= 100) {
      res = {
        left: "9px",
      };
    } else if (screenWidth - cRect.right <= cRect.width) {
      res = {
        right: "calc(100% - 11px)",
      };
    }
    return res;
  };

  const getDate = (date) => {
    //input: "yyyymmdd", output: {year, month, day}
    const year = +date.substr(0, 4);
    const month = +date.substr(4, 2);
    const day = +date.substr(6, 2);
    return { year, month, day };
  };

  const getDuration = (startDate, date) => {
    const dateDetail = getDate(startDate);
    const endDateDetail = getDate(date);
    return `${dateDetail.year}.${dateDetail.month}-${endDateDetail.year}.${endDateDetail.month}`;
  };

  return (
    <div className="point-popup-container" id={id}>
      <span className="popup-line"></span>
      <div
        className="popup-body"
        style={generateBoxStyle()}
        ref={timelinePopup}
      >
        {category === "Academic" && (
          <div className="academic-brief">
            <p className="duration">{getDuration(startDate, date)}</p>
            <p className="school">{school}</p>
            <p className="major">{major}</p>
          </div>
        )}
        {category === "Work" && (
          <div className="work-brief">
            <p className="duration">{getDuration(date, endDate)}</p>
            <p className="company">{company}</p>
            <p className="position">{position}</p>
          </div>
        )}
        {category === "Project" && (
          <>
            <p>{brief}</p>
            <a className="proj-link" href={link} target="_blank">
              {link}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default PointPopup;
