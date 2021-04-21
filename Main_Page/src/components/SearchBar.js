import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export const SearchBar = ({ handleKeywordUpdate, }) => {
    const [value, valueHandler] = useState("");
    const handleInputValueChange = (e) => {
        //this.setState({ value: e.target.value });
        valueHandler(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleKeywordUpdate(value);
    };
    return (_jsx("div", { children: _jsxs("form", Object.assign({ onSubmit: handleSubmit }, { children: [_jsx("input", { className: "SearchtBar", placeholder: "\uCC3E\uACE0 \uC2F6\uC740 \uC601\uC0C1\uC758 \uC81C\uBAA9\uC774\uB098 \uB2E8\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694", onChange: handleInputValueChange }, void 0),
                _jsx("button", Object.assign({ type: "submit", className: "SearchtButton" }, { children: "\uAC80\uC0C9" }), void 0)] }), void 0) }, void 0));
};
//# sourceMappingURL=SearchBar.js.map