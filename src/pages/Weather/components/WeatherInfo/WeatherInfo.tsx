import { useContext } from "react"

import { WeatherCityData, WeatherData, WeatherFirstContainer, WeatherIconData, WeatherSecondContainer, WeatherTempCityContainer, WeatherTempData, WeatherTempFeelsLikeData } from "./styles"
import { MainWeatherContext } from "pages/Weather/Weather"



function WeatherInfo() {
  const contentData = useContext(MainWeatherContext)
  const weatherIcon = contentData[2];

  return <WeatherData>
    <WeatherFirstContainer>
      <WeatherTempCityContainer>
        <WeatherTempData>{contentData[0]}°C</WeatherTempData>
        <WeatherCityData>{contentData[1]}</WeatherCityData>
      </WeatherTempCityContainer>      
      <WeatherIconData 
      src={`http://openweathermap.org/img/w/${weatherIcon}.png`} 
      />
    </WeatherFirstContainer>
    <WeatherSecondContainer >
      <WeatherTempFeelsLikeData>{contentData[3]}°C</WeatherTempFeelsLikeData>
    </WeatherSecondContainer >
  </WeatherData>
}

export default WeatherInfo