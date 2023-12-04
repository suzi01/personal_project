"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
require("./StarterStyles.scss");
function Starter() {
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const slides = [
        { imageSrc: '/images/top-gun-maverick.jpg', alt: 'top-gun-maverick' },
        { imageSrc: '/images/daredevil.jpg', alt: 'daredevil' },
        { imageSrc: '/images/avengers-endgame.jpeg', alt: 'end-game' },
        { imageSrc: '/images/stranger-things.jpg', alt: 'stranger-things' }
    ];
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 7000);
        return () => {
            clearInterval(interval);
        };
    }, [slides.length]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "outer-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "bgImage", children: slides.map((slide, index) => ((0, jsx_runtime_1.jsx)("div", { className: `kenBurnSlides ${index === currentIndex ? 'active' : ''}`, children: (0, jsx_runtime_1.jsx)("img", { src: slide.imageSrc, alt: slide.alt }) }, index))) }), (0, jsx_runtime_1.jsxs)("div", { className: "content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "description", children: ["Welcome to Entertainment Central", (0, jsx_runtime_1.jsx)("br", {}), " Home to Movies and TV shows. ", (0, jsx_runtime_1.jsx)("br", {}), "Sign up or Login now!"] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: "registerLink", to: "/login", children: (0, jsx_runtime_1.jsx)("button", { className: "signUp", children: "START HERE!" }) })] }), (0, jsx_runtime_1.jsx)("footer", { className: "bottom", children: (0, jsx_runtime_1.jsxs)("div", { className: "companies", children: [(0, jsx_runtime_1.jsx)("img", { src: '/images/company_logos1.jpeg' }), (0, jsx_runtime_1.jsx)("img", { src: '/images/company_logos2.jpeg' })] }) })] }));
}
exports.default = Starter;
