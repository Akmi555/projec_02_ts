import axios from 'axios'

import Button from "components/Button/Button";
import { Consultation07Wrapper, Result, Text, Error, ButtonWrapper } from "./styles";
import { useState } from "react";

function Consultation07() {
  const [joke, setJoke] = useState<string>('')
  const [error, setError] = useState<any>('')

  const RANDOM_JOKE_URL = 'https://official-joke-api.appspot.com/random_joke';

  // Функция getJokes - вариант использования с fetch
  // const getJokes = async () => {
  //   setJoke('');
  //   setError('');

  //   try {
  //     const response = await fetch(RANDOM_JOKE_URL)
  //     console.log(response)
  //     const result = await response.json()
  //     console.log(result)

  //     //При неудачном завершении запроса, промис который возвращает fetch,
  //     // всё равно завершиться удачно и сохранит ошибку в result
  //     if (response.ok) {
  //       setJoke(`${result.setup} - ${result.punchline}`)
  //     } else {
  //       // throw Object.assign(new Error('API error'), { errorResult: result })
  //     }
  //   } catch (error) {
  //     setError(error)
  //   }
  // }

  //Функция getJokes - вариант использования с axios
  const getJokes = async () => {
      setJoke('');
      setError('');
    try {
      //отправляем запрос и сохраняем успешный результат в переменную (result)
      const result = await axios.get(RANDOM_JOKE_URL)
      //схема - axios.methodName(url, data, config)
      // methodName - имя метода (get, post, put, delete)
      // url - адрес
      // data - данные, которые нужно отправить в запросе (например, при методах post и put)
      // config - это объект с настройками, необходимыми для отправки запроса 
              // {
              // headers: {},
              // params: {}
              // baseuRL: ''
              // responseType: 'json'
              //     }
      console.log(result)
      //обрабатываем результат
      setJoke(`${result.data.setup} - ${result.data.punchline}`)
    } catch (error) {
      //обрабатываем ошибку
      setError(error)
    }
  }

  return (
    <Consultation07Wrapper>
      <ButtonWrapper>
        <Button name='GET JOKE' onButtonClick={getJokes} />
      </ButtonWrapper>
      <Result>
        {joke && <Text>{joke}</Text>}
        {error && <Error>{error}</Error>}
      </Result>
    </Consultation07Wrapper>
  )
}

export default Consultation07;