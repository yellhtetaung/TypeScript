// Explicit Types
let person: string;
person = "Maung Maung";
// person = true;

let num: number;
num = 30;
// num = "30";

let bool: boolean;
bool = false;
bool = true;
// bool = "true";

let workers: string[];
// workers = ["arkar", 10, true];

let nums: number[];
nums = [1, 2, 3, 4, 5];

let bools: boolean[];
bools = [true, false];

// Union Type
let mixed: (boolean | string)[];
mixed = [true, "arkar", false];
console.log(mixed);

// Object
let personOne: {
  name: string;
  age: number;
  passed: boolean;
};

personOne = {
  name: "aung aung",
  age: 30,
  passed: false,
};
