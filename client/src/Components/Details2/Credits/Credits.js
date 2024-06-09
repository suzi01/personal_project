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
const MissingCredit_1 = __importDefault(require("../MissingCredit/MissingCredit"));
const profileService_1 = require("../../../services/profileService");
require("./Credits.style.scss");
function Credits(props) {
    const [credits, setCredits] = (0, react_1.useState)([]);
    const { media_id, media_type } = props;
    (0, react_1.useEffect)(() => {
        function getAllCredits() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield (0, profileService_1.getMediaCredits)(media_type, media_id);
                setCredits(response);
            });
        }
        getAllCredits();
    }, [credits, media_id, media_type]);
    const renderCard = (credit) => ((0, jsx_runtime_1.jsxs)("div", { className: "cast-card", children: [credit.profile_path !== null ? ((0, jsx_runtime_1.jsx)("img", { src: `https://image.tmdb.org/t/p/w500${credit.profile_path}`, alt: credit.original_name })) : ((0, jsx_runtime_1.jsx)(MissingCredit_1.default, { title: credit.original_name })), (0, jsx_runtime_1.jsxs)("p", { children: [credit.original_name, (0, jsx_runtime_1.jsx)("br", {}), "as", (0, jsx_runtime_1.jsx)("br", {}), credit.character] })] }));
    if (!credits)
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    return ((0, jsx_runtime_1.jsx)("div", { className: "cast-cards", children: credits.length > 0 &&
            credits.map((credit) => renderCard(credit)) }));
}
exports.default = Credits;
