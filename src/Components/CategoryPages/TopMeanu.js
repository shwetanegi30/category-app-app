import React from "react";
import './Common.css';


function TopBar() {
  return (
    <div className="container">
      <div className="top-bar d-flex align-items-center mt-4 ">
        <div className="right-side d-flex align-items-center gap-5">
          <h3 className="fs-5 fw-500 name"> All </h3>
          <h3 className="fs-5 fw-500 name"> Custom </h3>
          <h3 className="fs-5 fw-500 name"> ICP </h3>
          <h3 className="fs-5 fw-500 name"> Mission </h3>
          <h3 className="fs-5 fw-500 name"> Product </h3>
        </div>

        <div className="left-side">
          <button type="button" className="btn-add"> Add Topic <i className="fa-sharp fa-light fa-angle-right"></i></button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
