import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./page/Login";
import { User } from "./page/User";
export const App = () => {
    const [isLogin, loginToggle] = useState(false);
    const [profile, profileHandler] = useState({
        email: "",
        name: "",
        picture: "",
        refreshToken: "",
        accessToken: "",
    });
    const [acc_token, accTokenHandler] = useState("");
    const [ref_token, refTokenHandler] = useState("");
    const [isDarkMode, darkmodeHandler] = useState(false);
    // componentDidMount() {
    //   window.addEventListener('scroll', handler);
    //   function handler(e) {
    //     console.log(
    //       e.target.scrollHeight - e.target.scrollTop,
    //       e.target.clientHeight
    //     );
    //   }
    // }
    const handleLoginToggle = (acc, ref) => {
        // this.setState({
        //   isLogin: !this.state.isLogin,
        //   acc_token: acc,
        //   ref_token: ref,
        // });
        loginToggle(!isLogin);
        accTokenHandler(acc);
        refTokenHandler(ref);
    };
    return (_jsx("div", Object.assign({ className: isDarkMode ? "darkmode" : "" }, { children: _jsxs(Switch, { children: [_jsx(Route, { exact: true, path: "/login", render: () => (_jsx(Login, { handleLoginToggle: handleLoginToggle, handleProfileUpdate: profileHandler }, void 0)) }, void 0),
                _jsx(Route, { exact: true, path: "/user", render: () => {
                        if (isLogin) {
                            return (_jsx(User, { handleLoginToggle: loginToggle, profile: profile, accessToken: acc_token, refreshToken: ref_token, isDarkMode: isDarkMode, darkModeToggler: darkmodeHandler }, void 0));
                        }
                        return _jsx(Redirect, { to: "/login" }, void 0);
                    } }, void 0),
                _jsx(Route, { path: "/", render: () => {
                        if (isLogin) {
                            return _jsx(Redirect, { to: "/user" }, void 0);
                        }
                        return _jsx(Redirect, { to: "/login" }, void 0);
                    } }, void 0)] }, void 0) }), void 0));
};
export default App;
//# sourceMappingURL=App.js.map