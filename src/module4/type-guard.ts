type Alphaneumeric = string | number;
//keyof guard
function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
  if (typeof param1 == "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
add("1", "2");
add(1, 2);

//in guard
type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an admin and my role is ${user.role}`;
  } else {
    return `I am normal user`;
  }
}

const normalUser1: NormalUserType = { name: "Mukta" };
const adminUser1: AdminUserType = { name: "Sudipto Dey", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

//instanceof guard

class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I am barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am meawing");
  }
}

function getAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("Sudipto", "dog"); // instance -> Dog
const animal2 = new Cat("Mukta", "cat"); // instance -> Cat

getAnimal(animal1);
