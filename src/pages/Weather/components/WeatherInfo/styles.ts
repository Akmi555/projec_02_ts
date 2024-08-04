import styled from "@emotion/styled";

export const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
  
`;

export const WeatherFirstContainer = styled.div`
  display: flex;
  height: 130px;  
  width: 100%;
  gap: 30px;
  background-color: rgba(18, 45, 77, 0.6);
  border-radius: 20px;
  padding: 10px;
`;

export const WeatherTempCityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const WeatherTempData = styled.div`
  font-size: 57px;
`;

export const WeatherCityData = styled.div`
  display: flex;  
  justify-content: center;
  font-size: 18px;
`;

export const WeatherIconData = styled.img`
  width: 130px;
`;

export const WeatherSecondContainer = styled.div`
  display: flex;
  height: 130px;
  /* min-width: 200px; */
  /* max-width: 100%; */
  /* width: 100%; */
  background-color: rgba(18, 45, 77, 0.6);
  border-radius: 20px;
  padding: 10px;
  color: white;
`;

export const WeatherTempFeelsLikeData = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 57px;
`;
