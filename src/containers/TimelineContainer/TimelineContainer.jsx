import React, { useEffect } from "react";
import Timeline from "../../components/Timeline";

function TimelineContainer(props) {
  // use to fetch Data, work as componentDidMount
  useEffect(() => {}, []);

  const { updateMainContent, data, resetContent } = props;

  return (
    <div className="timeline-container">
      {data.length > 0 && (
        <Timeline
          updateMainContent={updateMainContent}
          data={data}
          resetContent={resetContent}
        />
      )}
    </div>
  );
}

export default TimelineContainer;
