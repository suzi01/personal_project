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
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
const Card_1 = __importDefault(require("react-bootstrap/Card"));
const Row_1 = __importDefault(require("react-bootstrap/Row"));
const Col_1 = __importDefault(require("react-bootstrap/Col"));
const profileService_1 = require("../../services/profileService");
const AuthContext_1 = require("../../Context/AuthContext");
require("./addedLikesStyles.scss");
// get image from tmdb - https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg
function AddedLikes(props) {
    const [movies, setMovies] = (0, react_1.useState)([]);
    const { user } = (0, react_1.useContext)(AuthContext_1.AuthContext);
    (0, react_1.useEffect)(() => {
        function getLoggedUser() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield (0, profileService_1.getUser)(user._id);
                setMovies(response.addedMovies);
            });
        }
        getLoggedUser();
    }, [movies]);
    const handleClick = (e) => __awaiter(this, void 0, void 0, function* () {
        const target = e.target;
        const media_id = target.name;
        const media_type = target.value;
        try {
            const res = yield (0, profileService_1.removeFromList)(user._id, media_id, media_type);
        }
        catch (err) {
            console.log(err);
        }
    });
    const renderCard = (card) => {
        return ((0, jsx_runtime_1.jsx)(Card_1.default, { className: "film-card", children: (0, jsx_runtime_1.jsxs)(Row_1.default, { children: [(0, jsx_runtime_1.jsx)(Col_1.default, { md: 6, sm: 4, xs: 4, children: (0, jsx_runtime_1.jsx)(Card_1.default.Img, { variant: "top", src: `https://image.tmdb.org/t/p/w500${card.poster_path}` }) }), (0, jsx_runtime_1.jsx)(Col_1.default, { md: 6, sm: 8, xs: 8, children: (0, jsx_runtime_1.jsxs)(Card_1.default.Body, { children: [(0, jsx_runtime_1.jsx)(Card_1.default.Title, { children: card.original_title }), (0, jsx_runtime_1.jsx)(Card_1.default.Text, { children: card.overview.length > 200 ? `${card.overview.substring(0, 200)}...` : card.overview }), (0, jsx_runtime_1.jsxs)("div", { className: "card-buttons", children: [(0, jsx_runtime_1.jsx)("button", { children: "Add to Vote" }), (0, jsx_runtime_1.jsx)("button", { name: card.id, value: card.media_type, onClick: (e) => handleClick(e), children: "Remove Like" })] })] }) })] }) }));
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "container-div", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Your Like List" }), "\u2202", (0, jsx_runtime_1.jsx)("div", { className: "content-div", children: (0, jsx_runtime_1.jsx)("div", { className: "films", children: movies && movies.map((item) => renderCard(item)) }) })] }) }));
}
exports.default = AddedLikes;
//# sourceMappingURL=AddedLikes.js.map