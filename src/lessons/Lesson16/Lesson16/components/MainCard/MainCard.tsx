import { useState, createContext} from "react"
import Section from "../Section/Section"
import { MainCardTitle, MainCardWrapper } from "./styles"
import { UserData } from "./types"

// 1. Создаем независимое хранилище - контекст, с 
export const MainCardContext = createContext<UserData>({
  firstName: '',
    lastName: '',
    age: null
})

function MainCard() {
  const [userData, setUserData] = useState({
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 11
  })

  return (
    // 2. 
    <MainCardContext.Provider value={userData}>
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        {/* <Section data={userData}/> */}
        <Section />
      </MainCardWrapper>
      </MainCardContext.Provider>
  )
}

export default MainCard