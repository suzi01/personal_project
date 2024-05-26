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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const profileService_1 = require("../../services/profileService");
require("./conversationStyles.scss");
const Conversation = ({ conversation, currentUser }) => {
    const [user, setUser] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        console.log(conversation);
        const otherId = conversation.members.find((m) => m !== currentUser._id);
        const getOtherUser = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const res = yield (0, profileService_1.getUser)(otherId);
                setUser(res);
            }
            catch (err) {
                console.log(err);
            }
        });
        getOtherUser();
    }, [currentUser, conversation]);
    if (!user)
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    return ((0, jsx_runtime_1.jsx)("div", { className: 'conversation', children: (0, jsx_runtime_1.jsxs)("div", { className: 'conversation-details', children: [(0, jsx_runtime_1.jsx)("img", { src: user.profile.thumbnail, alt: user.name.userName }), (0, jsx_runtime_1.jsx)("span", { children: user.name.userName })] }) }));
};
// const Container = styled.div`
//   background-color:black;
//   position:absolute;
//   width:100vw;
//   min-height:100vh;
// `
// const Content = styled.div`
//   margin-top:100px;
//   display:flex;
//   flex-direction:row;
//   height:100%;
// `
// const Conversations = styled.div`
//   color:white;
//   padding:20px 10px 10px 10px;
// `
// const ConverationDetails = styled.div`
//   margin-bottom: 8px;
//   padding:5px;
//   img{
//     width:80px;
//     height:80px;
//     border-radius:50%;
//     object-fit:cover;
//     margin-right: 10px;
//     margin-left:10px;
//   }
//   span{
//     font-size:20px;
//   }
// `
exports.default = Conversation;
