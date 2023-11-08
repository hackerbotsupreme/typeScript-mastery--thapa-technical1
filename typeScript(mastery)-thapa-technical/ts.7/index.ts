// video 8 
//  typescript function mastery : understanding invocation , declaration , and return types 


// function declaration 
// you can declare a function using the function keyword , foolwed by the function name , a list of parameters 
// enclosed in parentheses and a return type . 
// the function body containes the code that will be executed when the function is called . 

// functioin invokation (which means calling a function )
// to execute a function , you simply invoke it by  using its name foolowed by parentheses . 
//  you can provide arguments (actual values ) for the parameters defined in the function declaration . 


// greeting function 
// these are parameters 
// function  greet(name:string,id:number ){
//     console.log(`welcome , ${name} and your id is ${id}`)
// }
// // function call 
// greet('ALoke',1)
// these are arguments 


// using arrow function 
// const  greet = (name:string,id:number ) =>{
//     console.log(`welcome , ${name} and your id is ${id}`)
// }

// greet('ALoke',1)


// now the function return : means how do  you specify the return type of a function in typescript ?
//  to specify the return type of a function you can use colon(:) followed by the desired type .
// const  greet = (name:string,id:number ) =>{
//     return (`welcome , ${name} and your id is ${id}`)
// }
//  we can also specify wht the ouput of the dunction will be its void by default 
// const  greet = (name:string,id:number ):string  =>{
//     return (`welcome , ${name} and your id is ${id}`)
// }

// greet('ALoke',1)


// practice time 
// write a function called isPalindrome  that takes a string as a parameter and returns
//  true if the string is a palindrome (reads the same forwards and backwards ) and false ther wise . 

// const isPalindrome = (palin:string):boolean =>{
//     let myPalin = palin.split('').reverse().join("");
//     return myPalin === palin
// } 
// console.log(isPalindrome('122345'))

// video 9
//  typeScript type inference : ask in interview questions 

// type inference in typescript refers to the ability of the typescript compiler to atomatically 
// determine  and assign types of cariables , ecpressions aand function return  values based on their usage and context 
// in the code 

// const myNmae:string = 'aloek '
// here the :string is called type annotation  which is written explicitely 
// let num = 24738; 

// no errors this is type inference 

// use tyep inference in typescript for the simple cases where the assigned value indicates the intend type . 
// when in doubt , provide explicit type annotations to make your intentions clear . 
//  avoid relying too heavily on type inference when the assigned is complex or ambiguous . 
//  regularly review and refactor your code to ensure that inferred types align with your intentions .


// video 9 
// understanfding optional and default parameterrs  in tyescript 

// typescript allws you to define optional and default parameters in functions . 
//  optional parameters  are denoted by appending a ? symbol after the parameter name . 
//  and default paramaeters are specified by providong a default value in the parameter declaration .


// normal 

// // func define 
// const greet = (name:string  ,id:number  ) :string  =>{
//     return `welcome , ${name} and ur id is ${id}`
// }

// //  func call 
// const emp = greet ('aloke',6)
// console.log(emp)


// // default parameters  

// // func define 
// const greet = (name:string  ,id:number =1  ) :string  =>{
//     return `welcome , ${name} and ur id is ${id}`
// }

// //  func call 
// const emp = greet ('aloke')
// console.log(emp)


// optional parameters  

// func define 
// const greet = (name:string  ,id?:number   ) :string  =>{
//     if(id){
//         return `welcome , ${name} and ur id is ${id}`
//     }else{
//         return `welcome , ${name} `
//     }
// }

// //  func call 
// const emp = greet ('aloke')
// console.log(emp)


//  video 10
// typescript array tutorial : initializing ,accessing and checking length of an array 

// what is an array ?
// in typescript , an array is a data type that can store multiple value of different types but its highly recommend to 
//  store the same data types . 

// in typescript we have three ways to define a array 



//  using square brackets .
// normal array 
// const nums = [1,34,4,6,7,8,8]
// giving type 
// const nums:[]=[1,34,4,6,7,8,8]
// Type '[number, number, number, number, number, number, number]' is not assignable to type '[]'.
//   Source has 7 element(s) but target allows only 0.ts(2322)
// const nums:number[]=[1,34,4,6,7,8,8]


//  using array constructor  
// const numbers:number[] = new Array(34,4,6,7,8,8)
// //  using array.of method .


// // using the array.of method 
// const names:string[] = Array.of("vinod","aloek","yt")
// // you can access individual elements of an aarray s=using square brackets notation with the index of the 
// // element . remember that arrray indicates  start from 0.
// console.log(names[1])
// console.log(names.length)


// video 11 
//  typesscripts array methods and iterations explained in hindi 

// iterating over elements 
//  you can iterate over elements of an array using various looping constructs such as 
// for , for ... of  , or array methods like foreach .

// arrays in ts come with built-in methods that allow you to perfrm common opertions 

