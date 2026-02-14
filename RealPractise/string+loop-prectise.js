//Name formatter (Real life use: forms,app) ////////////////
// let strName = "riTiK RAjpUt";

// let words= strName.toLowerCase().split(" ");
// let result= "";

// for(let i = 0; i<= words.length; i++){
//     result += words[i][0].toUpperCase() + words[i].slice(1)+ " ";
// }
// console.log(result.trim);


//////////////////////////////////password strength checker (Real life: login system)/////////////////////////////
// let password=prompt("enter your strong password");
// let hasNumber = false;

// for(let i=0 ; i< password.length ; i++){
//     if(! isNaN(password[i])){
//         hasNumber=true;
//         break;
//     }
// }
// console.log(hasNumber ? "Strong password":"Weak password");


// let msg="please help me";
// if(msg.includes("help")){          //include()=it check word is present in string or not 
//     console.log("help request detected");
// }



/////////////////////// Hide card number(Banking style) ///////////////////////////
let AccountNumber= prompt("enter your account number");
let hidden="";
for(let i = 0 ; i <=AccountNumber.length ; i++){
    hidden += i < 12 ? "*" : AccountNumber[i];
}
console.log(hidden);