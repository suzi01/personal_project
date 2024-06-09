"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AuthContext_1 = require("../../Context/AuthContext");
const apiCalls_1 = require("../../apiCalls");
const ai_1 = require("react-icons/ai");
const md_1 = require("react-icons/md");
const ti_1 = require("react-icons/ti");
const ri_1 = require("react-icons/ri");
require("./navbarStyles.scss");
function Navbar(props) {
    console.log(props);
    // props = user => addedmovies, email, name, password, profile, watched, id
    const [userDetails, setUserDetails] = (0, react_1.useState)();
    const { user, dispatch } = (0, react_1.useContext)(AuthContext_1.AuthContext);
    const handleClick = () => {
        (0, apiCalls_1.logoutCall)(dispatch);
    };
    return ((0, jsx_runtime_1.jsxs)("nav", { className: "navbar", children: [(0, jsx_runtime_1.jsx)("div", { className: "logo", children: (0, jsx_runtime_1.jsx)("img", { src: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-watch-movie-popcorn-illustration-image_1244707.jpg", alt: 'logo' }) }), (0, jsx_runtime_1.jsxs)("span", { className: "web-name", children: ["Entertainment ", (0, jsx_runtime_1.jsx)("br", {}), " Central"] }), user ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "menu-items", children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/home", children: [(0, jsx_runtime_1.jsx)(ai_1.AiFillHome, {}), "  Home "] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/reviews", children: [" ", (0, jsx_runtime_1.jsx)(md_1.MdRateReview, {}), "  Reviews"] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/vote", children: [" ", (0, jsx_runtime_1.jsx)(md_1.MdHowToVote, {}), "  Vote "] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/messages", children: [(0, jsx_runtime_1.jsx)(ti_1.TiMessages, {}), "  Messages"] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/watchlist", children: [" ", (0, jsx_runtime_1.jsx)(md_1.MdLocalMovies, {}), "  Watchlist "] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/addedlikes", children: [(0, jsx_runtime_1.jsx)(ri_1.RiMovieFill, {}), "  Added Likes "] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "profile", children: [(0, jsx_runtime_1.jsx)("img", { src: user.profile.thumbnail, alt: user.name.userName }), (0, jsx_runtime_1.jsx)("span", { children: user.name.userName })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/login", children: (0, jsx_runtime_1.jsx)("button", { className: "sign-in", onClick: handleClick, children: "Log Out" }) })] })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/login", children: (0, jsx_runtime_1.jsx)("button", { className: "sign-in", children: "Login" }) }))] }));
}
exports.default = Navbar;
