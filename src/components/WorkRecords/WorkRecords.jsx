import React, { useEffect } from "react";

function WorkRecords(props) {
  useEffect(() => {
    //work as componentDidMount
    //work as componentDidUpdate
  }, []);

  const { data } = props;
  const {
    date,
    endDate,
    position,
    company,
    bulletPoints,
    paragraphContent,
    companyLogo,
    bgImage,
  } = data;

  const getDate = (date) => {
    //input: "yyyymmdd", output: {year, month, day}
    const year = +date.substr(0, 4);
    const month = +date.substr(4, 2);
    const day = +date.substr(6, 2);
    return { year, month, day };
  };

  const getDuration = (date, endDate) => {
    const dateDetail = getDate(date);
    const endDateDetail = getDate(endDate);
    return `${dateDetail.year}.${dateDetail.month}-${endDateDetail.year}.${endDateDetail.month}`;
  };

  let companyLogoSrc = companyLogo.default;
  // let bgImageSrc = bgImage.default;

  return (
    <div className="work-records-container">
      <div className="img-container"></div>
      <div className="work-wrapper">
        <div className="work-content-container">
          <div className="left-pane">
            <div className="company-logo">
              <img src={companyLogoSrc} />
            </div>
          </div>
          <div className="right-pane">
            <p className="position">{position}</p>
            <p className="company">{company}</p>
            <p className="duration">{getDuration(date, endDate)}</p>
            <ul className="bullet-points">
              {bulletPoints.map((item) => (
                <li key={`${item}_key`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkRecords;
