import React from "react";

const LocalLayout = ({
  leftColumnContent,
  rightColumnContent,
  rightSize,
  leftSize,
  style,
  className,
  id,
}) => {
  const LeftColumnContent = leftColumnContent;
  const RightColumnContent = rightColumnContent;
  return (
    <section id={id}>
      <div className={"container ".concat(className)} style={style}>
        <div className="row">
          <div className="d-none d-lg-block col-lg-1"></div>
          <div className={`col-12 col-md-6 col-lg-${leftSize || 5}`}>
            {leftColumnContent && <LeftColumnContent />}
          </div>
          <div className="d-none d-lg-block col-lg-1"></div>
          <div className={`col-12 col-md-6 col-lg-${rightSize || 4}`}>
            {rightColumnContent && <RightColumnContent />}
          </div>
          <div className="d-none d-lg-block col-lg-1"></div>
        </div>
      </div>
    </section>
  );
};
export default LocalLayout;
