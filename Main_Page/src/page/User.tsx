import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import VideoList from "../components/VideoList";
import { Settings } from "./Settings";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { profileInterface } from "../App";
// import VideoPlayer from './VideoPlayer';

axios.defaults.withCredentials = true;

export interface UserProps {
  handleLoginToggle: Function;
  profile: profileInterface;
  accessToken: string;
  refreshToken: string;
}

export const User: React.FC<UserProps> = ({
  handleLoginToggle,
  profile,
  accessToken,
  refreshToken,
}) => {
  const [isLoadMore, isLoadToggle] = useState(false);
  const [loadCount, countHandler] = useState(0);
  const [videos, videosHandler] = useState([]);
  const [total, totalHandler] = useState(0);
  const [keyword, keywordHandler] = useState("");
  const [currentVideo, currentVideoHandler] = useState({});
  const [isSettingsOpen, settingHandler] = useState(false);
  const [isDarkMode, darkmodeHandler] = useState(false);
  const keywordCallback = useCallback(
    (keyword) => {
      // 키워드가 변경되었습니다. 여기에서 서버로 키워드를 담아 요청을 날리세요.
      console.log("keyword changed");
      axios
        .post("https://localhost:4611/resource/search", {
          keyword: keyword,
        })
        .then((body) => {
          console.log(body);
          // this.setState({ videos: body.data });
          videosHandler(body.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [keyword]
  );
  useEffect(() => {
    if (videos.length === 0)
      axios
        .post(
          "https://localhost:4611/resource",
          {
            email: profile.email,
            picture: profile.picture,
            name: profile.name,
            refreshToken: refreshToken,
          },
          {
            headers: {
              Authorization: `accessToken=Bearer ${accessToken}`,
            },
          }
        )
        .then((body) => {
          // this.setState({ videos: body.data.videos, total: body.data.total });
          videosHandler(body.data.videos);
          totalHandler(body.data.total);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return function cleanUp() {
      console.log("unloaded");
      window.removeEventListener("scroll", scrollHandler);
    };
  });
  useEffect(() => {
    axios
      .post(
        `https://localhost:4611/resource/lazyload`,
        {
          email: profile.email,
          numOfCards: videos.length,
        },
        {
          headers: {
            Authorization: `accessToken=Bearer ${accessToken}`,
          },
        }
      )
      .then((body) => {
        // this.setState({ videos: propVideos, isLoadMore: false });
        videosHandler(videos.concat(body.data));
        isLoadToggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loadCount]);

  const scrollHandler = function () {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !isLoadMore) {
      if (accessToken) {
        // this.setState({ isLoadMore: true });
        console.log(loadCount);
        let tmp = loadCount + 1;
        countHandler(tmp);
        isLoadToggle(true);
      }
    }
  };
  // componentWillUnmount():void {
  //   window.removeEventListener("scroll");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate!");
  // }
  const handleDarkModeToggle = () => {
    //this.setState({ isDarkMode: !this.state.isDarkMode });
    darkmodeHandler(!isDarkMode);
  };
  const handleSettingsToggle = () => {
    //this.setState({ isSettingsOpen: !this.state.isSettingsOpen });
    settingHandler(!isSettingsOpen);
  };
  const handleKeywordUpdate = async (value: string) => {
    await keywordHandler(value);
    keywordCallback(keyword);
  };

  return (
    <div>
      <Header handleSettingsToggle={handleSettingsToggle} />
      <SearchBar handleKeywordUpdate={handleKeywordUpdate} />
      <div className="videoList">
        {videos.length ? (
          <VideoList videos={videos} profile={profile} total={total} />
        ) : null}
      </div>
      <Settings
        profile={profile}
        isSettingsOpen={isSettingsOpen}
        isDarkMode={isDarkMode}
        handleLoginToggle={
          handleLoginToggle as React.MouseEventHandler<HTMLButtonElement>
        }
        handleSettingsToggle={handleSettingsToggle}
        handleDarkModeToggle={handleDarkModeToggle}
      />
    </div>
  );
};
