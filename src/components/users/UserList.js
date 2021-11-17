import { Link } from "react-router-dom";

const UserList = ({ name, img }) => {
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
