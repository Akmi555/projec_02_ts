function Lesson006() {
  // 1. Типизация строк - string
  let userName: string = "Mary";
  //   userName = "34";
  let fullName: string = "";
  fullName = `${userName} Smith`;

  let result: string = "2";
  result = 1 + 2 + "4" + 5 + true; // 1 + 2 =3   '3'  + '4' + '5' + true = 345true
  console.log(result);

  //   result = 4 - '2'

  // 2. Типизация число - number
  let luckyNumber: number = 7;
  luckyNumber = 7.1;
  luckyNumber = -8;
  //   luckyNumber = 7/NaN;
  // luckyNumber = 7 - '1';
  console.log(luckyNumber);

  // 3. Типизация логического типа - boolean
  let isAdmin: boolean = true;
  isAdmin = false;
  isAdmin = 2 > 1;
  isAdmin = true || 1;
  console.log(isAdmin);

  // 4. Типизация null и undefined
  let emptyValue: null = null;
  //   emptyValue =0 ;
  let und: undefined = undefined;

  // 5. Типизация массива
  const colors: string[] = ["red", "black", "green"];
  //   colors.push(true);
  colors.push("");
  colors[0] = "12";
  console.log(colors);

  // 6. Тип tupel (кортеж)
  const frits: [string, string, number] = ["apple", "grape", 12];
  // frits.push(24)

  // 7. Типизация функций
  const showMassage = (): void => {
    console.log("Hi");
  };
  const returnNumber = (): number => {
    return 7;
  };
  const arrUser = (firstName: string, age: number = 30): [string, number] => {
    return [firstName, age];
  };

  console.log(arrUser("Tom", 23));
  console.log(arrUser("Bob"));

  // 8. Тип any
  let city: any = 23;
  city = "Berlin";
  city = [200223, "Warsaw"];

  // 9. Автоматическое определение типа
  let exStr = "Ron";
  //   exStr = 23;
  let arrEx = [2, 4, 8];
  //   arrEx[3] = 'black';

  // 10. Union type
  let isManager: boolean | undefined = undefined;
  isManager = true;
  //   isManager = 'false';
  let mixArr = [2, true, 'Lime'];

  

  return <div>Lesson006</div>;
}

export default Lesson006;
