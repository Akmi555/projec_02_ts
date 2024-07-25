import { useContext } from "react";

import { ContentComponent, DataItem } from "./styles"
import { MainCardContext } from "../MainCard/MainCard";

function Content() {
  // 3.

  const contentData = useContext(MainCardContext)


  return (
    <ContentComponent>
      <DataItem>First Name: {contentData.firstName }</DataItem>
      <DataItem>Last Name: {contentData.lastName }</DataItem>
      <DataItem>Age: {contentData.age }</DataItem>
    </ContentComponent>
  )
}

export default Content