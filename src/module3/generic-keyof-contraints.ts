type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address"; //manully korsi
type newTypeUsingKeyOf = keyof PersonType;

// const a: newType = "age";
// const b: newTypeUsingKeyOf = "name";

// Y = "name" | "age";
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}
const property = getProperty({ name: "Sudipto", age: 24 }, "age");
// ({ name: "sudipto", age: 24 }), "age"; //100
// const a = {
//   name: "Sudipto",
//   age: 24,
// };
// a["name"];
