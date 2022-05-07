import React, { useEffect } from "react";
import anim2 from "../../assets/img/pic2016/work/anim/anim2.mp4";
import anim3 from "../../assets/img/pic2016/work/anim/anim3.mp4";
import anim4 from "../../assets/img/pic2016/work/anim/anim4.mp4";
import anim5 from "../../assets/img/pic2016/work/anim/anim5.mp4";
import anim6 from "../../assets/img/pic2016/work/anim/anim6.mp4";
import anim7 from "../../assets/img/pic2016/work/anim/anim7.mp4";

function VideoGallery(props) {
  useEffect(() => {
    //work as componentDidMount
    //work as componentDidUpdate
  }, []);

  return (
    <div className="image-records-container">
      <video width="100%" height="100%" preload="auto" controls="controls">
        <source src={anim2} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video width="100%" height="100%" preload="auto" controls="controls">
        <source src={anim3} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video width="100%" height="100%" preload="auto" controls="controls">
        <source src={anim4} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video width="100%" height="100%" preload="auto" controls="controls">
        <source src={anim5} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video width="100%" height="100%" preload="auto" controls="controls">
        <source src={anim6} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <video width="100%" height="100%" preload="auto" controls="controls">
        <source src={anim7} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default VideoGallery;
