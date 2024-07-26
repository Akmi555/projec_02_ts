import { useState } from "react";
import { useFormik } from "formik";

import {
  InputContainer,
  WeatherMain,
  WeatherPage,
  WeatherTitle,
} from "./styles";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherError from "./components/WeatherError/WeatherError";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { weatherValues } from "./types";

function Weather() {
  const [resultValue, setResultValue] = useState<string>("");  
  const APP_ID = "87fa0bcb59d5a617c173ca4eafc92f76";
  
   const formik = useFormik({
    initialValues: {
      city: "",
    } as weatherValues,
    validateOnChange: false,
    onSubmit: (values: weatherValues) => {      
      getWeatherInfo(values.city);
    },
  });
  // console.log(formik);

  const getWeatherInfo = async (CITY_NAME: string) => {
    // const CITY_NAME = formik.values.city;    
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}`
    );
    console.log(response);
    const result = await response.json();
    console.log(result);
    setResultValue(result.fact);
  };

 

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
        <WeatherInfo />
        <WeatherError />
      </WeatherMain>
    </WeatherPage>
  );
}

export default Weather;
