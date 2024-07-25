import { useContext } from "react";

import { DataItem, NameTitleComponent } from "./styles";
import { MainCardContext } from "../MainCard/MainCard";

function NameTitle() {
    const contentData = useContext(MainCardContext)

    return (
        <NameTitleComponent>
            <DataItem>First Name: {contentData.firstName}</DataItem>
            <DataItem>Last Name: {contentData.lastName}</DataItem>
        </NameTitleComponent>
    )
}

export default NameTitle;