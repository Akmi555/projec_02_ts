import { useState } from "react";
import Button from "../../components/Button/Button";
import {
  Consultation04Component,
  UserCard,
  Avatar,
  InfoContainer,
  UserTitle,
  UserInfo,
} from "./styles";

function Consultation04() {
  const [userData, setUserData] = useState<any>(undefined);
  const RANDOM_USER_URL: string = "https://randomuser.me/api/";

  const getRandomUser = async () => {
    const response = await fetch(RANDOM_USER_URL);

    // У промисов 3 статуса может быть
    // 1 - pending - запрос отправлен, но ответ еще не пришел
    // 2 - fullfiled - ответ пришел и он положительный. В нашем примере нам придуйт данные пользователя
    // 3 - rejected("отклонено") - ответ пришел, но он отрицательный, т.е приходит ошибка

    console.log(response);
    const result = await response.json();
    
    if (response.ok) {
        // Тут выполняем действия по успешному ответу на запрос
        setUserData(result.results[0])
    }else{
        // Тут обрабатываем ошибку
    }
  };

    console.log(userData);

  return (
    <Consultation04Component>
      <UserCard>
        <Avatar src={userData?.picture?.large} alt="User Avatar" />
        <InfoContainer>
          <UserTitle>Full Name:</UserTitle>
          <UserInfo></UserInfo>
        </InfoContainer>
        <InfoContainer>
          <UserTitle>Email:</UserTitle>
          <UserInfo>{userData?.email}</UserInfo>
        </InfoContainer>
        <InfoContainer>
          <UserTitle>Phone:</UserTitle>
          <UserInfo></UserInfo>
        </InfoContainer>
        <Button name="Get Random User" onButtonClick={getRandomUser} />
      </UserCard>
    </Consultation04Component>
  );
}

export default Consultation04;
