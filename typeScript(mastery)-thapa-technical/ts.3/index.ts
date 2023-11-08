// remember tsc means type script compiler 
// and also tsc <typescript file > creates the compiled <js file> to run and get the output in the 
// terminal 
// type  - node <js file>/ <typescript file > 
// ----------------------------------------------------------------------------------------------------------
// video 3 - thapa technical 

// todo 1 : write a progam to add two number 
// todo 2 :how to catch errors and solve it  ? 
// todo 3 : TS Configaration file 

// todo 1

// function sum(a,b){
//     return a+b
// }
// console.log(sum(5,10))
// console.log(sum(5,"vinod"))// right in js but not allowed in ts 
// so to catch errrors  we will rewrite the function like 
// @ts-ignore
function sum(a:number ,b:number):number{
    return a+b
}
console.log(sum(5,10)) 
// console.log(sum(5,"vinod"))// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// you see 
//  :number ->   this is called annotation

// console.log(sum(5,"vinod"))
// now there is also one more scenario we need to aware of 
// tsconfig file 


// ****************************************************************************************************************

// tsconfig.json file is a file of JSON format which allows us to point the root level files and different compiler options to setup that require to compile a TypeScript based projects. The existence of this file in a project specifies that the given directory is the TypeScript project folder root. 

// The tsconfig.json file mainly consists of the information for the following:

// CompilerOptions
// CompileOnSave
// Files
// Include
// Exclude


// The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.

// JavaScript projects can use a jsconfig.json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.

// A project is compiled in one of the following ways:

// Using 
// tsconfig.json
//  or 
// jsconfig.json
// By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
// By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.
// When input files are specified on the command line, tsconfig.json files are ignored.

// Examples
// Example tsconfig.json files:

// Using the files property

// {
//   "compilerOptions": {
//     "module": "commonjs",
//     "noImplicitAny": true,
//     "removeComments": true,
//     "preserveConstEnums": true,
//     "sourceMap": true
//   },
//   "files": [
//     "core.ts",
//     "sys.ts",
//     "types.ts",
//     "scanner.ts",
//     "parser.ts",
//     "utilities.ts",
//     "binder.ts",
//     "checker.ts",
//     "emitter.ts",
//     "program.ts",
//     "commandLineParser.ts",
//     "tsc.ts",
//     "diagnosticInformationMap.generated.ts"
//   ]
// }
// Using the include and exclude properties

// {
//   "compilerOptions": {
//     "module": "system",
//     "noImplicitAny": true,
//     "removeComments": true,
//     "preserveConstEnums": true,
//     "outFile": "../../built/local/tsc.js",
//     "sourceMap": true
//   },
//   "include": ["src/**/*"],
//   "exclude": ["**/*.spec.ts"]
// }

// ************************************************************************************************

// ok without tsconfig.json the typescript does not understands that it should not compile the errors 
// if we have error in or ts file then it will compile it without understanding that it is wrong to  do 
//  so thats where we need it as the compiled js will also return the eroors too .


// to bulid it type ,
// tsc --init

//  go to that tsconfig.jsoon and search for 
//  noEmitOnError 
// and set this value true 
// which means /* Disable emitting files if any type checking errors are reported. */

// and if we dont want the js file to be created jaust type 

// tsc --noEmitOnError  index.ts
// and it works (rreturns  the all errors in ts  )