// const fruits : string[]= ["apple","banana","orange","mango"]

// // adding elements to an array push 
// const newUpdatedfruits = fruits.push("kiwi")
// console.log(newUpdatedfruits)


// // remove an element from the end  : use pop()

// // const lastdata  = fruits.pop();
// // console.log(lastdata)

// // remove an element from the start : use unshift()

// const lastdata  = fruits.pop();
// console.log(lastdata)



// iterating over elements 
//  you can iterate over elements of an array using various looping constructs such as 
// for , for ... of  , or array methods like foreach .

// using for loop 
// for(let i=0 ; i<fruits.length ; i++){
//     console.log(i)
// }
// this will print 1,2 ,3 ,4...
// for(let i=0 ; i<fruits.length ; i++){
//     console.log(fruits[i])
// }
// // "apple","banana","orange","mango"


// // forEach method 
// fruits.forEach((curVal:string)=>console.log(curVal))

// for of
// for..of loop(iterates over values )
// for(const value of arr){
// console.log(value )
// }
// returns value 


// for in 
// for in  loop(iterates over indices )
// for(const index in arr){
// console.log(index)
// }
// returns index 

// video 12 
//  map and filter methods lin typescript 


// Map method 
//  the map method creates a new array by applying a provided  function to each element of the 
//  original array . it trnsforms each element and retrns a new array with  the trasformed values .

//  doubling each number
// const numbers:number[]=[1,3,5,6,78,7]

// const doubleData  = numbers.map((curval:number)=> curval*2)

// converting numbers to strings 
// const numbers:number[]=[1,3,5,6,78,7]
// const numberToString :string[] = numbers.map((curElm:number)=>curElm.toString())

// filtering the number 
// const numbers:number[]=[1,3,5,6,78,7]
// const numberToString = numbers.map((curElm:number)=>curElm>3)

// const numbers:number[]=[1,3,5,6,78,7]
// const evenNumbers:number[]  = numbers.filter((curElm:number)=> curElm%2 === 0)
// console.log(evenNumbers)


// video 13 
// typescript object explained 

// in typescript objects are used to represent data with key-value pairs . 
// each key in the object is a string (or a symbol in es6) that maps to a value .

// lets consider a real-life example of representing a person's information 
// using typeScript objects 
//  name ,age , isStudent ,address{city,country}

// const person ={
//     name : 'aloke pramanik ',
//     age: 28,
//     isStudent: true ,
//     address:'India',
//     address: {
//         city : 'pune',
//         country:'india'
//     }
// }
// const person: {
//     name: string;
//     age: number,
//     isStudent: boolean,
//     address: {city:string; country:string}
// } = {
//     name: 'aloke pramanik ',
//     age: 28,
//     isStudent: true,
//     address: {
//         city: 'pune',
//         country: 'india'
//     }
// }
// // accessing the properties 
// console.log(person.address.country)
// // updating the object properties 
// person.address.country = "kolkata"
// console.log(person.address.country)



// video 14 
// type alias , making code easier to read and maintain 

// in typescript , a type is a way to give a name to a specific type or combinations of types . it allows you to 
//  create a custom name for a type , making it easier to reuse and refer to the same type in different  parts of 
//  your code . type aliases provide better readability , organization and abstraction of complex types 

//  to define a  type alias , you use the type keyword followed by the alias name and the type definition :
// type alias syntax 

// type Person = {
//     name: string;
//     age: number,
//     isStudent: boolean,
//     class?:string ;// optional property 
//     address: { city: string; country: string }
// }

//  previously 
// const person: {
//     name: string;
//     age: number,
//     isStudent: boolean,
//     address: { city: string; country: string }
// } = {
//     name: 'aloke pramanik ',
//     age: 28,
//     isStudent: true,
//     address: {
//         city: 'pune',
//         country: 'india'
//     }
// }


// after adefining alias 
// const person: Person= {
//     name: 'aloke pramanik ',
//     age: 28,
//     isStudent: true,
//     address: {
//         city: 'pune',
//         country: 'india'
//     }
// }


// todo create a product object 
// define an interface  or type  representing a product with properties for name , price  ,aand quality ,
//  create a product object with the following code .

// name : "laptop"
// price : 1000
// Quantity : 6

// const product:{
//     name: string;
//     price: number ;
//     Quantity: number ;
// } = {
//     name: "laptop",
//     price: 1000,
//     Quantity: 6,
// }


// calculate  total price 
// given the product object from the previous question , write a function called calculateTotalPrice 
// that calculates and returns the total price (price quantity) of the product 

// type product = {
//     name: string;
//     price: number ;
//     Quantity: number ;
// }

// const Product:product = {
//     name: "laptop",
//     price: 1000,
//     Quantity: 6,
// }

// const calculateTotalPrice =(Product:product)=>{
//     // return Product.price*Product.Quantity
//     // or we can do like 
//     return `${Product.name} total cost ${Product.price*Product.Quantity}`
// }
// console.log(calculateTotalPrice)

