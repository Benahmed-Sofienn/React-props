import PropTypes from "prop-types";
import React from "react";

const Bio = ({ bio }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "3% 7%",
      }}
    >
      <div>
        <h2 style={{ margin: "0% 0% 3% 15%" }}>EDUCATION</h2>
        <h3>{bio[0].Formation}</h3>
        <h4>{bio[0].Institute}</h4>
        <h5>{bio[0].duration}</h5>
      </div>
      <div>
        <h2 style={{ margin: "0% 0% 3% 15%" }}>EXPERIENCE</h2>
        {bio
          .filter((el, i) => i > 0)
          .map((el, i) => (
            <div key={i}>
              <h3>{el.occupytedPost}</h3>
              <h4>{el.society}</h4>
              <h5>{el.duration}</h5>
              <br />
            </div>
          ))}
      </div>
      <div>
        <h2 style={{ margin: "0% 0% 3% 20%" }}>SKILLS</h2>
        <div style={{ display: "flex" }}>
          <img
            src="https://www.blog-nouvelles-technologies.fr/wp-content/uploads/2016/04/html5-logo-1-512x500.png"
            alt="logo html"
            style={{ width: "30px", margin: "0% 10% 4% 10%" }}
          />
          <h4>HTML</h4>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src="https://grafikart.fr/uploads/icons/css.svg"
            alt="log css"
            style={{ width: "25px", margin: "0% 11% 4% 11%" }}
          />
          <h4>CSS</h4>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt="logo js"
            style={{ width: "55px", margin: "0% 0% 0% 0%" }}
          />
          <h4>JavaScript</h4>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src="https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png"
            alt="logo bootstrap"
            style={{ width: "50px", margin: "0% 1% 0% 2%" }}
          />
          <h4>Bootstrap</h4>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            alt="logo react"
            style={{ width: "45px", margin: "0% 4% 2% 3%" }}
          />
          <h4>React</h4>
        </div>
        <div style={{ display: "flex" }}>
          <img
            src="https://www.pngkey.com/png/full/767-7674998_600px-git-icon-git-icon.png"
            alt="logo git"
            style={{ width: "30px", margin: "0% 10% 0% 9%" }}
          />
          <h4>Git</h4>
        </div>
      </div>
    </div>
  );
};

export default Bio;

// checkPropTypes
Bio.propTypes = {
  bio: PropTypes.arrayOf(Object),
};
