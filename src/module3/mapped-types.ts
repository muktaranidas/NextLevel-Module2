const arrayofNumbers = [1, 2, 3];
const arrayofStrings = arrayofNumbers.map((number) => number.toString());
console.log(arrayofStrings);

type Volume = {
  height: number;
  width: number;
  depth: number;
};

type Area<T> = {
  //   [key in keyof Volume]: Volume[key];
  readonly [key in keyof T]: T[key];
};

const area1: Area<{ name: string }> = { name: "Mukta" };
// area1.name = 17;

type AreaString = {
  height: string;
  width: string;
};

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

const rectangularArea: AreaNumber = {
  height: 10,
  width: 12,
};

rectangularArea.width = 10;

type A = AreaNumber["height"]; // look up types
type B = keyof AreaNumber;

const obj = {
  name: "Mukta",
};
obj["name"];
