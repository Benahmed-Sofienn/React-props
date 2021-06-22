import React from "react";
import PropTypes from "prop-types";

const Info = ({ number, eMail, adresse, gitHub }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#6e6e6e",
        justifyContent: "space-around",
        padding: "0% 3%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          margin: "1% 0%",
        }}
      >
        <i class="fas fa-mobile-alt"></i>
        <h3>{number}</h3>
      </div>
      <div style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
        <i class="fas fa-envelope"></i>
        <h3>{eMail}</h3>
      </div>
      <div style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
        <i class="fab fa-github"></i>
        <h3>{gitHub}</h3>
      </div>
      <div style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
        <i class="fas fa-map-marker-alt"></i>
        <h3>{adresse}</h3>
      </div>
    </div>
  );
};

export default Info;
// Set default props
Info.defaultProps = {
  number: "No Number",
  eMail: "No eMail",
  adresse: "Everywhere",
  gitHub: "No gitHub",
};
// checkPropTypes
Info.propTypes = {
  number: PropTypes.string,
  eMail: PropTypes.string,
  adresse: PropTypes.string,
  gitHub: PropTypes.string,
};
