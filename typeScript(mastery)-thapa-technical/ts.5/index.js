//  video 5 - typescript boolean and bigint types 
// see the note file 
// in typeScript , the boolean ty[e represents a value that can be wither true 
// or false . it is one of the basic primitive types in the language . 
// let isMyNameAloke:boolean = true ;
// let isDone:boolean = true ;
// let hasStarted:boolean = false ;
// hasStarted = "yes"// invalid in ts
// Type 'string' is not assignable to type 'boolean'.ts(2322)
// let hasStarted: boolean
// tsc
// question : check even number 
// write a typescript function called inEven that takes 
// a number as a parameter and returns true if the number is even and false other wise. 
// function isEven(a:number):boolean{
//     return a% 2 === 0;
// }
// console.log(isEven(5))
// PS C:\Users\rekha\OneDrive\Desktop\ts.4> tsc index.ts
// PS C:\Users\rekha\OneDrive\Desktop\ts.4> node index.js
// false
// what is bigint data type 
// bigint type : it is a built-in type that allows you to work with numbers that are larger than the range supported
//  means js also has some limitations which is 2 raise to the power 53 .
// bigint literals are written by appending the n sufffix to an integer literal .112n
// type - console.log(Number.MAX_SAFE_INTEGER)
// note that , target in tsconfig.json defines which es version my project is usig . (it refers the ecmascript version )
// "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
// "lib": ["es2016"],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
// these two 
// by the regular  by the regular number type .
// const maxNumber = Number.MAX_SAFE_INTEGER
// console.log(maxNumber)
// 9007199254740991 -> MAXIMUM NUMNER THAT JS CAN HANDLE    
// index.ts:45:26 - error TS2339: Property 'MAX_SAFE_INTEGER' does not exist on type 'NumberConstructor'.
// maxNumber:bigint = 9007199254740991n
// console.log(maxNumber) 
// BigInt literals are not available when targeting lower than ES2020.ts(2737)
// means 
// so now we will mess with // "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
// "lib": ["es2016"],   
//  in typescript under the language and environment 
// not working in the video also find solution 
// todo write a typeScript function called isDivisibleBy4And* that takes a number as a parameter and returns true if the number 
// is divisible by both 4 and 8  
// 1. string comparison in ts : declare two variables  str1 and str2 of type string and assign them different 
// sentences. compare the two strings and store the result (ttrue or false ) in a variable called areEqual .
// 2. substring in ts : declare a variable longtext of type string an assign it a long sentence .
//  extract the firest 10 charecters  from the longtext and store the in a variable called shortText .
// 3. string  Template :  Declare variables and price of type string  and number , respectively .
// create string using template literals to display the product and its place in the format of  product{ product } is priced 
// at {price} dollars .
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let maxNumber  = (Number).MAX_SAFE_INTEGER
var maxNumber = Number.MAX_SAFE_INTEGER; // ts line 
console.log(maxNumber);
// 9007199254740991 
// the output 
