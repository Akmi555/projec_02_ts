import Input from "components/Input/Input"
import { InputContainer, WeatherMain, WeatherPage, WeatherTitle } from "./styles"
import Button from "components/Button/Button"
import WeatherInfo from "./components/WeatherInfo/WeatherInfo"
import WeatherError from "./components/WeatherError/WeatherError"
import { ChangeEvent } from "react"

function Weather() {
  return (
  <WeatherPage>
    <WeatherTitle>Weather App</WeatherTitle>
    <WeatherMain>
      <InputContainer>
      <Input name={""} placeholder={""} value={""} onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.")
          } }/>
      <Button name={""}  />
      </InputContainer>
      <WeatherInfo/>
      <WeatherError/>
    </WeatherMain>
  </WeatherPage>
)}

export default Weather