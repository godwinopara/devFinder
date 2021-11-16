import { useContext } from "react";
import UserList from "./UserList";
import GithubContext from "../../context/githubContext/context";
const Users = () => {
  const { users } = useContext(GithubContext);

  return (
    <div className="users__profiles__wrapper">
      {users.map((userData) => {
        return <UserList key={userData.id} name={userData.login} img={userData.avatar_url} />;
      })}
    </div>
  );
};

export default Users;
