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
const ChatSection = ({ message, own, chat, user }) => {
    const [other, setOther] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const otherId = chat.members.find(m => m !== user._id);
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: `outer-div ${own ? 'own' : ''}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: `sent-messages ${own ? 'own' : ''}`, children: [(0, jsx_runtime_1.jsx)("img", { src: own ? user.profile.thumbnail : other.profile.thumbnail, alt: "" }), (0, jsx_runtime_1.jsx)("p", { children: message.text })] }), (0, jsx_runtime_1.jsx)("div", { className: 'message-time', children: (0, jsx_runtime_1.jsx)("p", { children: message.createdAt }) })] }) }));
};
{ /*

        <MessageDetails>
          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>


        <MessageDetails own={true}>
          <SentMessages own={true}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p >Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>


        <MessageDetails>
          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>
        <MessageDetails>
          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>
        <MessageDetails own={true}>
          <SentMessages own={true}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p >Hello my name is....</p>

          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>
        <MessageDetails>


          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>
        <MessageDetails>
          <SentMessages>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p>Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails>


        <MessageDetails own={true}>
          <SentMessages own={true}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27sFJreSiqEOAMqqHo3lkHyi1SE4MzAKUKg&usqp=CAU" alt=""></img>
            <p >Hello my name is....</p>
          </SentMessages>
          <MessageTime>
            <p>2 hours ago</p>
          </MessageTime>
        </MessageDetails> */
}
{ /* </Chat> */ }
// </ChatBoxMessages>
// const ChatBoxMessages = styled.div`
//   ${'' /* flex:3; */}
//   ${'' /* max-height: */}
//   background-color:orange;
//   width:70vw;
//   ${'' /* height:70vh; */}
//   ${'' /* margin-right:70px; */}
//   padding:15px 25px;
//   ${'' /* display:flex;
//   flex-direction:column;
//   height:100vh;
//   overflow-y: scroll; */}
// `
// const Chat = styled.div`
//   display:flex;
//   flex-direction:column;
//   ${'' /* height:75vh; */}
//   overflow-y: scroll;
//   ${'' /* scroll-padding-right: 100px; */}
// `
// const MessageDetails = styled.div`
//   display:flex;
//   flex-direction:column;
//   ${'' /* align-self:flex-end; */}
//   align-self: ${props => props.own ? "flex-end" : "flex-start"};
//   ${'' /* color: ${props => props.own ? "pink" : "red"}; */}
//   ${'' /* width:20%; */}
// `
// const SentMessages = styled.div`
//   display: flex;
//   ${'' /* align: ${props => props.own ? "flex-end" : "flex-start"};
//   color: ${props => props.own ? "pink" : "red"}; */}
//   ${'' /* flex-direction:column; */}
//   img{
//     width:70px;
//     height:70px;
//     border-radius:50%;
//     object-fit:cover;
//     margin-right:10px;
//   }
//   p{
//     padding:10px;
//     border-radius:20px;
//     ${'' /* background-color:#154360; */}
//     ${'' /* color:white; */}
//     max-width:300px;
//     color:white;
//     background-color: ${props => props.own ? "#0B5345" : "#154360"};
//   }
// `
// const MessageTime = styled.div`
//   font-size:15px;
//   margin-top:5px;
// `
exports.default = ChatSection;
