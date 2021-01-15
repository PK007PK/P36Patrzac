import React from "react";

const Logo = () => (
  <div className="d-flex align-items-center">
    {/* <div
      style={{
        width: "20px",
        height: "40px",
        backgroundColor: "#FFA900",
        marginRight: "2px",
        borderRadius: "40px 0 0 40px",
      }}
    ></div> */}
    <div className="d-flex flex-column align-items-start">
      <span
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Patrząc w słońce
      </span>
      <span style={{ fontSize: "14px", marginTop: "-6px" }}>
        Urszula Krasny
      </span>
    </div>
  </div>
);

export default Logo;
