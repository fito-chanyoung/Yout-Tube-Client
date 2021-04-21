import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Video } from "./Video";
import "../css/Video.css";
export const VideoList = ({ videos, total, profile, isDarkMode, }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("h3", Object.assign({ className: "whosid" }, { children: [profile.name, "\uB2D8\uC758 \uC88B\uC544\uC694 \uB3D9\uC601\uC0C1 \uB9AC\uC2A4\uD2B8\uC785\uB2C8\uB2E4."] }), void 0),
            _jsx("div", Object.assign({ className: "media" }, { children: videos.length !== total ? (_jsx("div", { children: videos.map((video) => (_jsx(Video, { video: video, isDarkMode: isDarkMode }, video.id))) }, void 0)) : (_jsxs("div", { children: [videos.map((video) => (_jsx(Video, { video: video, isDarkMode: isDarkMode }, video.id))),
                        _jsx("div", Object.assign({ className: "end" }, { children: _jsx("div", { children: "\uB354\uC774\uC0C1\uC758 \uB3D9\uC601\uC0C1\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }, void 0) }), void 0)] }, void 0)) }), void 0)] }, void 0));
};
export default VideoList;
//# sourceMappingURL=VideoList.js.map