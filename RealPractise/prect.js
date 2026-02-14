//multiplication table of number
// let n=prompt("get your own table");
// for(let i=0; i<=10;i++){
// console.log(`${n}*${i}=${n * i}`);
// }

//reverse a number
// let number = prompt("give any number more then 3 digit");
// let reverse = 0;
// while(number > 0){
//     reverse = reverse * 10 + (number % 10);
//     number = Math.floor(number / 10);
// }
// console.log(reverse);

//check prime number
// let number = prompt("give any number");
// let isPrime=true;
// if ( number <= 1) {
//     isPrime=false;
// }
// for(let i = 2; i <= number - 1 ; i++){
//     if(number % i === 0){
//         isPrime=false;
//         break;
//     }
// }
// console.log(isPrime ? "Prime":"Not Prime");


//////////////////////////////////////////////////     for of loop      //////////////////////////////////////////


//Shopping  cart items
// let cart=["Milk","Bread","Eggs","Butter"];

// for(let item of cart){
//     console.log("Item in cart",item);
   
// }

//total price calculate
// let prices=[50,30,70,100];
// let total=0;

// for(let price of prices){
//     total +=price;
// }
// console.log("Total Bill",total);

////////////////////////////////////////////     password strength check    ////////////////////////////////////
// let password=prompt("Enter your password");
// let hasNumber=false;
// let hasUpper=false;
// let hasSpecial=false;

// for(let char of password){
//     if (!isNaN(char)){
//         hasNumber=true;
//     }
//     if(char >= "A" && char >= "Z"){
//         hasUpper=true;
//     }
//     if("@#!$%&".includes(char)){
//         hasSpecial=true;
//     }
// }
// if(
//     password.length >= 8 &&
//     hasUpper &&
//     hasSpecial &&
//     hasNumber
// ){
//     console.log("Strong password");
// }
// else{
//     console.log("Weak password");
// }
