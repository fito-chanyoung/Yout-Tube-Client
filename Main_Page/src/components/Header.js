import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/Header.css";
import { useHistory } from "react-router-dom";
import small from "../images/yourtube-small.png";
export const Header = ({ handleSettingsToggle, isDarkMode, }) => {
    let history = useHistory();
    return (_jsxs("div", Object.assign({ className: isDarkMode ? "header-mobile darkmod" : "header-mobile" }, { children: [_jsxs("div", Object.assign({ className: isDarkMode ? "YourTube darkmode" : "YourTube" }, { children: [_jsx("div", Object.assign({ className: isDarkMode ? "logo-container darkmode" : "logo-container" }, { children: _jsx("img", { src: small, alt: "YoutubeLogo", className: "HeaderLogo", onClick: () => {
                                history.push("/user");
                            } }, void 0) }), void 0),
                    _jsx("div", Object.assign({ className: "Logo" }, { children: _jsx("h3", Object.assign({ className: "logo-detail" }, { children: "YourTube" }), void 0) }), void 0)] }), void 0),
            _jsxs("button", Object.assign({ className: isDarkMode ? "modalButton darkMode" : "modalButton", onClick: handleSettingsToggle }, { children: ["\u2261 ", _jsx("span", Object.assign({ className: "modal-desc" }, { children: "Settings" }), void 0)] }), void 0)] }), void 0));
};
//# sourceMappingURL=Header.js.map