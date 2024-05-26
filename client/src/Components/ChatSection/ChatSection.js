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
// @ts-ignore
const profileService_1 = require("../../services/profileService");
const ChatSection = ({ message, own, chat, user }) => {
    const [other, setOther] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const otherId = chat.members.find((m) => m !== user._id);
        const getOtherUser = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const res = yield (0, profileService_1.getUser)(otherId);
                setOther(res);
            }
            catch (err) {
                console.log(err);
            }
        });
        getOtherUser();
    }, [chat]);
    if (!other)
        return (0, jsx_runtime_1.jsx)("div", { children: "Loading..." });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: `outer-div ${own ? 'own' : ''}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: `sent-messages ${own ? 'own' : ''}`, children: [(0, jsx_runtime_1.jsx)("img", { src: own ? user.profile.thumbnail : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fparrotprint.com%2Fblog%2Fportrait-photography-wonder-human-face-2%2F&psig=AOvVaw1_A5k9Eke47Zn5MouHMwvB&ust=1710178644665000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDJ74ae6oQDFQAAAAAdAAAAABAE", alt: "" }), (0, jsx_runtime_1.jsx)("p", { children: message.text })] }), (0, jsx_runtime_1.jsx)("div", { className: 'message-time', children: (0, jsx_runtime_1.jsx)("p", { children: message.createdAt }) })] }) }));
};
exports.default = ChatSection;
