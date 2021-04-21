import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "./page/Login";
import { User } from "./page/User";

export interface profileInterface {
  email: string;
  name: string;
  picture: string;
  refreshToken: string;
  accessToken: string;
}

export const App: React.FC<{}> = () => {
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
  const handleLoginToggle = (acc: string, ref: string) => {
    // this.setState({
    //   isLogin: !this.state.isLogin,
    //   acc_token: acc,
    //   ref_token: ref,
    // });
    loginToggle(!isLogin);
    accTokenHandler(acc);
    refTokenHandler(ref);
  };

  return (
    <div className={isDarkMode ? "darkmode" : ""}>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => (
            <Login
              handleLoginToggle={handleLoginToggle}
              handleProfileUpdate={profileHandler}
            />
          )}
        />
        <Route
          exact
          path="/user"
          render={() => {
            if (isLogin) {
              return (
                <User
                  handleLoginToggle={loginToggle}
                  profile={profile}
                  accessToken={acc_token}
                  refreshToken={ref_token}
                  isDarkMode={isDarkMode}
                  darkModeToggler={darkmodeHandler}
                />
              );
            }
            return <Redirect to="/login" />;
          }}
        />
        <Route
          path="/"
          render={() => {
            if (isLogin) {
              return <Redirect to="/user" />;
            }
            return <Redirect to="/login" />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
