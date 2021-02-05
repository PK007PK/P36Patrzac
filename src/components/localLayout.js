import React from "react";
import PropTypes from "prop-types";

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
  const LeftColumnContentComponent = leftColumnContent ? (
    <LeftColumnContent />
  ) : null;
  const RightColumnContent = rightColumnContent;
  const rightColumnContentComponent = rightColumnContent ? (
    <RightColumnContent />
  ) : null;
  return (
    <section id={id}>
      <div className={"container ".concat(className)} style={style}>
        <div className="row">
          <div className="d-none d-lg-block col-lg-1"></div>
          <div className={`col-12 col-md-6 col-lg-${leftSize || 5}`}>
            {LeftColumnContentComponent}
          </div>
          <div className="d-none d-lg-block col-lg-1"></div>
          <div className={`col-12 col-md-6 col-lg-${rightSize || 4}`}>
            {rightColumnContentComponent}
          </div>
          <div className="d-none d-lg-block col-lg-1"></div>
        </div>
      </div>
    </section>
  );
};

LocalLayout.propTypes = {
  leftColumnContent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  rightColumnContent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  rightSize: PropTypes.string,
  leftSize: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.number,
};

export default LocalLayout;
