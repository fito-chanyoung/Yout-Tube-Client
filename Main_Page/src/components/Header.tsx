import React from "react";

import "../css/Header.css";
import { useHistory } from "react-router-dom";
import small from "../images/yourtube-small.png";
export interface HeaderProps {
  handleSettingsToggle: React.MouseEventHandler<HTMLButtonElement>;
  isDarkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  handleSettingsToggle,
  isDarkMode,
}) => {
  let history = useHistory();
  return (
    <div className={isDarkMode ? "header-mobile darkmode" : "header-mobile"}>
      <div className={isDarkMode ? "YourTube darkmode" : "YourTube"}>
        <div
          className={isDarkMode ? "logo-container darkmode" : "logo-container"}
        >
          <img
            src={small}
            alt="YoutubeLogo"
            className="HeaderLogo"
            onClick={() => {
              history.push("/user");
            }}
          />
        </div>
        <div className="Logo">
          <h3 className="logo-detail">YourTube</h3>
        </div>
      </div>
      <button
        className={isDarkMode ? "modalButton darkMode" : "modalButton"}
        onClick={handleSettingsToggle}
      >
        &#8801; <span className="modal-desc">Settings</span>
      </button>
    </div>
  );
};
