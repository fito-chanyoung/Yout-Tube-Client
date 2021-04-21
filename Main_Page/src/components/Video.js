import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../css/Video.css";
export const Video = ({ video }) => {
    return (_jsxs("div", Object.assign({ className: "contents" }, { children: [_jsx("img", { className: "thumbnail-img", width: "250px", src: video.thumbnail, alt: "thumbnail" }, void 0),
            _jsxs("div", Object.assign({ className: "textdata" }, { children: [_jsx("h4", Object.assign({ className: "title" }, { children: video.title }), void 0),
                    _jsx("div", Object.assign({ className: "description" }, { children: video.description }), void 0)] }), void 0)] }), void 0));
};
export default Video;
//# sourceMappingURL=Video.js.map