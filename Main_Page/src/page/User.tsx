import React, { useState, useEffect, useCallback, StrictMode } from "react";
import tslib from "tslib";
import axios from "axios";
import VideoList from "../components/VideoList";
import { Settings } from "./Settings";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { profileInterface } from "../App";

import "../css/user.css";
import { VideoPlayer } from "../components/VideoPlayer";
import { useHistory } from "react-router";

axios.defaults.withCredentials = true;

export type videoInterface = {
  id: number;
  etag: string;
  videoId: string;
  channelId: string;
  title: string;
  description: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
};
export interface UserProps {
  handleLoginToggle: Function;
  profile: profileInterface;
  accessToken: string;
  refreshToken: string;
  isDarkMode: boolean;
  darkModeToggler: Function;
}

export const User: React.FC<UserProps> = ({
  handleLoginToggle,
  profile,
  accessToken,
  refreshToken,
  isDarkMode,
  darkModeToggler,
}) => {
  const [isLoadMore, isLoadToggle] = useState(false);
  const [isSearched, toggleSearch] = useState(false);
  const [loadCount, countHandler] = useState(0);
  const [videos, videosHandler] = useState<Array<videoInterface>>([]);
  const [total, totalHandler] = useState(0);
  const [keyword, keywordHandler] = useState("");
  const [currentVideo, currentVideoHandler] = useState({} as videoInterface);
  const [isSettingsOpen, settingHandler] = useState(false);
  const history = useHistory();

  const keywordCallback = useEffect(() => {
    // 키워드가 변경되었습니다. 여기에서 서버로 키워드를 담아 요청을 날리세요.

    if (keyword !== "") {
      toggleSearch(true);
      axios
        .post("https://yourtubeback.cysong.net:4611/resource/search", {
          keyword: keyword,
          email: profile.email,
        })
        .then((body) => {
          videosHandler(body.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [keyword]);
  useEffect(() => {
    if (videos.length === 0)
      axios
        .post(
          "https://yourtubeback.cysong.net:4611/resource",
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
      window.removeEventListener("scroll", scrollHandler);
    };
  });
  useEffect(() => {
    axios
      .post(
        `https://yourtubeback.cysong.net:4611/resource/lazyload`,
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
    if (windowBottom >= docHeight && !isLoadMore && !isSearched) {
      if (accessToken) {
        let tmp = loadCount + 1;
        countHandler(tmp);
        isLoadToggle(true);
      }
    }
  };

  const handleDarkModeToggle = () => {
    darkModeToggler(!isDarkMode);
  };
  const handleSettingsToggle = () => {
    settingHandler(!isSettingsOpen);
  };
  const handleKeywordUpdate = async (value: string) => {
    console.log("test", value);
    keywordHandler(value);
  };
  const handleRemoveVideoPlayer = async (target: any) => {
    await axios.post(
      `https://yourtubeback.cysong.net:4611/resource/delete/${target.id}`,
      {
        email: profile.email,
      },
      {
        headers: {
          Authorization: `accessToken=Bearer ${accessToken}`,
        },
      }
    );
    if (target === undefined) {
      currentVideoHandler({} as videoInterface);
    } else {
      const position = videos.findIndex((index) => index.id === target.id);
      videos.splice(position, 1);
      videosHandler(videos);
      totalHandler(total - 1);
    }
  };
  const makeDefault = async () => {
    toggleSearch(false);
    keywordHandler("");

    let response = await axios.post(
      "https://yourtubeback.cysong.net:4611/resource",
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
    );
    videosHandler(response.data.videos);
    isLoadToggle(false);
  };

  const syncHandler = async () => {
    const response = await axios.get(
      `https://yourtubeback.cysong.net:4611/resource/sync/${profile.email}`,
      {
        headers: {
          Authorization: `accessToken=Bearer ${accessToken}`,
        },
      }
    );

    totalHandler(total + response.data);
  };

  return (
    <div className={isDarkMode ? "darkmode" : ""}>
      <div className="nav">
        <Header
          handleSettingsToggle={handleSettingsToggle}
          isDarkMode={isDarkMode}
        />
        <div className="mobile-hide">
          <SearchBar
            handleKeywordUpdate={handleKeywordUpdate}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
      {currentVideo.id ? (
        <div>
          <VideoPlayer
            currentVideo={currentVideo}
            darkMode={isDarkMode}
            handleRemoveVideoPlayer={handleRemoveVideoPlayer}
            resetHandler={currentVideoHandler}
          />
        </div>
      ) : (
        <div className="videoList">
          {videos.length ? (
            <VideoList
              isDarkMode={isDarkMode}
              videos={videos}
              profile={profile}
              total={total}
              onclickHandler={currentVideoHandler}
              handleRemovePlayList={handleRemoveVideoPlayer}
              isSearched={isSearched}
              makeDefault={makeDefault}
            />
          ) : null}
        </div>
      )}
      <Settings
        profile={profile}
        isSettingsOpen={isSettingsOpen}
        isDarkMode={isDarkMode}
        handleLoginToggle={
          handleLoginToggle as React.MouseEventHandler<HTMLButtonElement>
        }
        handleSettingsToggle={handleSettingsToggle}
        handleDarkModeToggle={handleDarkModeToggle}
        handleKeywordUpdate={handleKeywordUpdate}
      />
      <button className="sync" onClick={syncHandler}>
        목록 싱크
      </button>
    </div>
  );
};
