import React, { useEffect } from "react";

function ImageSingleGrid(props) {
  useEffect(() => {
    //work as componentDidMount
    //work as componentDidUpdate
  }, []);

  const { imgSrc, toggleOverlay } = props;
  return (
    <div className={`image-overlay-full`} onClick={() => toggleOverlay()}>
      <img src={imgSrc} className="gallery-image" alt="" />
    </div>
  );
}

export default ImageSingleGrid;
