//ternary operator
const age: number = 2;
// if (age >= 18) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
const isAdult = age >= 18 ? "yes" : "No";
// console.log(isAdult);

//Nullish coalescing operator
// Null and undefined
const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ userName }, { userName2 });

type Manush = {
  name: string;
  age: number;
  address: {
    city: "No City";
    road: "No road";
    home?: ""; //optional type
  };
};
const manush1: Manush = {
  name: "Manush",
  age: 100,
  address: {
    city: "No City",
    road: "No road",
  },
};

const home = manush1?.address?.home ?? "No Home";
console.log(home);
