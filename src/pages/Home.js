import { Fragment } from "react";
import NavBar from "../components/nav/NavBar";
import SearchUser from "../components/users/SearchUser";
import Users from "../components/users/Users";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <SearchUser />
        <Users />
      </div>
    </Fragment>
  );
};

export default Home;
