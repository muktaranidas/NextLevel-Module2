//spread operator

const myFriends = ["chandler", "joey", "ross"];
const newFriends = ["monica", "rachel", "pheobe"];

myFriends.push(...newFriends);
// console.log(myFriends);

//rest operator
const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));
greetFriends("Mukta", "Sudipto", "Proma", "Sajid");

//array and object destructuring
