

const addMeInMyCrushMind = <T>(myInfo: T) => {
  const crush = "kate Winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

type myInfoType = {
  name: string;
  age: number;
  salary: number;
};

const myInfo: myInfoType = {
  name: "Mukta",
  age: 25,
  salary: 10000000000,
};
const result5 = addMeInMyCrushMind<myInfoType>(myInfo);
