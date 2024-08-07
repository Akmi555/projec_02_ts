import { useContext } from "react"

import { WeatherCodData, WeatherEr, WeatherErContainer, WeatherMassageData } from "./styles";
import { MainWeatherContext } from "pages/Weather/Weather"

function WeatherError({errorData}: any) {
  const contentData = useContext(MainWeatherContext)
  console.log(errorData);

  return <WeatherEr>
    <WeatherErContainer>
      <WeatherCodData>{errorData.cod}</WeatherCodData>
      <WeatherMassageData>{errorData.message}</WeatherMassageData>
    </WeatherErContainer>
  </WeatherEr>
}

export default WeatherError;