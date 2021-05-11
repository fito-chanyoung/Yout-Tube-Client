import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/Settings.css";
import small from "../images/yourtube-small.png";
import { SearchBar } from "../components/SearchBar";
export const Settings = ({ profile, isSettingsOpen, isDarkMode, handleLoginToggle, handleSettingsToggle, handleDarkModeToggle, handleKeywordUpdate, }) => {
    function logout() {
        handleLoginToggle("", "");
    }
    return (_jsxs("div", Object.assign({ className: isSettingsOpen ? "settings show" : "settings" }, { children: [_jsx("div", { className: "shadow", onClick: handleSettingsToggle }, void 0),
            _jsxs("div", Object.assign({ className: isDarkMode ? "sidebar dark" : "sidebar" }, { children: [_jsx("button", Object.assign({ className: isDarkMode ? "x-button dark" : "x-button", onClick: handleSettingsToggle }, { children: "\u00D7" }), void 0),
                    _jsxs("div", Object.assign({ className: "settings_title" }, { children: [_jsx("div", Object.assign({ className: "settings_title_logo" }, { children: _jsx("img", { src: small, alt: "logo" }, void 0) }), void 0),
                            _jsx("h3", Object.assign({ className: "settings_title_text" }, { children: "\uB2F9\uC2E0\uC758 \uC88B\uC544\uC694 \uB9AC\uC2A4\uD2B8" }), void 0)] }), void 0),
                    _jsx("hr", {}, void 0),
                    _jsxs("div", Object.assign({ className: "settings_profile" }, { children: [_jsx("div", Object.assign({ className: "settings_profile_image" }, { children: _jsx("img", { src: profile.picture, alt: "profile image" }, void 0) }), void 0),
                            _jsxs("div", Object.assign({ className: "settings_profile_text" }, { children: [_jsx("h3", Object.assign({ className: "settings_profile_name" }, { children: profile.name }), void 0),
                                    _jsx("p", Object.assign({ className: "settings_profile_email" }, { children: profile.email }), void 0)] }), void 0),
                            _jsx("hr", {}, void 0)] }), void 0),
                    _jsx("div", Object.assign({ className: "mobile-search-container" }, { children: _jsx(SearchBar, { isDarkMode: isDarkMode, handleKeywordUpdate: handleKeywordUpdate }, void 0) }), void 0),
                    _jsx("hr", {}, void 0),
                    _jsxs("fieldset", { children: [_jsx("input", { type: "checkbox", onChange: handleDarkModeToggle }, void 0),
                            _jsx("span", { children: "Dark mode" }, void 0)] }, void 0),
                    _jsx("hr", {}, void 0),
                    _jsx("div", { children: _jsx("button", Object.assign({ className: isDarkMode ? "logout-button dark" : "logout-button", onClick: logout }, { children: "\uB85C\uADF8\uC544\uC6C3" }), void 0) }, void 0)] }), void 0)] }), void 0));
};
export default Settings;
//# sourceMappingURL=Settings.js.map