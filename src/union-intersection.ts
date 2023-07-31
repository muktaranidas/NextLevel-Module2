// union
// type NoobDeveloper = {
//   name: string;
// };
// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };

// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//   name: "Prom",
//   expertise: "Javascript",
//   experience: 1,
// };

// intersection
// type NoobDeveloper = {
//   name: string;
// };
// type JuniorDeveloper = NoobDeveloper & {
//   expertise: string;
//   experience: number;
// };

// const newDeveloper: NoobDeveloper | JuniorDeveloper = {
//   name: "Prom",
//   expertise: "Javascript",
//   experience: 1,
// };

// intersection
type NoobDeveloper = {
  name: string;
};
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};

enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}
type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: Level;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Prom",
  expertise: "Javascript",
  experience: 1,
};
const developer: NextLevelDeveloper = {
  name: "Mukta",
  expertise: "Typescript",
  experience: 2,
  leadershipExperience: 2,
  level: Level.junior,
};
