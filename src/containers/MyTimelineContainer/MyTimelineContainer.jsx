import TimelineContainer from "../TimelineContainer";
import ContentContainer from "../ContentContainer";
import React, { useState, useEffect } from "react";
import mockData from "../../assets/data/mockdata";
import { connect } from "react-redux";
import { getTimelineDataHandler } from "../../actions/timelineActions";
import EditModeContainer from "../EditModeContainer";
import ModeToggleSwitch from "../../components/ModeToggleSwitch";

const sortYear = (a, b) => {
  return a.date - b.date;
};

const MyTimelineContainer = (props) => {
  const { timelineData } = props;

  const myData = timelineData != null ? timelineData.sort(sortYear) : [];

  // use to fetch Data, work as componentDidMount
  useEffect(() => {
    const { getTimelineDataHandler } = props;
    getTimelineDataHandler();
  }, [props]);

  const [selectedData, setSelectedData] = useState({});
  const [editMode, setEditMode] = useState(false);

  const updateMainContent = (id) => {
    setSelectedData(myData.filter((item) => item.id === id)[0]);
  };

  const resetContent = () => {
    setSelectedData({});
  };

  const toggleEditMode = (mode) => {
    setEditMode(mode);
  };

  return (
    <React.Fragment>
      {/* <ModeToggleSwitch toggleEditMode={(mode) => toggleEditMode(mode)} />
      {editMode && <EditModeContainer />} */}
      <TimelineContainer
        updateMainContent={updateMainContent}
        data={myData}
        resetContent={resetContent}
        editMode={editMode}
      />
      <div className="curve-container">
        <svg
          viewBox="0 0 1440 1251.18"
          xmlns="http://www.w3.org/2000/svg"
          className="curve"
        >
          <path
            d="M 1 12.5 C 151 25 217.675 0 301 0 C 401 0 426 18.75 576 12.5 C 701 6.25 692.675 4.1688 826 12.5 L 826 31.25 L 1 31.25 L 1 12.5 M 1 12.5"
            fill={editMode ? "#cfcfcf " : "#fbbb3f"}
          ></path>
        </svg>
      </div>

      <ContentContainer data={selectedData} editMode={editMode} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { timeline } = state;
  const { timelineData } = timeline;
  return { timelineData };
};

export default connect(mapStateToProps, { getTimelineDataHandler })(
  MyTimelineContainer
);
