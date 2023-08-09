// const rollNumbers: Array<number> = [44, 12, 4];
// const rollNumbers2: Array<string> = ["44", "12", "4"];
// const rollNumbers3: Array<boolean> = [true, false];

// const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
//   {
//     name: "Sudipto",
//     roll: 1,
//   },
//   {
//     name: "Mukta",
//     roll: 2,
//   },
// ];

type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<string, string> = ["Mukta", "Sudipto"];

// type RelationWithSalaryType = { name: string; salary: number };
interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
  {
    name: "Mukta",
    salary: 10000000,
  },
  "Sudipto",
];

type GenericArray<T> = Array<T>;
const rollNumbers: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
const rollNumbers3: GenericArray<boolean> = [true, false];

type NameAndRollType = { name: string; roll: number };

const userNameAndRollNumbers: GenericArray<NameAndRollType> = [
  {
    name: "Sudipto",
    roll: 1,
  },
  {
    name: "Mukta",
    roll: 2,
  },
];
