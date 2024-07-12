import './styles.css'
import { cars } from "./data";
import { Car } from "./types";

function Homework007() {
  const resultCar: Car = cars.map((cars)  => {
    return (
      <div className='csr-component'>
        <div>brand:{cars.brand}</div>
        <div>price:{cars.price}</div>    
      </div>      
    );
  });
  console.log(resultCar);
  
  return <div>{resultCar}</div>;
}

export default Homework007;
