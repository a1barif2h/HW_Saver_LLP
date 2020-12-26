import React from "react";
import Header from "../Home/Header/Header";
import logo from "../../images/welcome.png";

const Albums = () => {
  return (
    <div>
      <Header logo={logo} bg={"primary"} color={"text-white"} />
      <h1>This is Albums</h1>
    </div>
  );
};

export default Albums;
