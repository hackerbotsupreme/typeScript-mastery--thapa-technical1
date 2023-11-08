console.log('my name ');
//  firs t lets revice the big int 
var maxnum = Number.MAX_SAFE_INTEGER;
console.log(maxnum);
//  video 6 : differences any vs unknown types with examples 
// the any thype is the most flexible type in js . it essentially turns off all the checking for the varoables or 
// or expressions it is applied to . you will get to see any type when u write the code .
// its basocally disabling type safety and tyep checking means upu are writing code in  js indirectly 
// let Num = 5 ;
// Num = 'aloke';//Type 'string' is not assignable to type 'number'.ts(2322)
// but when 
var Num = 5;
Num = 'Aloke';
// no errors 
Num = true;
// usecases : working with dynamic data : when fealing with data from dynamic sources like user inputs , network resource 
// or deserialized  json objects , the any type can be useful .
// migration from js : when migrating an existiong js code to typescript , using the any type can be convenient way to quickly 
// annotate variables and functions  without immediately speecifying their precise type .
// type: unknown 
// the unknown type is a safer-alternative to any because it still enforces tye checking and type safety . 
// variables of type unknown can hold of any type , but you must perform type checks or type assertions before using them 
// in soecific way . 
var num2;
num2 = 2;
num2 = "aloke";
num2 = true;
// we still enforce tye checking and type safety .
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
