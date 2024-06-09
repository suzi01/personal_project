"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./SelectionSectionStyle.scss");
// for this to Worker, need to use multi search to get media type and id and then use the reviews route
const SelectionSection = (props) => {
    const { data } = props;
    const [isReadMore, setIsReadMore] = (0, react_1.useState)(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'show-selection', children: [(0, jsx_runtime_1.jsx)("img", { className: 'img', src: `https://image.tmdb.org/t/p/original${data.poster_path}`, alt: data.title }), (0, jsx_runtime_1.jsxs)("div", { className: 'details', children: [(0, jsx_runtime_1.jsx)("h1", { children: data.title || data.original_title }), (0, jsx_runtime_1.jsxs)("div", { className: 'info', children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Date released: ", data.release_date] }), (0, jsx_runtime_1.jsx)("div", { className: 'rating', children: (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: data.vote_average }), "Vote Average"] }) }), (0, jsx_runtime_1.jsx)("div", { className: 'rating', children: (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("span", { children: data.vote_count }), "Vote Count"] }) }), (0, jsx_runtime_1.jsx)("h2", { children: "Plot " }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("p", { children: data.overview })] })] })] }));
};
exports.default = SelectionSection;
//# sourceMappingURL=SelectionSection.js.map