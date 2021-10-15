import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id:"61582a5953b0baf9e2ca3b6d",
        username:"Hai2",
        email:"honghai2@gmail.com",
        coverPicture:"",
        profilePicture: "person/1.jpg",
        followers:["615826255fae1be1fede2ef9"],
        isAdmin:false,
        followings:[],
        city:"Ha Noi",
        desc:"Love u",
        from:"Ha Noi",
        relationship:"1",
    },
    isFetching: false,
    error: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
                {children}
        </AuthContext.Provider>
    );
};