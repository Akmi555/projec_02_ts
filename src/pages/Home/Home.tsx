import { useEffect } from "react";

import { HomePage, Title } from "./styles";

function Home() {
  //Пример использования useEffect при размонтировании компонента Home
  useEffect(() => {
    return () => { console.log('Component Home unmounting') }
  }, [])
  
  return (
    <HomePage>
      <Title>Home page content</Title>
    </HomePage>
  )
}

export default Home