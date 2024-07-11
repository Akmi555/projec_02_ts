import "./styles.css";
import { User } from "./tyoes";

function ProfileCard() {
  const userData: User = {
    avatar:
      "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
    userName: "John Doe",
    profession: "Web Developer",
    hobbies: ["Reading", "Traveling", "Photography"],
  };
  return (
    <div className="profile-card">
      <h1 className="user-name">{userData.userName}</h1>
      <img src={userData.avatar} alt="" />
      <div className="user-data">{userData.profession}</div>
      <div className="user-data">{userData.hobbies[0]}</div>
    </div>
  );
}

export default ProfileCard;
