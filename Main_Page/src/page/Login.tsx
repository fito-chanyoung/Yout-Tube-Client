import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../css/Login.css";
import s4 from "../assets/s4.gif";

// To allow receiving & sending cookies by a CORS request successfully.
axios.defaults.withCredentials = true;

export interface LoginProps {
  handleLoginToggle: Function;
  handleProfileUpdate: Function;
}

export const Login: React.FC<LoginProps> = (
  { handleLoginToggle, handleProfileUpdate },
  props
) => {
  const history = useHistory();
  const handleAuthSuccess = ({ code }: any) => {
    axios
      .post("https://localhost:4611/auth/login", {
        authCode: code,
      })
      .then((res) => {
        const { email, name, picture, accessToken, refreshToken } = res.data;
        handleLoginToggle(accessToken, refreshToken);
        handleProfileUpdate({ email, name, picture });
        history.push("/user");
      })
      .catch((err) => {
        console.log(err.error);
        return;
      });
  };
  const handleAuthFailure = ({ error }: any) => {
    console.log(error); // log error code (https://www.npmjs.com/package/react-google-login#onfailure-callback)
    history.push("/login");
    // 유저에게 인증 실패 피드백 -> 모달 (advanced)
  };

  return (
    <div className="container">
      <div className="left-sector">
        <img src={s4} className="s4" />
      </div>
      <div className="right-sector">
        <div className="logo-desc-container">
          <div className="logo-desc">
            <div className="comment">This is YourTube.</div>
            <div className="comment2">What did you Like recently?</div>
          </div>
        </div>
        <div className="button">
          <GoogleLogin
            type="button"
            buttonText="Sign in with Google"
            cookiePolicy={"single_host_origin"}
            clientId="795606331997-u7q92vmtdurb1g02f9vmk4vu0arve9vf.apps.googleusercontent.com" //client ID는 config.js라는 폴더 안의 동명의 파일 안에 있음.하람님 아이디.
            onSuccess={handleAuthSuccess}
            onFailure={handleAuthFailure}
            scope="https://www.googleapis.com/auth/youtube"
            prompt="consent" // 첫 로그인이 아니더라도 강제로 refresh 토큰을 발행하게 함 - https://github.com/anthonyjgrove/react-google-login/issues/144
            responseType="code" // get auth_code (Default value 'permission' is to get access_token directly)
            accessType="offline" // to get access_token & refresh_token together
            // isSignedIn? // if you needed
          />
        </div>
      </div>
    </div>
  );
};
