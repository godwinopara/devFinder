import { useContext, useState } from "react";
import GithubContext from "../../context/githubContext/context";

const SearchUser = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const githubContext = useContext(GithubContext);

  const handleOnChange = (e) => {
    setSearchInputText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    githubContext.searchUsers(searchInputText);
  };
  return (
    <form onSubmit={handleOnSubmit} className="form">
      <input onChange={handleOnChange} type="text" placeholder="Search github for users repo..." />
      <button>Search Users</button>
    </form>
  );
};

export default SearchUser;
