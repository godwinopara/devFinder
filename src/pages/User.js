import { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/githubContext/context";
import companyIcon from "../img/icon-company.svg";
import twitterIcon from "../img/icon-twitter.svg";
import websiteIcon from "../img/icon-website.svg";
import locationIcon from "../img/icon-location.svg";

const User = () => {
  const { user, getUser } = useContext(GithubContext);
  const { login } = useParams();

  const formatDateToBeReadAble = (date) => {
    const formatedDate = new Date(date);
    return formatedDate.toDateString();
  };

  useEffect(() => {
    getUser(login);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="container">
        <a className="back__home__btn" href="/">
          Back Home
        </a>
        {/* ************************************************ */}
        <div className="user__wrapper">
          <div className="grid">
            <img className="profile__img" src={user.avatar_url} alt="" />
            <div className="profile__details">
              <p>{user.name}</p>
              <p>{`@${user.login}`}</p>
              <p>Joined {formatDateToBeReadAble(user.created_at)}</p>
              <a className="github__link" href={user.html_url} target="_blank" rel="noreferrer">
                View Github Profile
              </a>
            </div>
          </div>

          {/* *************************************************** */}
          <p className="bio">{user.bio}</p>

          {/* ********************************************* */}
          <div className="total__repo__follower grid">
            <div className="repo">
              <h2>Total Repos</h2>
              <p>{user.public_repos}</p>
            </div>
            <div className="followers">
              <h2>Followers</h2>
              <p>{user.followers}</p>
            </div>
            <div className="following">
              <h2>Following</h2>
              <p>{user.following}</p>
            </div>
          </div>

          {/* ******************************************* */}
          <div className="grid location__and__website">
            <div>
              <div className="location flex">
                <img src={locationIcon} alt="" />
                <p>{user.location === null ? "Not Available" : user.location}</p>
              </div>
              <div className="website">
                {user.blog === "" ? (
                  <div className="flex">
                    <img src={websiteIcon} alt="" />
                    <p>Not Available</p>
                  </div>
                ) : (
                  <div className="flex">
                    <a href={user.blog} target="_blank" rel="noreferrer">
                      <img src={websiteIcon} alt="" />
                    </a>
                  </div>
                )}
                <p>{user.blog === null ? "Not Available" : user.blog}</p>
              </div>
            </div>
            <div>
              <div className="twitter flex">
                <img src={twitterIcon} alt="" />
                <p>{user.twitter_username === null ? "Not Available" : user.twitter_username}</p>
              </div>
              <div className="company__name flex">
                <img src={companyIcon} alt="" />
                {/* <p>{user.company === "null" ? "Not Available" : user.company}</p> */}
                <p>{user.company === null ? "Not Avalaible" : user.company}</p>
              </div>
            </div>
            <div>
              <div className="hireable flex">
                {user.hireable ? (
                  <i className="fas fa-check-square " id="hireable"></i>
                ) : (
                  <i className="fas fa-window-close" id="not-hireable"></i>
                )}
                <p>Hireable</p>
              </div>
              <div className="email flex">
                <i className="fas fa-envelope-open-text" id="email"></i>
                <p>{user.email === null ? "Not Available" : user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
