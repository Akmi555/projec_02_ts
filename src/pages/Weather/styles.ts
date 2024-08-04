import styled from "@emotion/styled";
import WeatherBackground from "assets/weather_app_back.jpeg";

export const WeatherPage = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-repeat: no-repeat;
  background-image: url(${WeatherBackground});
  background-size: cover;
`;
export const WeatherTitle = styled.header`
  display: flex;
  width: 1,920px;
  height: 80px;
  justify-content: center;
  padding: 20px;
  font-size: 29px;
  background-color: rgba(18, 45, 77, 0.5);
  border: 1px;
  border-color:  white;
  color: white;
`;

export const WeatherMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  height: 90%;
  width: 100%;
  gap: 40px;
`;

export const InputContainer = styled.form`
  display: flex;
  top: 220px;
  left: 605px;
  gap: 14px;
  height: 48px;
  width: 710px;
`;

export const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 302px;
  width: 710px;  
  top: 328px;
  left: 605px;
  gap: 20px;
`;
