import React, { useEffect } from "react";
import badgeImage from "../../assets/img/badge.png";

function StudyRecords(props) {
  useEffect(() => {
    //work as componentDidMount
    //work as componentDidUpdate
  }, []);

  const { data } = props;
  const { school, major, bulletPoints, date, startDate } = data;

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
    <div className="study-records-container">
      <div className="envlop">{/* <img src={badgeImage} /> */}</div>
      <div className="study-certificate-wrapper">
        <p className="school">{school}</p>
        <p className="major">{major}</p>
        <p className="duration">{getDuration(startDate, date)}</p>
      </div>
      <div className="points-wrapper">
        <div className="bullet-points">
          {bulletPoints.map((item) => (
            <a>{item}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudyRecords;
