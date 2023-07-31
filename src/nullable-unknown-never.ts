// null type
// const searchName = (value: string | null) => {
//   if (value === null) {
//     console.log("There are nothing to search");
//   } else {
//     console.log("Searching");
//   }
// };
// searchName(null);

// unknown type
// kmh^-1 to ms^-1
// const getMyCarSpeed = (speed: unknown) => {
//   if (typeof speed === "number") {
//     const convertedSpeed = (speed * 1000) / 3600;
//     console.log(`My Speed Is ${convertedSpeed}`);
//   }
//   if (typeof speed === "string") {
//     const [value, unit] = speed.split("  ");
//     const convertedSpeed = (parseFloat(value) * 1000) / 3600;
//     console.log(`My Speed Is ${convertedSpeed}`);
//   } else {
//     console.log("There is wrong type");
//   }
// };
// getMyCarSpeed(10);
// getMyCarSpeed(true);
// getMyCarSpeed("11 kmh^-1");

// never type
function throwError(message: string): never {
  throw new Error(message);
}
throwError("Error hoyeche");
