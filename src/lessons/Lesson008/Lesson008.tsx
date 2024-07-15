import './styles.css'
import { BoxInfo, ButtonStyledComponent } from './styles';

function Lesson008() {
// Способ №2 - inliine стильи -в отдельном объекте
const textStyles = {fontSize: '24px', color: '#f3eaf2'}


   return (
    // Способ №1 - отдельный css файл 
   <div className="lesson008-component">
    {/* // Способ №2 - inliine стильи */}
    {/* <p style={{ fontSize: '24px', color: '#f3eaf2'}}>Inline styles example</p> */}
    <p style={textStyles}>Inline styles example</p>
    <div style={textStyles}>Inline styles example !!!!!!</div>
    {/* Способ №3 - emotion */}
    <BoxInfo>My first styled</BoxInfo>
    <BoxInfo>My first styled</BoxInfo>
    <ButtonStyledComponent >Custom Button</ButtonStyledComponent>
    <ButtonStyledComponent main>Custom Button main</ButtonStyledComponent>
    <ButtonStyledComponent close>Custom Button main</ButtonStyledComponent>
   </div>
   )
}

export default Lesson008;