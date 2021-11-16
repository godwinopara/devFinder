import { Fragment } from "react";
import SearchUser from "../components/users/SearchUser";
import Users from "../components/users/Users";

const Home = () => {
  return (
    <Fragment>
      <div className="container">
        <SearchUser />
        <Users />
      </div>
    </Fragment>
  );
};

export default Home;
