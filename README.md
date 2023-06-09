# Typescript

## Should have Knowledge

- JavaScript
  - Variables
  - Arrays
  - Objects
  - Functions
  - Arrow Functions
  - Destructuring

## Learn

- Introduction to TypeScript
- Setting up the development enviroment
- Creating your first TypeScript program
- Configuring the TypeScript compiler
- Debugging TypeScript applications

## What is TypeScript

A programming language to address **shortcomings** of **JavaScript**

### TypeScript Benefits

- Static typing
- Code completion
- Refactoring
- Shorthand notations

| Statically-Type  | Dynamically-Type           |
| ---------------- | -------------------------- |
| (C++, C#, Java)  | (JavaScript, Python, Ruby) |
| init number = 10 | let number = 10            |
| number = "a"; ❌ | number = "a";              |
|                  | Math.round(number);        |

## TypeScript

```typescript
let x: number = 10;
x = "a";
```

## Transpilation

![](https://mermaid.ink/img/pako:eNoljs0KwjAQhF8l7KmFtg8QQdB61Ite97I0q402PySbg5S-u8HeZoYZ5lthCoZBwytRnNX1fkB_agbJrer7ozo3Y3DRLpx2PzbDO7fQgePkyJo6XNErhSAzO0bQVRpKHwT0W-1RkfD4-gm0pMIdlGhI-GKp_jnQT1pyTdlYCem2k_yBth8VozDR?type=png)

## Drawbacks

- Compilation
- Discipline in coding

|        TypeScript        |   JavaScript    |
| :----------------------: | :-------------: |
| Medium to large projects | Simple projects |

## Setting Up the Development Environments

### Install TypeScript

```bash
npm i -g typesript
```

### Check Version

```bash
tsc -v
```

## Configuring the TypeScript Compiler

```bash
tsc --init
```

| tsconfig.json  | Configuration                           |
| -------------- | --------------------------------------- |
| target         | ES2015 - ES2023, ES3 , ES5, ES6, ESNext |
| rootDir        | "./dir"                                 |
| outDir         | "./dir"                                 |
| removeComments | true                                    |
| noEmitOnError  | true                                    |
