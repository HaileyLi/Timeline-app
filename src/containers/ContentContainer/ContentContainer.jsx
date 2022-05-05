import React, { useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
import MainPage from "../../components/MainPage/MainPage";
import StudyRecords from "../../components/StudyRecords";
import WorkRecords from "../../components/WorkRecords";

function ContentContainer(props) {
  // use to fetch Data, work as componentDidMount
  useEffect(() => {}, []);

  const { data, editMode } = props;
  const { cateCode } = data;

  return (
    <div className="content-container">
      {cateCode === "WK" && <WorkRecords data={data} />}
      {cateCode === "ST" && <StudyRecords data={data} />}
      {cateCode === "OT" && <ImageGallery data={data} />}
      {cateCode === undefined && <MainPage editMode={editMode} />}
    </div>
  );
}

export default ContentContainer;
