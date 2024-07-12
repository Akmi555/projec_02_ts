import { v4 } from 'uuid';

import "./styles.css";
import { cars } from "./data";
import { Car } from "./types";


function Homework007() {
  const resultCar= cars.map((car: Car) => {
    return (
      <div className="csr-component" key={v4()}>
        <div>brand:{car.brand}</div>
        <div>price:{car.price}</div>
        <div>isDiesel:{car.isDiesel? 'Diesel': 'Petrol'}</div>
      </div>
    );
  });
  console.log(resultCar);

  return <div className="homework007-component">{resultCar}</div>;
}

export default Homework007;
