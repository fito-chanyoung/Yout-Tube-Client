import React from "react";

import "../css/Header.css";
import { useHistory } from "react-router-dom";

export interface HeaderProps {
  handleSettingsToggle: React.MouseEventHandler<HTMLButtonElement>;
}

export const Header: React.FC<HeaderProps> = ({ handleSettingsToggle }) => {
  let history = useHistory();
  return (
    <div>
      <div className="YourTube">
        <img
          src="../images/yourtube-small.png"
          alt="YoutubeLogo"
          className="HeaderLogo"
          onClick={() => {
            history.push("/user");
          }}
        />
        <h3 className="Logo">YourTube</h3>
      </div>
      <button className="modalButton" onClick={handleSettingsToggle}>
        &#8801; Settings
      </button>
    </div>
  );
};
