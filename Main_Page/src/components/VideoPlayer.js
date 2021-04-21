import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const VideoPlayer = ({ currentVideo, darkMode, handleRemoveVideoPlayer, }) => {
    const { videoId, title, description, channelId } = currentVideo;
    return (_jsxs("div", Object.assign({ className: darkMode ? "VideoPlayer darkMode" : "VideoPlayer" }, { children: [_jsx("div", { children: _jsx("button", Object.assign({ onClick: handleRemoveVideoPlayer, style: {
                        float: "right",
                    } }, { children: "\u00D7" }), void 0) }, void 0),
            _jsxs("div", Object.assign({ className: "" }, { children: [_jsx("iframe", { src: `https://www.youtube.com/embed/${videoId}`, allowFullScreen: true }, void 0),
                    _jsxs("h2", { children: ["\uC81C\uBAA9: ", title] }, void 0),
                    _jsxs("div", { children: ["\uCC44\uB110: ", channelId] }, void 0),
                    _jsxs("div", { children: ["\uC124\uBA85: ", description] }, void 0)] }), void 0)] }), void 0));
};
//# sourceMappingURL=VideoPlayer.js.map