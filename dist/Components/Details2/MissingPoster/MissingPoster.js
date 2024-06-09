"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./MissingPoster.style.scss");
const MissingPoster = (props) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)("img", { src: "/images/no-poster-available.jpg", alt: props.title }), (0, jsx_runtime_1.jsx)("p", { children: props.title })] }, props.title));
};
exports.default = MissingPoster;
