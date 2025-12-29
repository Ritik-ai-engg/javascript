//1st
// const product={
//     title: "Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };
// console.log(product);

//2nd
// const profile={
//     userName: "Ritik Rajput",
//     isFollow: false,
//     followers: 123,
//     following: 123,
// };
// console.log(typeof profile["userName"]);

//3rd
// let num=  prompt("Enter a number");

// if(num%5 === 0){
//     console.log(num,"is multiple of 5");
// }else{
//     console.log(num,"is not a multiple of 5");
// }

//4thc:\Users\dell\.vscode\javascript\first.html
 let Score=prompt("enter your score (0-100)");
 let grade;

 if(Score>=90 && Score<=100){
    grade="A"
 }else if(Score>=70 && Score<=89){
    grade="B"
 }else if(Score>=60 && Score<=69){
    grade="C"
 }else if(Score>=50 && Score<=59){
    grade="D"
 }else if(Score>=0 && Score<=49){
    grade="F"
 }

 console.log("according to your scores, your grade was : ", grade);