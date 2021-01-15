import React from "react";

const LocalLayout = ({ title, leftColumnContent, rightColumnContent }) => {
  const LeftColumnContent = leftColumnContent;
  const RightColumnContent = rightColumnContent;
  return (
    <div className="container">
      {" "}
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <h2 className="fw-normal my-5 text-center">{title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          {leftColumnContent && <LeftColumnContent />}
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-4">
          {rightColumnContent && <RightColumnContent />}
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default LocalLayout;
