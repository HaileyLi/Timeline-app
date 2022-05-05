import React, { useEffect, useState } from "react";

function ModeToggleSwitch(props) {
  // use to fetch Data, work as componentDidMount
  useEffect(() => {}, []);

  const [toggleSwitch, setToggleSwitch] = useState(false);

  const handleToggleSwitch = () => {
    let res = !toggleSwitch;
    setToggleSwitch(res);
    const { toggleEditMode } = props;
    toggleEditMode(res);
  };

  return (
    <div className="mode-toggle-switch">
      <input type="checkbox" id="switch" onClick={() => handleToggleSwitch()} />
      <label htmlFor="switch">{toggleSwitch ? "编辑模式" : "预览模式"}</label>
    </div>
  );
}

export default ModeToggleSwitch;
