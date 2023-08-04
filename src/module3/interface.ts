type User = {
  name: string;
  age: number;
};
interface IUser {
  name: string;
  age: number;
}

type extendedUser = User & {
  role: string;
};

interface IExtendedUser extends IUser {
  role: string;
}

const user: extendedUser = {
  name: "Mukta",
  age: 2000,
  role: "Unknown",
};

type rollNumber = number;

// Object, Function, Array

interface IAddNumbers {
  (num1: number, num2: number): number;
}

type addNumbersType = (num1: number, num2: number) => number;
const addNumbers: addNumbersType = (num1, num2) => {
  return num1 + num2;
};

type rollNumbersType = number[];
interface IRollNumbers {
  [index: number]: number;
}
const rollNumbers: IRollNumbers = [1, 4, 5];

// const userWithTypeAlias: User = {
//   name: "Type Alias",
//   age: 100,
// };
// const userWithInterface: IUser = {
//   name: "Interface",
//   age: 200,
// };
