// // a type is dependent on another type

// type a1 = string;
// type a3 = undefined;
// type a4 = number;
// type a2 = a1 extends string ? string : null;

// //nested conditional type
// type d = a1 extends null
//   ? null
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : never;

// type Sheikh = {
//   wife1: string;
//   wife2: string;
// };
// //check korbe ei sheikh type a wife1 ase kina? true : false
// type A = keyof Sheikh;
// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;
// type CheckWife1 = CheckProperty<Sheikh, "wife12">;

// // matha kharap kora example
// type Bandhubi = "Mukta" | "Proma" | "Sajid";
// type RemoveBandhubi<T, K> = T extends K ? never : T;
// type CurrentBandhubi = RemoveBandhubi<Bandhubi, "Sajid">;
