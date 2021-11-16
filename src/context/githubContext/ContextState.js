import { useReducer } from "react";
import GithubContext from "./context";
import contextReducer from "./contextReducer";
import axios from "axios";
import { SEARCH_USERS, GET_USER } from "./types";

const ContextState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
  };

  const [state, dispatch] = useReducer(contextReducer, initialState);

  const searchUsers = async (text) => {
    const request = await axios.get(`https://api.github.com/search/users?q=${text}`);
    const usersData = request.data.items;

    // console.log(usersData.items);

    dispatch({
      type: SEARCH_USERS,
      payload: usersData,
    });
  };

  const getUser = async (login) => {
    const request = await axios.get(`https://api.github.com/users/${login}`);
    const userData = request.data;

    dispatch({
      type: GET_USER,
      payload: userData,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        searchUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default ContextState;
