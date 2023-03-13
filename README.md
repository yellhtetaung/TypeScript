# Typescript Tutorial

## What is Typescript?

- TypeScript is a **_Strongly Typed Programming Language_** that builds on JavaScript
- TypeScript developed and maintained by **_Microsoft_**
- TypeScript is JavaScript with Types
- TypeScript add features to JavaScript without changing it

## Why we need TypeScript?

- Detect errors without running the code **_"Static Type Checking"_**
- Analyze the code as you type
- Save some unit tests as the error show while writing
- Every JavaScript file is valid TypeScript file
- Will help you when you write React, Vue, Angular Apps
- Gives you the missing features in JavaScript like **_"Interface, Generics, Decorators"_**

## How TypeScript works?

- TypeScript compiler compile TS Code into JavaScript Code **_"This Called Transpilation"_**
- How About The New Features? Workaround

## What you need to know?

- JavaScript Concepts
  - Variables
  - Arrays
  - Objects
  - Functions
  - Conditions

## Setup TypeScript

1. Install Nodejs
2. Be Nodejs Its Installed "Check From Terminal" `node`
3. Install Typescript `npm install typescript`
4. Be TypeScript Its Installed "Check From Terminal" `tsc`
5. Create TS File
6. Compile JS File
7. Check TS Playground

## Nodejs Installation

### Windows & Mac

- Go to [nodejs](https://nodejs.org/) offical website
- Download **_LTS Version_** and Install
- Check Nodejs Version `node -v`

### Linux

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

- Check Nodejs Version `node -v`

## TypeScript Installation

```bash
npm install -g typescript
```

### Check TypeScript Version

```bash
tsc -v
```

### Compile TypeScript File to Javascript File

```bash
tsc filename.ts
```

- use watch

```bash
tsc -w filename.ts
```

---

## Statically VS Dynamically Typed Languages

### Statically Typed Language Like [Rust, C, C++]

- Variables types are static, once you declare it you cannot change
- Type of a variable is known at compile time **_"Do Type Checking At Compile-Time"_**
  - Have better performance at run-time due to not needing to check types dynamically
- Error detected earlier

### Dynamically Typed Language Like [PHP, Python, JavaScript]

- Variables types are Dynamic, you can always change if
- **_"Type Checking At Execution-Time"_**
- Error can be detected after execution

---

## Type Annotations And Any Data Type

### Type Annotations || Singature

- Indicate the data type of variables
- Indicate the data type of functions input/output
- objects, etc.

```typescript
let theName: string = "Elzero";
let theAge: number = 40;
let hire: boolean = true;
let all: any = "Elzero Web School";
let allVars;

theName = "Osama";
all = 100;

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(10, 20));
console.log(typeof add(10, 20));
```

---

## Type Annotations With Array

```typescript
let all: string | number | boolean = "Osama";

all = "A";
all = 100;
all = true;

let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}
```

---

## Type Annotations With Multidimensional Arrays

```typescript
let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

let arrayFour: (string | number | string[] | boolean)[] = [
  1,
  2,
  3,
  4,
  "A",
  "B",
  ["C", "D"],
  true,
  false,
];
```

---

## Type Annotations With Functions

- noImplicitAny
- noImplicitReturns
  - Will check all code paths in a functions to ensure they return a value
- noUnusedLocals
  - Report errors on unused local variables
- noUnusedParameters
  - Report error on unused parameters in functions.

```typescript
let showMsg = true;

function showDetails(name: string, age: number, salary: number) {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age is ${age}, Salary is ${salary}, Test Variable ${test}`;
  }
  return "No Data to Show";
}

console.log(showDetails("Osama", 40, 500000));
```

---

## Function Optional and Default Parameters

### Function

- Optional and Default Parameters
- In JavaScript, every parameter is optional => "undefined" if you didn't use it "?" optional parameter

```typescript
function showDate(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showDate("Mg Mg", 20, "Myanmar"));
```

---

## Function Reset Parameter

```typescript
function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }
  // nums.forEach((num) => (result += num));
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));
```

---

## Anonymous & Arrow Function

### Function

- Anonymous Function

```typescript
const add = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(add(10, 20));
```

- Arrow Function

```typescript
const addWithArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(addWithArrow(20, 30));
```

---

## Data Types

### Type Alias

```typescript
type st = string;
let theName: st = "Elzero";
theName = "Osama";

type standnum = string | number;
let all: standnum = 10;
all = 100;
all = "Osama";
```

### Type Alias Advanced

```typescript
type Buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};

type Last = Buttons & {
  x: boolean;
};

function getAction(btns: Last) {
  console.log(`Action for button Up is ${btns.up}`);
  console.log(`Action for button Right is ${btns.right}`);
  console.log(`Action for button Down is ${btns.down}`);
  console.log(`Action for button Left is ${btns.left}`);
}

getAction({
  up: "Jump",
  right: "Go Right",
  down: "Go Down",
  left: "Go Left",
  x: true,
});
```

### Literal Types

```typescript
type nums = 0 | 1 | -1;

function compare(num1: number, num2: number): nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1
```

### Tuple

- Is another sort of array type
- We knows Exectly how many elements it contains
- We know which types it contains at specific positions

```typescript
let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];
console.log(article);

const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
```

### Void And Never

- Void

  - Function that will return nothing
  - Function in JavaScript that not return a value will show undefined
  - undefined is not void

- Never
  - Return type never returns
  - The function doesn't have a normal completion
  - It throws an error or never finishes running at all 'Infinite Loop'
