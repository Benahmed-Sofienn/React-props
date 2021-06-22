import React from "react";
import PropTypes from "prop-types";

const Head = ({ fullName, profession, p, children }) => {
  console.log(children);
  return (
    <div style={{ display: "flex", backgroundColor: "black", padding: "3%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <h1 style={{ color: "white" }}>{fullName}</h1>
        <h2 style={{ color: "white" }}>{profession}</h2>
        <p style={{ color: "white" }}>{p}</p>
      </div>
      {children}
    </div>
  );
};

export default Head;
// Set default props
Head.defaultProps = {
  fullName: "No Name",
  profession: "No Profession",
  p: "",
};
// checkPropTypes
Head.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  p: PropTypes.string,
};
