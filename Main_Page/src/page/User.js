import { __awaiter } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
import VideoList from "../components/VideoList";
import { Settings } from "./Settings";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import "../css/user.css";
import { VideoPlayer } from "../components/VideoPlayer";
import { useHistory } from "react-router";
axios.defaults.withCredentials = true;
export const User = ({ handleLoginToggle, profile, accessToken, refreshToken, isDarkMode, darkModeToggler, }) => {
    const [isLoadMore, isLoadToggle] = useState(false);
    const [isSearched, toggleSearch] = useState(false);
    const [loadCount, countHandler] = useState(0);
    const [videos, videosHandler] = useState([]);
    const [total, totalHandler] = useState(0);
    const [keyword, keywordHandler] = useState("");
    const [currentVideo, currentVideoHandler] = useState({});
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
                .post("https://yourtubeback.cysong.net:4611/resource", {
                email: profile.email,
                picture: profile.picture,
                name: profile.name,
                refreshToken: refreshToken,
            }, {
                headers: {
                    Authorization: `accessToken=Bearer ${accessToken}`,
                },
            })
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
            .post(`https://yourtubeback.cysong.net:4611/resource/lazyload`, {
            email: profile.email,
            numOfCards: videos.length,
        }, {
            headers: {
                Authorization: `accessToken=Bearer ${accessToken}`,
            },
        })
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
        const windowHeight = "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
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
    const handleKeywordUpdate = (value) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("test", value);
        keywordHandler(value);
    });
    const handleRemoveVideoPlayer = (target) => __awaiter(void 0, void 0, void 0, function* () {
        yield axios.post(`https://yourtubeback.cysong.net:4611/resource/delete/${target.id}`, {
            email: profile.email,
        }, {
            headers: {
                Authorization: `accessToken=Bearer ${accessToken}`,
            },
        });
        if (target === undefined) {
            currentVideoHandler({});
        }
        else {
            const position = videos.findIndex((index) => index.id === target.id);
            videos.splice(position, 1);
            videosHandler(videos);
            totalHandler(total - 1);
        }
    });
    const makeDefault = () => __awaiter(void 0, void 0, void 0, function* () {
        toggleSearch(false);
        keywordHandler("");
        let response = yield axios.post("https://yourtubeback.cysong.net:4611/resource", {
            email: profile.email,
            picture: profile.picture,
            name: profile.name,
            refreshToken: refreshToken,
        }, {
            headers: {
                Authorization: `accessToken=Bearer ${accessToken}`,
            },
        });
        videosHandler(response.data.videos);
        isLoadToggle(false);
    });
    const syncHandler = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield axios.get(`https://yourtubeback.cysong.net:4611/resource/sync/${profile.email}`, {
            headers: {
                Authorization: `accessToken=Bearer ${accessToken}`,
            },
        });
        totalHandler(total + response.data);
    });
    return (_jsxs("div", Object.assign({ className: isDarkMode ? "darkmode" : "" }, { children: [_jsxs("div", Object.assign({ className: "nav" }, { children: [_jsx(Header, { handleSettingsToggle: handleSettingsToggle, isDarkMode: isDarkMode }, void 0),
                    _jsx("div", Object.assign({ className: "mobile-hide" }, { children: _jsx(SearchBar, { handleKeywordUpdate: handleKeywordUpdate, isDarkMode: isDarkMode }, void 0) }), void 0)] }), void 0),
            currentVideo.id ? (_jsx("div", { children: _jsx(VideoPlayer, { currentVideo: currentVideo, darkMode: isDarkMode, handleRemoveVideoPlayer: handleRemoveVideoPlayer, resetHandler: currentVideoHandler }, void 0) }, void 0)) : (_jsx("div", Object.assign({ className: "videoList" }, { children: videos.length ? (_jsx(VideoList, { isDarkMode: isDarkMode, videos: videos, profile: profile, total: total, onclickHandler: currentVideoHandler, handleRemovePlayList: handleRemoveVideoPlayer, isSearched: isSearched, makeDefault: makeDefault }, void 0)) : null }), void 0)),
            _jsx(Settings, { profile: profile, isSettingsOpen: isSettingsOpen, isDarkMode: isDarkMode, handleLoginToggle: handleLoginToggle, handleSettingsToggle: handleSettingsToggle, handleDarkModeToggle: handleDarkModeToggle, handleKeywordUpdate: handleKeywordUpdate }, void 0),
            _jsx("button", Object.assign({ className: "sync", onClick: syncHandler }, { children: "\uBAA9\uB85D \uC2F1\uD06C" }), void 0)] }), void 0));
};
//# sourceMappingURL=User.js.map