import React, { useEffect } from "react";
import ImageSingleGrid from "./ImageSingleGrid";

function ImageGallery(props) {
  useEffect(() => {
    //work as componentDidMount
    //work as componentDidUpdate
  }, []);

  const { data } = props;
  const { imgList } = data;

  return (
    <div className="image-records-container">
      {imgList.map((item, ind) => (
        <ImageSingleGrid
          key={`key_${ind}_${item.imgSrc}`}
          imgData={item}
          imgIndex={ind}
        />
      ))}
    </div>
  );
}

export default ImageGallery;
