import React, { useEffect } from "react";

function EditModeContainer(props) {
  // use to fetch Data, work as componentDidMount
  useEffect(() => {}, []);

  return (
    <div className="edit-mode-container">
      <div className="edit-button">
        <img
          src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default EditModeContainer;
