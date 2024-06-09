import "./conversationStyles.scss";
interface Movie {
    large: string;
    movieId: number;
    movieTitle: string;
    _id: string;
    rating: number;
}
interface User {
    addedMovies: string[];
    email: string;
    name: {
        userName: string;
    };
    profile: {
        thumbnail: string;
        _id: string;
    };
    watched: Movie[];
    _id: string;
}
interface Conversation {
    createdAt: string;
    members: string[];
    updatedAt: string;
    _id: string;
}
interface props {
    conversation: Conversation;
    currentUser: User;
}
declare const Conversation: ({ conversation, currentUser }: props) => import("react/jsx-runtime").JSX.Element;
export default Conversation;
