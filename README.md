# Assignment 1: Problem Solving using Typescript
## 1. What are some differences between interfaces and types in TypeScript?
- types can be used for both primitive and non-primitive data type but interface only usable for non-primitive data type i.e. object, array, tuple etc.
- types are writen using ```type``` keyword where an interface is declared using ```interface``` keyword
- types is more useful to write more readable code for similar type data such as array of number, array of string, array of boolean etc.
- interface is more useful for object

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.
```keyof``` is used to get the keys of an object or interface or type alias. It create an union type using that objects property.
```ts
interface IUser {
    name: string;
    age: number;
    email: number;
}
type TUser = keyof IUser; // This will give type --> "name" | "age" | "email"
```

## 3. Explain the difference between ```any```, ```unknown```, and ```never``` types in TypeScript.
- _Skipped_

## 4. What is the use of ```enums``` in TypeScript? Provide an example of a numeric and string enum.
- _Skipped_

## 5. What is type inference in TypeScript? Why is it helpful?
- _Skipped_

## 6. How does TypeScript help in improving code quality and project maintainability?
Typescript enforce developers to follow a similar structure of coding. In result, every code is writen in similar way. Besides, it also help to understand the code easily for other developer. Thus, code quality maintaind and make the project more maintainable for others.

## 7. Provide an example of using **union** and **intersection** types in TypeScript.
- Union
```ts
type TPositiveBloodGroups = "A+" | "B+" | "O+" | "AB+";
type TNegativeBloodGroups = "A-" | "B-" | "O-" | "AB-";
type TAllBloodGroups = TPositiveBloodGroups | TNegativeBloodGroups // Merge all types in TPositiveBloodGroups and TNegativeBloodGroups gives --> "A+" | "B+" | "O+" | "AB+" | "A-" | "B-" | "O-" | "AB-"

const rhPositiveUserBloodGroup: TPositiveBloodGroups = "O+"; // accepts only positive blood groups
const rhNegativeUserBloodGroup: TPositiveBloodGroups = "A-"; // accepts only negative blood groups
const generalUserBloodGroup: TPositiveBloodGroups = "B+"; // acceps all blood group
```
- intersection
```ts
type TRichPerson = {
    name: string;
    age: string;
    permanentAddress: string;
}
type TPoorPerson = {
    name: string;
    age: string;
    presentAddress: string;
}

type TPerson = TRichPerson & TPoorPerson; // Give only common property --> { name: string; age: string; }
```