import React from "react";
import "../../styles/users/token.css";
import umbrellafirst from "../../styles/images/UmbrellaFirst.png";

export const LogoToken = () => {
  return (
    <div className="container">
      <img
        src={umbrellafirst}
        alt="paraguas"
        className="logo-token"
      />
    </div>
  );
};
