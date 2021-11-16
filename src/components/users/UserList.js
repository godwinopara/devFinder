// import { useContext } from "react";
import { Link } from "react-router-dom";
// import GithubContext from "../../context/githubContext/context";

const UserList = ({ name, img }) => {
  // const { getUser } = useContext(GithubContext);

  // const handleOnClick = () => {
  //   getUser(name);
  // };

  return (
    <div className="user__profile">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <button>
        <Link to={`/user/${name}`}>View Profile</Link>
      </button>
    </div>
  );
};

export default UserList;
// onClick = { handleOnClick };
