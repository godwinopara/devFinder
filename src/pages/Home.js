import { useState, Fragment } from "react";
import NavBar from "../components/nav/NavBar";
import SearchUser from "../components/users/SearchUser";
import Users from "../components/users/Users";
import data from "../data/data";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [showData, setshowData] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUserData(data);
    setshowData(true);
  };

  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <SearchUser onSubmit={handleOnSubmit} />
        {showData && <Users data={userData} />}
      </div>
    </Fragment>
  );
};

export default Home;
