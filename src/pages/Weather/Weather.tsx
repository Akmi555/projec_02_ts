import { createContext, useState } from "react";
import { useFormik } from "formik";

import {
  InputContainer,
  OutputContainer,
  WeatherMain,
  WeatherPage,
  WeatherTitle,
} from "./styles";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherError from "./components/WeatherError/WeatherError";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { weatherValues } from "./types";

export const MainWeatherContext = createContext<string[]>([]);

function Weather() {
  const [resultValue, setResultValue] = useState<string[]>([]);
  // const [errorValue, setErrorValue] = useState<string[]>([]);
  const APP_ID = "87fa0bcb59d5a617c173ca4eafc92f76";

  // console.log('test1');
  

  const formik = useFormik({
    initialValues: {
      city: "",
    } as weatherValues,
    validateOnChange: false,
    onSubmit: (values: weatherValues, {resetForm}) => {
      getWeatherInfo(values.city);
      resetForm()
    },
  });
  // console.log(formik);

  const getWeatherInfo = async (CITY_NAME: string) => {
    // const CITY_NAME = formik.values.city;
    setResultValue([]);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}`
    );
    console.log(response);
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      // setResultValue(result.main.temp);
    setResultValue((prevValue) => [ ...prevValue, 
      (result.main.temp - 273.15).toFixed(0),
      result.name,
      result.weather[0].icon,
      (result.main.feels_like- 273.15).toFixed(0),
    ]);
    weatherInfo()
    } else {
      setResultValue((prevValue) => [...prevValue,
        result.cod,
        result.message, 
      ]);
      weatherError()
    }    
  };
  
  console.log(resultValue);

  const weatherInfo = () => {
    return <WeatherInfo />
  }
  
  const weatherError = () => {
    return <WeatherError />
  }

  return (
    <WeatherPage>
      <WeatherTitle>Weather App</WeatherTitle>
      <WeatherMain>
        <InputContainer onSubmit={formik.handleSubmit}>
          <Input
            name="city"
            placeholder="Ввести город"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          <Button name="Получить погоду" type="submit" />
        </InputContainer>
        <MainWeatherContext.Provider value={resultValue}>
          <OutputContainer>
          {weatherInfo()}
          {weatherError()}
            {/* {weatherInfoOutput}
            {weatherErrorOutput} */}
          </OutputContainer>
        </MainWeatherContext.Provider>
      </WeatherMain>
    </WeatherPage>
  );
}

export default Weather;
