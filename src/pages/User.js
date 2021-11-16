import { useContext, useState } from "react";
// import GithubContext from "../context/githubContext/context";
import data from "../data/data";
import companyIcon from "../img/icon-company.svg";
import twitterIcon from "../img/icon-twitter.svg";
import websiteIcon from "../img/icon-website.svg";
import locationIcon from "../img/icon-location.svg";

const User = () => {
  //   const { user } = useContext(GithubContext);

  const [user, setuser] = useState(data);

  const formatDateToBeReadAble = (date) => {
    const formatedDate = new Date(date);
    return formatedDate.toDateString();
  };

  return (
    <div className="container user__wrapper">
      <div className="grid">
        <img src={user.avatar_url} alt="" />
        <div className="profile__details">
          <p>{user.name}</p>
          <p>{`@${user.login}`}</p>
          <p>Joined {formatDateToBeReadAble(user.created_at)}</p>
          <a className="github__link" href={user.html_url} target="_blank" rel="noreferrer">
            View Github Profile
          </a>
        </div>
      </div>
      <p className="bio">{user.bio}</p>
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
            <p>{user.location}</p>
          </div>
          <div className="website flex">
            <a href={user.blog}>
              <img src={websiteIcon} alt="" />
            </a>

            <p>{user.blog}</p>
          </div>
        </div>
        <div>
          <div className="twitter flex">
            <img src={twitterIcon} alt="" />
            <p>{user.twitter_username}</p>
          </div>
          <div className="company__name flex">
            <img src={companyIcon} alt="" />
            <p>{user.company}</p>
          </div>
        </div>
        <div>
          <div className="hireable flex">
            {user.hireable ? (
              <i class="fas fa-check-square " id="hireable"></i>
            ) : (
              <i class="fas fa-window-close" id="not-hireable"></i>
            )}
            <p>Hireable</p>
          </div>
          <div className="email flex">
            <i class="fas fa-envelope-open-text" id="email"></i>
            <p>Godwinopara62@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
