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
const Slide_1 = __importDefault(require("../../Home/Slide"));
const profileService_1 = require("../../../services/profileService");
require("./RecommendationsStyle.scss");
function Recommendations(props) {
    const [recommendations, setRecommendations] = (0, react_1.useState)();
    const { media_id, media_type } = props;
    (0, react_1.useEffect)(() => {
        function getMediaRecommendations() {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield (0, profileService_1.getRecommendations)(media_type, media_id);
                setRecommendations(response);
            });
        }
        getMediaRecommendations();
    }, [media_id, media_type]);
    if (!recommendations)
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    return ((0, jsx_runtime_1.jsx)("div", { className: "slide-container", children: (0, jsx_runtime_1.jsx)(Slide_1.default, { title: 'Recommendations', Images: recommendations }) }));
}
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color:black;
//   padding: 0;
//   h1 {
//     font-size: 30px;
//     text-align: left;
//     padding-left: 5%;
//   }
//   @media (max-width: 768px) {
//     h1 {
//       font-size: 1.7rem;
//     }
//   }
// `;
exports.default = Recommendations;
//# sourceMappingURL=Recommendations.js.map