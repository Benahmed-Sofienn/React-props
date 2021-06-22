import Head from "../childrenComponents/Head";
import Info from "../childrenComponents/Info";
import Bio from "../childrenComponents/Bio";
import Profilepic from "../../assests/img/Profilepic.png";
import React from "react";

const Profile = () => {
  const bio = [
    {
      Formation: "developpement FullStack JS",
      Institute: "GoMyCode",
      duration: "05/2021-09/2021",
    },
    {
      occupytedPost: "<Web developer/>",
      society: "Chess.com",
      duration: "11/2021-12/2021",
    },
    {
      occupytedPost: "<Webmaster/>",
      society: "Facebook",
      duration: "10/2021-11/2021",
    },

    {
      occupytedPost: "<Webmaster/>",
      society: "Aliexpresse",
      duration: "01/2022-02/2022",
    },
  ];
  return (
    <div>
      <Head
        fullName="Sofien Ben Ahmed"
        profession="Web devoloper"
        p="Versatile, I master the different technical steps of creating a site or a web application, from understanding user needs, to frontend and backend development to maintenance. "
      >
        <img src={Profilepic} alt="Profile pic" style={{ height: "200px" }} />
      </Head>
      <Info
        number="20186655"
        eMail="Benahmed.sofienn@gmail.com"
        adresse="ElOmran Tunis Tunisie"
        gitHub="/Benahmed-Sofienn"
      />
      <Bio bio={bio} />
    </div>
  );
};

export default Profile;
