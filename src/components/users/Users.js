import UserList from "./UserList";

const Users = ({ data }) => {
  return (
    <div className="users__profiles__wrapper">
      {data.map((userData) => {
        return <UserList name={userData.login} img={userData.avatar_url} key={userData.id} />;
      })}
    </div>
  );
};

export default Users;
