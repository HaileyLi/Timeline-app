import React, { useState, useEffect } from "react";
import ImageOverlay from "../ImageOverlay";

function ImageSingleGrid(props) {
  useEffect(() => {
    //work as componentDidMount
    //work as componentDidUpdate
  }, []);

  const { imgData, imgIndex } = props;
  const { imgSrc, description } = imgData;

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const { default: defaultImage } = imgSrc;

  return (
    <React.Fragment>
      {showOverlay && (
        <ImageOverlay imgSrc={defaultImage} toggleOverlay={toggleOverlay} />
      )}
      <div className="image-single-grid" onClick={() => toggleOverlay()}>
        <img
          src={defaultImage}
          className={`gallery-image animated image-${imgIndex}`}
          alt=""
        />
        <div className="overlap-des">
          <p>{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ImageSingleGrid;
