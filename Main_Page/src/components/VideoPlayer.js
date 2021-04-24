import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/videoPlayer.css";
export const VideoPlayer = ({ currentVideo, darkMode, handleRemoveVideoPlayer, resetHandler, }) => {
    const { videoId, title, description, channelId } = currentVideo;
    function resetVideo() {
        resetHandler({});
    }
    function removeVideo() {
        handleRemoveVideoPlayer(currentVideo);
        resetHandler({});
    }
    return (_jsx("div", Object.assign({ className: darkMode ? "VideoPlayer darkmode" : "VideoPlayer" }, { children: _jsxs("div", { children: [_jsx("div", Object.assign({ className: "iframe-wrapper" }, { children: _jsx("iframe", { frameBorder: "0", src: `https://www.youtube.com/embed/${videoId}`, allowFullScreen: true }, void 0) }), void 0),
                _jsx("hr", {}, void 0),
                _jsxs("div", Object.assign({ className: "video-desc" }, { children: [_jsx("h2", { children: title }, void 0),
                        _jsx("button", Object.assign({ onClick: removeVideo, style: {
                                float: "right",
                            } }, { children: "\u00D7" }), void 0),
                        _jsx("button", Object.assign({ className: "reset", onClick: resetVideo, style: {
                                float: "right",
                            } }, { children: "reset" }), void 0)] }), void 0),
                _jsx("hr", {}, void 0),
                _jsx("div", { children: description }, void 0)] }, void 0) }), void 0));
};
//# sourceMappingURL=VideoPlayer.js.map