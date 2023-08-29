// a type is dependent on another type

type a1 = string;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null;

//nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;
