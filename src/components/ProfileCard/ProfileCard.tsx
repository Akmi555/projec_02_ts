import {
  ProfileCardWrapper,
  UserName,
  AvatarImg,
  UserData
} from "./styles";
import { User } from "./types";

function ProfileCard() {
  const userData: User = {
    avatar:
      "https://img.freepik.com/premium-vector/men-women-different-poses-sitting-standing-isolated-white-background-cute-flat-style-vector-illustration_71599-9116.jpg?w=740",
    userName: "John Doe",
    profession: "Web Developer",
    hobbies: ["Reading", "Traveling", "Photography"],
  };
  return (
    <ProfileCardWrapper>
      <UserName className="user-name">{userData.userName}</UserName>
      <AvatarImg src={userData.avatar} alt="" />
      <UserData className="user-data">{userData.profession}</UserData>
      <UserData className="user-data">{userData.hobbies[0]}</UserData>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;
