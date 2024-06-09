"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./ReviewsCollectedStyles.scss");
const ReviewsCollected = (props) => {
    console.log(props);
    const [isReadMore, setIsReadMore] = (0, react_1.useState)(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const { data } = props;
    // this is an example of the review data: look in trello 
    const renderReview = (rev) => {
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'review-item', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'user-details', children: [(0, jsx_runtime_1.jsx)("img", { src: rev.author_details.avatar_path, alt: rev.author }), (0, jsx_runtime_1.jsx)("p", { children: rev.author }), (0, jsx_runtime_1.jsxs)("p", { children: ["Rating: ", (0, jsx_runtime_1.jsx)("span", { children: rev.author_details.rating })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'created-date', children: [(0, jsx_runtime_1.jsxs)("p", { children: [isReadMore ? `${rev.content.substring(0, 350)}` : rev.content, (0, jsx_runtime_1.jsx)("span", { onClick: toggleReadMore, children: isReadMore ? "...read more" : " show less" })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Created : ", rev.created_at] })] })] }));
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: 'review-items', children: data && data.map((review) => renderReview(review)) }));
};
exports.default = ReviewsCollected;
//# sourceMappingURL=ReviewsCollected.js.map