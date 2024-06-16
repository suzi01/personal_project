"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Credits_1 = __importDefault(require("../Credits/Credits"));
const Recommendations_1 = __importDefault(require("../Recommendations/Recommendations"));
const profileService_1 = require("../../../services/profileService");
const AuthContext_1 = require("../../../Context/AuthContext");
require("./Details.styles.scss");
function Details() {
    const [mediaDetails, setMediaDetails] = (0, react_1.useState)();
    const [addButton, setAddButton] = (0, react_1.useState)();
    const [movieInList, setMovieInList] = (0, react_1.useState)();
    const { user } = (0, react_1.useContext)(AuthContext_1.AuthContext);
    let { media_type, media_id } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        function getDetails() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield (0, profileService_1.getMediaDetails)(media_type, media_id);
                console.log(response);
                setMediaDetails(response);
            });
        }
        getDetails();
    }, [media_id, media_type]);
    (0, react_1.useEffect)(() => {
        function checkLibrary() {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield (0, profileService_1.getUser)(user._id);
                const movieList = res.addedMovies.filter((e) => {
                    return e.media_type === media_type && e.id == media_id;
                });
                setMovieInList(movieList);
                if (movieList.length > 0) {
                    setAddButton(true);
                }
                else {
                    setAddButton(false);
                }
                console.log(mediaDetails);
            });
        }
        checkLibrary();
    }, [media_id, media_type]);
    if (!mediaDetails)
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    const handleClick = () => __awaiter(this, void 0, void 0, function* () {
        if (addButton === false) {
            const add_details = Object.assign(Object.assign({}, mediaDetails), { media_type });
            try {
                const res = yield (0, profileService_1.addMovieToList)(user._id, add_details);
            }
            catch (err) {
                console.log(err);
            }
        }
        if (addButton === true) {
            try {
                const res = yield (0, profileService_1.removeFromList)(user._id, media_id, media_type);
            }
            catch (err) {
                console.log(err);
            }
        }
        setAddButton(!addButton);
    });
    const backgroundImage = `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 10%,
        rgba(0, 0, 0, 1)
    ),url(https://image.tmdb.org/t/p/original${mediaDetails.poster_path}})`;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "details-container", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-image", style: { backgroundImage } }), (0, jsx_runtime_1.jsxs)("div", { className: "contents", children: [(0, jsx_runtime_1.jsx)("div", { className: "poster-img", children: (0, jsx_runtime_1.jsx)("img", { src: mediaDetails.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${mediaDetails.poster_path}`
                                        : '/images/image_not_available.png', alt: "poster" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "info", children: [(0, jsx_runtime_1.jsx)("h1", { children: mediaDetails.original_title || mediaDetails.name }), (0, jsx_runtime_1.jsx)("div", { className: "tag-buttons", children: mediaDetails.genres.map((item) => ((0, jsx_runtime_1.jsx)("button", { children: item.name }, item.id))) }), (0, jsx_runtime_1.jsxs)("p", { children: [mediaDetails.overview
                                                ? mediaDetails.overview
                                                : 'No details available', (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), "Runtime:", ' ', mediaDetails.runtime ||
                                                mediaDetails.episode_run_time, ' ', "mins"] }), (0, jsx_runtime_1.jsxs)("div", { className: "ratings", children: [(0, jsx_runtime_1.jsxs)("p", { children: ["vote average:", ' ', (0, jsx_runtime_1.jsx)("span", { children: mediaDetails.vote_average })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["popularity:", ' ', (0, jsx_runtime_1.jsx)("span", { children: mediaDetails.popularity })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "additional-buttons", children: [(0, jsx_runtime_1.jsx)("button", { children: "Reviews" }), (0, jsx_runtime_1.jsx)("button", { onClick: handleClick, children: addButton ? 'Remove from list' : 'Add to list' }), (0, jsx_runtime_1.jsx)("button", { children: "Add to Vote" })] }), (0, jsx_runtime_1.jsx)(Credits_1.default, { media_id: media_id, media_type: media_type })] })] }), (0, jsx_runtime_1.jsx)("br", {})] }), (0, jsx_runtime_1.jsx)(Recommendations_1.default, { media_id: media_id, media_type: media_type })] }));
}
exports.default = Details;
