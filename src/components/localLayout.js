import React from "react";

const LocalLayout = ({
  leftColumnContent,
  rightColumnContent,
  rightSize,
  leftSize,
  style,
  className,
}) => {
  const LeftColumnContent = leftColumnContent;
  const RightColumnContent = rightColumnContent;
  return (
    <>
      <div className={"container ".concat(className)} style={style}>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className={`col-sm-${leftSize || 5}`}>
            {leftColumnContent && <LeftColumnContent />}
          </div>
          <div className="col-sm-1"></div>
          <div className={`col-sm-${rightSize || 4}`}>
            {rightColumnContent && <RightColumnContent />}
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default LocalLayout;
