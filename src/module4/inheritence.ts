// class Person {
//   name: string;
//   age: number;
//   address: string;
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep for ${hours}`;
//   }
// }
// class Student extends Person {
//   //   name: string;
//   //   age: number;
//   //   address: string;
//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//     //   this.name = name;
//     //   this.age = age;
//     //   this.address = address;
//   }
//   //   makeSleep(hours: number): string {
//   //     return `This ${this.name} will sleep for ${hours}`;
//   //   }
// }

// const student1 = new Student("Sudipto", 23, "Bashabo");
// student1.makeSleep(8);

// class Teacher extends Person {
//   //   name: string;
//   //   age: number;
//   //   address: string;
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     // this.name = name;
//     // this.age = age;
//     // this.address = address;
//     this.designation = designation;
//   }

//   //   makeSleep(hours: number): string {
//   //     return `This ${this.name} will sleep for ${hours}`;
//   //   }

//   takeClasses(numberOfClass: number): string {
//     return `This ${this.name} will take ${numberOfClass} classes`;
//   }
// }
// const teacher1 = new Teacher("Mukta", 25, "Lalmatia", "SWE");
// teacher1.name;
