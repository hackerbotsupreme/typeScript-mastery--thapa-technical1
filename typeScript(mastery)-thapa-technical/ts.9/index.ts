//  generics  - video 19 
// what is generics  ? 
//  the main focus of the generic is reusable component . 
// and yeah we had learned about reusable components in react .

// generics in typescript allow you to create reusable components or functions that can work with multiple  data types .

function logAndReturn (value: number| string):number | string {
    console.log(...data:value);
    return value;
}
const numberResult : string | number = logAndReturn(value : 42);
const stringResult : string | number = logAndReturn(value : "hello , generics ");

console.log(...data:numberResult)
console.log(...data:numberResult)