// video 15 
// call ssignatures in tyescript 

// the function call signture refers to the declaration or definition of a function , which 
//  includes the function's name , parameters , and return type . it defines the structure and type information 
// of a function without including the function's implementation or body . 


// lets add one function inside the object . ot's more like creating a method in object 
//  very important -> call signatures a re typiclly used inside type notations to describe teh shape 
// of of functions withi object types .

// example -> 
// type student = {
//     name:string;
//     age:number ;
//     gender?:string ;
//     (country:string):string // call signature 
// }what is it all about 
// https://www.typescriptlang.org/docs/handbook/2/function


// type alias in  obj 

// type  student = {
//     name :string ;
//     age : number;
//     gender?:string ;
//     greet : (country:string) => string // method call signature 
// }
// const student1:student = {
//     name:"aloke",
//     age:20,
//     greet : (country):string => `welcome my name is ${name} , i am ${age} yrs old i am from ${country}` 
// }

// const introduction : (student1 : student)=> string =(student1 : student):string =>{
//     const {name , age } = student1 ;
//     return `welcome my name is ${name} , i am ${age} years old `;
// }

// console.log(...data:introduction(student1));
// console.log(student1.greet)
// console.log(...data:student1.greet(country : `india`))

// review the code and watch the video again 


// video 16 
// Enums in ts (very important )
// enum Roles = {
//     user ="user",
//     admin = "admin "
// }


// enums in typeScript are commonly used when you want to represent  a set of realted values and choose one value 
//  from the multiple options . enums provide a convenient way to define  a set of named values and associate 
//  them with specific meanings .

// in ts , when enum constants are  not explicitely assigned numeric values  they are automatically assigned 
// increment numeric values starting from 0 . the default numeric value for the first 
// enum constant is 0 , and subsequent enum constants receive values incremented by 1 .
// when one property can hold many properties we use enums .

// user1 = login => normal user 
// user2 = login => admin  user 


// normal way 
// type LoginDetails = {
//     name? : string ;
//     email : string ; 
//     password : string;
//     // role: UserActivation ;
//     role: [user , admin ] ;
// }
// const user1:LoginDetails = {
//     email : 'aloke@gamil.com',
//     password: 'dhed',
//     role : 'admin',
// }
// const user:LoginDetails = {
//     email : 'rekah@gamil.com',
//     password: 'hfue',
//     role : 'user',
// }


// so lets define with enums 
// code demonstration how to check if the logged in user is a admin or user usig enums 
// enum  Roles {
//     user  = "user",
//     admin = "admin"
// }

// type LoginDetails = {
//     name? : string ;
//     email : string ; 
//     password : string;
//     // role: UserActivation ;
//     // role: [user , admin ] ;
//     // updated to 
//     role: Roles
// }
// const user1:LoginDetails = {
//     email : 'aloke@gamil.com',
//     password: 'dhed',
//     role : Roles.admin,
// }
// const user:LoginDetails = {
//     email : 'rekah@gamil.com',
//     password: 'hfue',
//     role : Roles.user,
// }

// const isAdmin : (user1: LoginDetails)=> string = (user:LoginDetails):string =>{
//     const {name,email,role} = user;
//     return role === "admin"? `${email} is allow to edit the website `:`${name} is not allow to edit the website `
// }

// console.log(...data: isAdmin(user:user1))
// console.log(...data: isAdmin(user:user2))
// need to review 

// video 17 
//  tuples in the ts , is it better than array or not .
//  in ts , tuples are a data structure  that alows you to store  a fixed-size collection of elements  of different types 
// .they are similar to teh arrays but with a key difeerence : the types of elements in a tuple are fixed and 
// declared at the time of creation , wheareas arrys can hold elements of the same type and their size can vary .


// real-life example of using tuples in typescript 
//  lets consoder  a scenario where you want to represent a pereson;s basic information, including their name, age , and whether 
// they have a driver's  licence . using a tuple can be an inapropiate choice because these three elements have a 
//  specific order and type .


// defining tuple type for person information 
// const favCity : any[] = ['kolkata','india','bangladesh', true, 'pakistan',55]
// type PersonInfo = readonly[string ,number , boolean ]


// // function to display person information 
// // const displayPersonInfo: () => void =():void =>{}
// const displayPersonInfo: (person: PersonInfo) => void =(person:PersonInfo):void =>{
//     const [name,age , hasDriverLicense] = person ;
//     console.log(...data:`Name : ${name}, Age: ${age}, Driver's license: ${hasDriverLicense}?'yes'?'no'}`)
// }

// // example usage 
// const person1:PersonInfo = ['vinod',27,true]
// const person2:PersonInfo = ['thapa',20,false]

// person1.push("coding")
// person1.push(person1)

// displayPersonInfo(person:person1)
// displayPersonInfo(person:person2)


