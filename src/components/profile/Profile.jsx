import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContiner}>
      <div className={styles.profile}>
        <img src={image} alt="User avatar" className={styles.profileImg} />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileTag}>@{tag}</p>
        <p className={styles.profileLocation}>{location}</p>
      </div>
      <ul className={styles.profileStats}>
        <li className={styles.profileStat}>
          <span>Followers</span>
          <span className={styles.profileStatCounter}>{stats.followers}</span>
        </li>
        <li className={styles.profileStat}>
          <span>Views</span>
          <span className={styles.profileStatCounter}>{stats.views}</span>
        </li>
        <li className={styles.profileStat}>
          <span>Likes</span>{" "}
          <span className={styles.profileStatCounter}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
