// const newData = { ...myInfo, crush };

const addMeInMyCrushMind = <T>(myInfo: T) => {
  const crush = "kate Winslet";
  const newData = { ...myInfo, crush };
  return newData;
};
const myInfo = {
  name: "Mukta",
  age: 25,
  salary: 10000000000,
};
const result5 = addMeInMyCrushMind(myInfo);
