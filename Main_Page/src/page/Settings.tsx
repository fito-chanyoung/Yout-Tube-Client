import React from "react";
import "../css/Settings.css";
import { profileInterface } from "../App";
import small from "../images/yourtube-small.png";
import { SearchBar } from "../components/SearchBar";
export interface SettingProps {
  profile: profileInterface;
  isSettingsOpen: boolean;
  isDarkMode: boolean;
  handleLoginToggle: Function;
  handleSettingsToggle: React.MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  >;
  handleDarkModeToggle: React.ChangeEventHandler<HTMLInputElement>;
  handleKeywordUpdate: Function;
}

export const Settings: React.FC<SettingProps> = ({
  profile,
  isSettingsOpen,
  isDarkMode,
  handleLoginToggle,
  handleSettingsToggle,
  handleDarkModeToggle,
  handleKeywordUpdate,
}) => {
  function logout() {
    handleLoginToggle("", "");
  }
  return (
    <div className={isSettingsOpen ? "settings show" : "settings"}>
      <div className="shadow" onClick={handleSettingsToggle} />
      <div className={isDarkMode ? "sidebar dark" : "sidebar"}>
        <button
          className={isDarkMode ? "x-button dark" : "x-button"}
          onClick={handleSettingsToggle}
        >
          &times;
        </button>
        <div className="settings_title">
          <div className="settings_title_logo">
            <img src={small} alt="logo" />
          </div>
          <h3 className="settings_title_text">당신의 좋아요 리스트</h3>
        </div>

        <hr />
        <div className="settings_profile">
          <div className="settings_profile_image">
            <img src={profile.picture} alt="profile image" />
          </div>
          <div className="settings_profile_text">
            <h3 className="settings_profile_name">{profile.name}</h3>
            <p className="settings_profile_email">{profile.email}</p>
          </div>
          <hr />
        </div>

        <div className="mobile-search-container">
          <SearchBar
            isDarkMode={isDarkMode}
            handleKeywordUpdate={handleKeywordUpdate}
          />
        </div>
        <hr />
        <fieldset>
          <input type="checkbox" onChange={handleDarkModeToggle} />
          <span>Dark mode</span>
        </fieldset>

        <hr />
        <div>
          <button
            className={isDarkMode ? "logout-button dark" : "logout-button"}
            onClick={logout}
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
