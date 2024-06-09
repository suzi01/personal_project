"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./MissingCredit.style.scss");
const MissingCredit = (props) => {
    return ((0, jsx_runtime_1.jsx)("img", { className: "img", src: "/images/no-user-profile.jpg", alt: props.title }));
};
exports.default = MissingCredit;
