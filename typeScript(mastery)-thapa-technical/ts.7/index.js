// video 8 
//  typescript function mastery : understanding invocation , declaration , and return types 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var student1 = {
    name: "aloke",
    age: 20,
    greet: function (country) { return "welcome my name is ".concat(name, " , i am ").concat(age, " yrs old i am from ").concat(country); }
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "welcome my name is ".concat(name, " , i am ").concat(age, " years old ");
};
console.log.apply(console, __spreadArray(__spreadArray([], data, false), [introduction(student1)], false));
console.log(student1.greet("india"));
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
