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
