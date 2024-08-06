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
import { ErrorValue, WeatherValues } from "./types";
import Spinner from "components/Spinner/Spinner";

export const MainWeatherContext = createContext<string[]>([]);

function Weather() {
  const [resultValue, setResultValue] = useState<string[]>([]);
  const [errorValue, setErrorValue] = useState<ErrorValue | null>(null);
  const APP_ID = "87fa0bcb59d5a617c173ca4eafc92f76";

  // console.log('test1');

  const formik = useFormik({
    initialValues: {
      city: "",
    } as WeatherValues,
    validateOnChange: false,
    onSubmit: (values: WeatherValues, { resetForm }) => {
      getWeatherInfo(values.city);
      resetForm();
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
      setResultValue((prevValue) => [
        ...prevValue,
        (result.main.temp - 273.15).toFixed(0),
        result.name,
        result.weather[0].icon,
        (result.main.feels_like - 273.15).toFixed(0),
      ]);
    } else {
      setErrorValue({
        cod: result.cod,
        message: result.message,
       });      
    }
  };

  console.log(resultValue);

 
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
            {errorValue && errorValue && <Spinner/>}
            {/* <WeatherInfo /> */}
           { errorValue && <WeatherError errorData= {errorValue}/> }           
          </OutputContainer>
        </MainWeatherContext.Provider>
      </WeatherMain>
    </WeatherPage>
  );
}

export default Weather;
