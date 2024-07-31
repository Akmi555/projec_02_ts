import { useContext } from "react"

import { WeatherCityData, WeatherData, WeatherFirstContainer, WeatherIconData, WeatherSecondContainer, WeatherTempData, WeatherTempFeelsLikeData } from "./styles"
import { MainWeatherContext } from "pages/Weather/Weather"



function WeatherInfo() {
  const contentData = useContext(MainWeatherContext)
  return <WeatherData>
    <WeatherFirstContainer>
      <WeatherTempData>{contentData[0]}°C</WeatherTempData>
      <WeatherCityData>{contentData[1]}</WeatherCityData>
      <WeatherIconData ></WeatherIconData>
    </WeatherFirstContainer>
    <WeatherSecondContainer >
      <WeatherTempFeelsLikeData>{contentData[3]}°C</WeatherTempFeelsLikeData>
    </WeatherSecondContainer >
  </WeatherData>
}

export default WeatherInfo