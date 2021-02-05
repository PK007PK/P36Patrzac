import React from "react";
import PropTypes from "prop-types";

const Divider = ({ style }) => (
  <div className="d-flex justify-content-center">
    <div className="text-center" style={style ? style : { margin: "75px 0" }} />
  </div>
);

Divider.propTypes = {
  style: PropTypes.object,
};

export default Divider;
