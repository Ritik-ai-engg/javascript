//Name formatter (Real life use: forms,app) ////////////////
// let strName = "riTiK RAjpUt";

// let words= strName.toLowerCase().split(" ");
// let result= "";

// for(let i = 0; i<= words.length; i++){
//     result += words[i][0].toUpperCase() + words[i].slice(1)+ " ";
// }
// console.log(result.trim);


//////////////////////////////////password strength checker (Real life: login system)/////////////////////////////
let password=prompt("enter your strong password");
let hasNumber = false;

for(let i=0 ; i< password.length ; i++){
    if(! isNaN(password[i])){
        hasNumber=true;
        break;
    }
}
console.log(hasNumber ? "Strong password":"Weak password");