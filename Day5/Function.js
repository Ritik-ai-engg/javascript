// function myFunction(){
//     console.log("welcome to apna college !");
//     console.log("We are learning JS :");
//     console.log("welcome to apna college !");
//     console.log("We are learning JS :");
// }
// myFunction();
// myFunction();

// function myFunction(msg,n){  
//     //parameter -> input
//     console.log(msg*n);
// }
// myFunction("I  love JS",100); //argument

//function -> 2 numbers ,sum
// function sum(a,b){  //in this we print values and it return value
//     console.log(a + b);
// }

// //in this we don't print values but it return value
// function Sum(x,y){
//     //local variable ->scope
//    s= x + y;
//    console.log("befor return");             
//     return s; //after return code line another code lines not execute
//     console.log("after return");
// }
// let val = Sum(3,4);
// console.log(x);
// console.log(val);


//sum function
function Sum(a,b){
    return a + b;
}

// //another way arrow function
// const arrowSum=(a,b) => {
//     console.log(a + b);
// };

function mul(a,b){
    return a*b;
}

// const arrowMul=(a,b) => {
//     console.log( a * b);
// };

/////// forEach method///////
let arr= [1,2,3,4,5];

arr.forEach( (val) => {// value at each idx
     console.log(val);
});

let arr1=["Bihar","Haryana","Mumbai"];
arr1.forEach((val ,idx , arr1) => {   //if want idx then we define the idx parameter eith another parameter
    console.log(val.toUpperCase(),idx,arr1);//if we want com arr with  val and idx then we also define the arr name 
});

////////map method//////
let arr2=[40,50];
// arr2.map((val)=>{
//     console.log(val);
// });

//if want to make new array and want to store copy of another array
let newArr = arr2.map((val) => {
    return val*val;
});
console.log(newArr);


///////filter method ///////
let arr3=[1,2,4,5,6,7,8,9,10];
let evenArr= arr3.filter((val) => {
    return val%2 === 0;
});
let newArr3=arr3.filter((val)=> {
    return val>3;
});
console.log("New Arr=",newArr3);
console.log(`Even arr=${evenArr}`);


///////reduce method///////
let arr4=[5,6,2,8,3];

const output=arr4.reduce((result,current)=>{
     return result+current;
});
const output2=arr4.reduce((prev,curr)=>{
    return prev>curr? prev:curr;
});
console.log(output2);
console.log(output);