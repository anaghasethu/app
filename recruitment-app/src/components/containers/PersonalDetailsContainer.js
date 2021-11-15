import React, { useState, useEffect } from "react";
import Logo from "../Common/Logo";
import { Link } from "react-router-dom";
import { APP } from "../../constants/index";
import PersonalDetails from "../views/PersonalDetails";

const PersonalDetailsContainer = () => {
  return (
    <div className="ms-5 me-5 mt-3">
      {/* Nav bar */}
      <div className="div-zero">
        <Logo />
      </div>
      {/* Content */}
      <PersonalDetails />
    </div>
  );
};

export default PersonalDetailsContainer;
