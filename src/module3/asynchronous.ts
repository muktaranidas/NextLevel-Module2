//mocking
//json place holder

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};
const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};
getTodoData();
// string
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to feted data!");
    }
  });
};
const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  //   console.log(data);
  return data;
};

// boolean
const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to feted data!");
    }
  });
};
const makePromiseData = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  //   console.log(data);
  return data;
};

// object
type DataType = {
  name: string;
  age: number;
};
const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { name: "Mukta", age: 25 };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to feted data!");
    }
  });
};
const getPromiseDataObject = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  //   console.log(data);
  return data;
};

// Promise<string> Promise<boolean> Promise<object>
