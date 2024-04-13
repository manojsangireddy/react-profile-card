import React from "react";
import style from "./UserDetails.module.css";

const UserDetails = (props) => {
  const {
    avatar,
    first_name,
    last_name,
    address,
    karma,
    followers,
    posts,
    is_following,
  } = props;

  return (
    <div className={style.container}>
      <div className={style.imagecontainer}>
        <img src={avatar} alt="image" className={style.image} />
      </div>

      <div className={style.namecontainer}>
        <div className={style.name}>
          {first_name} {last_name}
        </div>
        <div>{address}</div>
      </div>

      <div className={style.karmacontainer}>
        <div className={style.karma}>{karma}</div>
        <div>Karma</div>
      </div>

      <div className={style.followerscontainer}>
        <div className={style.followers}>{followers}</div>
        <div>Followers</div>
      </div>

      <div className={style.postscontainer}>
        <div className={style.posts}>{posts}</div>
        <div>Posts</div>
      </div>

      <button className={style.btn}>
        {is_following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default UserDetails;
