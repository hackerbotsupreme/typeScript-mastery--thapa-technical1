console.log('hello world ')

//  video 18 
// Unions aand intersections in ts 
// union types allow you to specify that a variable acan hold values of multiple types . you can use 
// | pipe smbol to  define a union type . in ts , it is essential to ensure thatat least one of the types in the 
// union includes all the requires properties . 
// failure to do so will result in a type error  during compilation .

// think about a concact form where , user can type anyring in  the form 
// lets say name , in the name user can type anyrhing and say its his name 
//  so to rackle that , 

// const inputValue :()=> void = (): void =>{}
// const inputValue :(value: string)=> void = (value : string | number| boolean): void =>{}



// // so here we will use pipe operator 
// //  so user is giving boolean , number , and string and many more so how we are gonna write the function 

// // lets say firsst user giving this , 
// inputValue(555)
// // lets say second  user giving this , 
// inputValue('hello world ')
// // lets say third  user giving this , 
// inputValue(true)

//  so user is giving boolean , number , and string and many more so how we are gonna write the function 


// practice , we will create a function that can accept different types of arguments and perform different actions on the 
//  type of input . suppose we want to create a  function that doubles the value if the input  is a number 
// or  converts the input to upercase if its a string . to achieve this , we can use a union type to allow the function to a
//  accept both numbers  and strings .


// define 
// const userInput: (value: string | number) => ... = (value: string | number): string | number => {
//     if (typeof value === "number") {
//         return value * 2
//     } else if (typeof value === "string") {
//         return value.toUpperCase();
//     } else {
//         throw new Error(message : "invalid input data")
//     }
// }




// // function call 
// // iserInput(10);
// // iserInput("subscribe");
// // iserInput(10);

// console.log(...data: userInput(value:10))
// console.log(...data: userInput(value:"subscribe"))


// intersection  types allows you to combinemultiple types into a single type . you use  the & (ampersand) symbol to define 
//  an intersection type 

// type Person = {
//     name:string;
//     age : number;
// }
// type Employee = {
//     emp_id: number ;
//     department : string ;
// }
// // | is union 
// type EmployeeDetails = Person | Employee ; 
// const  employee : EmployeeDetails = {
//     name :"aloke",
//     age: 29 ,
//     emp_id: 111 ,
// }
// & is intersection 
// type Person = {
//     name:string;
//     age : number;
// }
// type Employee = {
//     emp_id: number ;
//     department : string ;
// }
// // & is union 
// type EmployeeDetails = Person & Employee ; 
// const  employee : EmployeeDetails = {
//     name :"aloke",
//     age: 29 ,
//     emp_id: 111 ,
//     department : "it" ,
// }


// create user profile 
// you are given two typescipt types : user and MyLocation . the user type represents basic user information , while the 
//  myLLocation type contains datails about the user;s location . create a function called createUserProfile 
// that takes a User object and a MyLocation object as an arguments and prints the user's name and the city they 
//  are from 


// type User = {
//     name : string ,
//     age: number ,
// }
// type MyLocation = {
//     city : string ;
//     country : string ;
// }
// const  user: User = {
//     name : "vinod",
//     age:29 ,
// }
// const myLocation: MyLocation = {city : "pune",country:"India"}


// // defined 
// const createUserProfile: (user:User , location:MyLo... )= (user:User ,location:MyLocation ) : string => {
//     // return `my name is ${user.name} and i am living in city : ${location.city}`
//     return (...user , ...location )
// }

// cosnt myCompleteInfo : User & MyLocation = createUserProfile(user ,location : myLocation)
// console.log(...data:myCompleteInfo)


// // call 
// console.log(...data:createUserProifile(user,myLocation))

//  video 22 - typescript compiler and project configuration - mode , rootDir , lib and more .
// prevously we have seen that how much trouble is it to run the file and getan  output ,

// so teh forst important thing to do here is the folder structure  with tsconfig.json file .

// firstis  the watch mode - 
// untill now whenever i make the / writes the ts the js doesnot automatically updates 
// i need to go to the terminal and write tsc index.ts then js updates so , this is where watch mode comes in .

// to use it just write tsc index.ts --watch

// now whatever you write in ts the js automatically updates it . 

// but again there is a problem , that suppose we create another ts file and write some code 
//  then we come to see the js file , and it's not updated it only compiling the ts from the 
// --watch applied file .... but in reality when we will work on big projects then there will not be just one file 
// we will have multiple files . so in this case we need that if we create any ts file then then that there 
// should be a js file automatically created from tht file , for that we have tsconfig.json file .

// tsc(typescript compiler ) --init

// write ->  tsc -w/-watch

// now discuss the essence of the src and dist folder in the project directory .
// src folder will have all my ts files .and the 
//  dist file will be our all the output files . 
// and how do we tell it to typescript 
// we change the outdir to dist in tsconfig.json 
// and the above thing is called rootdir and outdir .



// ./ -> this means where you are .
// and remember to update the ecmascript version that your ts is targeting to 
// which is from 2016 to atleast 2022  , "target": "ES2022",   /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */     

// be careful before doing the following 
// to avoid errors and make things smooth .
// and to upgrade 
// "lib": [],/* Specify a set of bundled library declaration files that describe the target runtime environment. */
// do "lib": ["ES2022","DOM"] 


// the next thing is whenever we install anything through npm/node 
// the node_modules folder ,packege.json,package-lock.json gets created by default to stop it 
//  at the end we will add after a comma 
// ,{
//     "exclude": [node],
//     "include": []
// }
// but incase when you want something to included importantly use include ,

//  so watch mode removes the problem of repitative compiling , src, dist , target , exclude , include 
//  to know more apecific about the lib go to ts github page .
// or we can go to official ts site for anything .


// remember tsconfig.json and all the above file should be under your root folder .

// and if you want to add any module in html then the syntax is 
// <script src="./jsfksf/.../.../..."    type="module"  >








// type inference  in tthe ts refers to the aability of the typescript compiler to automatically datermine 
// and assign types to vriables , expressions and function return values based on their usage and context .



