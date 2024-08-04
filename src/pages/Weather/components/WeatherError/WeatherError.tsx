import { useContext } from "react"

import { WeatherCodData, WeatherEr, WeatherErContainer, WeatherMassageData } from "./styles";
import { MainWeatherContext } from "pages/Weather/Weather"

function WeatherError() {
  const contentData = useContext(MainWeatherContext)

  return <WeatherEr>
    <WeatherErContainer>
      <WeatherCodData>{contentData[0]}</WeatherCodData>
      <WeatherMassageData>{contentData[1]}</WeatherMassageData>
    </WeatherErContainer>
  </WeatherEr>
}

export default WeatherError;