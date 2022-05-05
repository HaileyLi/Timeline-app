import React, { useEffect } from "react";

function MainPage(props) {
  useEffect(() => {
    //work as componentDidMount
    //work as componentDidUpdate
  }, []);

  const { editMode } = props;

  return (
    <div className={`main-page-container ${editMode ? "edit-mode" : ""}`}>
      <div className="pane-container">
        <div className="left-pane">
          <div className="fir-key-info">
            <p className="title">Introduction</p>
            <p className="content">Programmer, passion in art design.</p>
          </div>

          <div className="sec-key-info">
            <p className="title">Profession</p>
            <p className="content">
              Computational math, Computer Science, Statistics, Data science
            </p>
          </div>
          <div className="third-key-info">
            <p className="title">Contact</p>
            <p className="content">haileyli1002@gmail.com</p>
          </div>
        </div>
        <div className="middle-pane">
          <div className="key-info">
            <p className="full-name">Xiwen</p>
            <p className="eng-name">Hailey Li</p>
            <p className="position">Software Development Engineer</p>
          </div>
          <div className="portfolio-container">
            <div className="portfolio-img">
              <img
                src={
                  "https://media-exp1.licdn.com/dms/image/D4E35AQFR14wVSeRUYg/profile-framedphoto-shrink_400_400/0/1650536053162?e=1651856400&v=beta&t=eL4O2cj9t4CnIbEgbKH1lIubg74oYbFCobMPBZEQdoU"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="right-pane">
          <div className="fir-key-num">
            <p className="title">Work experience (year)</p>
            <p className="content">5</p>
          </div>
          <div className="sec-key-num">
            <p className="title">Projects</p>
            <p className="content">5</p>
          </div>
          <div className="third-key-num">
            <p className="title">Employer comment</p>
            <p className="content">100% :)</p>
          </div>
          <div className="fourth-key-num">
            <p className="title">Awards</p>
            <p className="content">3</p>
          </div>
        </div>
      </div>
      <div className="contact-row"></div>
    </div>
  );
}

export default MainPage;
