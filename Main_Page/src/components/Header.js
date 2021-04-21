import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/Header.css";
import { useHistory } from "react-router-dom";
export const Header = ({ handleSettingsToggle }) => {
    let history = useHistory();
    return (_jsxs("div", { children: [_jsxs("div", Object.assign({ className: "YourTube" }, { children: [_jsx("img", { src: "../images/yourtube-small.png", alt: "YoutubeLogo", className: "HeaderLogo", onClick: () => {
                            history.push("/user");
                        } }, void 0),
                    _jsx("h3", Object.assign({ className: "Logo" }, { children: "YourTube" }), void 0)] }), void 0),
            _jsx("button", Object.assign({ className: "modalButton", onClick: handleSettingsToggle }, { children: "\u2261 Settings" }), void 0)] }, void 0));
};
//# sourceMappingURL=Header.js.map