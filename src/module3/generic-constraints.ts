
type MandatoryTypes = { name: string; age: number; salary: number }
interface MandatoryInterface { name: string; age: number; salary: number }
const addMeInMyCrushMind = <
  T extends MandatoryInterface
>(
  myInfo: T
) => {
  const crush = "kat Winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

type myInfoType = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};

const myInfo: myInfoType = {
  name: "Mukta",
  age: 25,
  salary: 10000000000,
  other1: false,
  other2: null,
};
const result5 = addMeInMyCrushMind(myInfo);
result5.
