"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
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
    const [userDetails, setUserDetails] = (0, react_1.useState)();
    const { user, dispatch } = (0, react_1.useContext)(AuthContext_1.AuthContext);
    const handleClick = () => {
        (0, apiCalls_1.logoutCall)(dispatch);
    };
    return ((0, jsx_runtime_1.jsxs)("nav", { className: "navbar", children: [(0, jsx_runtime_1.jsx)("div", { className: "logo", children: (0, jsx_runtime_1.jsx)("img", { src: "https://png.pngtree.com/element_our/20190530/ourmid/pngtree-watch-movie-popcorn-illustration-image_1244707.jpg", alt: 'logo' }) }), (0, jsx_runtime_1.jsxs)("span", { className: "web-name", children: ["Entertainment ", (0, jsx_runtime_1.jsx)("br", {}), " Central"] }), user ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "menu-items", children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/home", children: [(0, jsx_runtime_1.jsx)(ai_1.AiFillHome, {}), "  Home "] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/reviews", children: [" ", (0, jsx_runtime_1.jsx)(md_1.MdRateReview, {}), "  Reviews"] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/vote", children: [" ", (0, jsx_runtime_1.jsx)(md_1.MdHowToVote, {}), "  Vote "] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/messages", children: [(0, jsx_runtime_1.jsx)(ti_1.TiMessages, {}), "  Messages"] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/watchlist", children: [" ", (0, jsx_runtime_1.jsx)(md_1.MdLocalMovies, {}), "  Watchlist "] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { className: "link-style", to: "/addedlikes", children: [(0, jsx_runtime_1.jsx)(ri_1.RiMovieFill, {}), "  Added Likes "] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "profile", children: [(0, jsx_runtime_1.jsx)("img", { src: user.profile.thumbnail, alt: user.name.userName }), (0, jsx_runtime_1.jsx)("span", { children: user.name.userName })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/login", children: (0, jsx_runtime_1.jsx)("button", { className: "sign-in", onClick: handleClick, children: "Log Out" }) })] })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/login", children: (0, jsx_runtime_1.jsx)("button", { className: "sign-in", children: "Login" }) }))] }));
}
const Nav = styled_components_1.default.nav `
  ${'' /* position: fixed; */}
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 18px;
  z-index: 1;
  background-color:black;
`;
const Logo = styled_components_1.default.div `
  width: 30px;
  padding-left: 20px;
  padding-right: 35px;
  img {
    margin-top: 5px;
    width: 70px;
    border-radius: 50%;
    // background-color:black;
  }
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
    img {
      margin-top: 5px;
      width: 30px;
      border-radius: 50%;
    }
  }
`;
const WebName = styled_components_1.default.span `
  color: white;
  display: block;
  margin-left: 50px;
  line-height: 20px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    margin-left: 5px;
    font-size: 0.5rem;
    line-height: 0.6rem;
  }
`;
const MenuItems = styled_components_1.default.div `
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 80%;
  margin-left: 30px;
  margin-right: auto;
  a {
    text-decoration: none;
    color: white;
    padding: 0 15px;
    font-size: 20px;
    display: inline-block;
    position: relative;
  }
  a::after {
    content: "";
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 4px;
    bottom: -5px;
    left: 10px;
    background-color: #d3d6d7;
    transform-origin: bottom right;
    transition: transform 0.5s ease-in-out;
  }
  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 10px;
    a {
      display: none;
    }
  }
`;
const LinkStyle = (0, styled_components_1.default)(react_router_dom_1.Link) `
  text-decoration: none;
  color: white;
  padding: 0 15px;
  font-size: 20px;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 4px;
    bottom: -5px;
    left: 10px;
    background-color: #d3d6d7;
    transform-origin: bottom right;
    transition: transform 0.5s ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
const SignIn = styled_components_1.default.button `
  width: 90px;
  height: 50px;
  border: 2px solid white;
  border-radius: 5px;
  margin-right: 13px;
  background-color: black;
  color: white;
  font-size: 20px;
  &:hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 20px;
    font-size: 0.6rem;
    margin-right: 5px;
  }
`;
const Profile = styled_components_1.default.div `
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:10px;
  padding:0 10px;
  color:white;

  img{
    border-radius:50%;
    height:75px;
    width:75px;
    padding:2px;
    margin-right:10px;
    object-fit:cover;
  }
`;
exports.default = Navbar;
