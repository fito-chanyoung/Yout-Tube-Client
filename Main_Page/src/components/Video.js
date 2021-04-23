import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/Video.css";
export const Video = ({ isDarkMode, video, onclickHandler, handleRemovePlayList, }) => {
    function onclick(e) {
        e.preventDefault();
        onclickHandler(video);
    }
    function onRemove() {
        handleRemovePlayList(video);
    }
    return (_jsxs("div", Object.assign({ className: isDarkMode ? "contents-container darkmode" : "contents-container" }, { children: [_jsxs("div", Object.assign({ className: "contents", onClick: onclick }, { children: [_jsx("div", Object.assign({ className: "img-container" }, { children: _jsx("img", { className: "thumbnail-img", src: video.thumbnail, alt: "thumbnail" }, void 0) }), void 0),
                    _jsxs("div", Object.assign({ className: "textdata" }, { children: [_jsx("h4", Object.assign({ className: "title" }, { children: video.title }), void 0),
                            _jsx("div", Object.assign({ className: "description" }, { children: video.description }), void 0)] }), void 0)] }), void 0),
            _jsx("div", Object.assign({ style: {
                    right: "0",
                    float: "right",
                } }, { children: _jsx("button", Object.assign({ className: "reset", onClick: onRemove }, { children: "\u00D7" }), void 0) }), void 0)] }), void 0));
};
export default Video;
//# sourceMappingURL=Video.js.map