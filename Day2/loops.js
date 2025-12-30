//print 1 to 5
// for(let count=1; count<=5; count++){
//     console.log("Hello world");
// }
// console.log("loop has ended");

//calculate sum of 1 to n
// let Sum = 0;
// let n=100;
// for (let i = 1; i<=n; i++){
//     Sum=Sum +i;
// }
// console.log("Sum=",Sum);
// console.log("loop has ended");

//while loop
// let i= 1;
// while(i<=5){
//     console.log("Hello world");
//     i++;
// }

//do-while loop
// let i=20;
// do{
//    console.log("Apna college");
//    i++;
// }while(i<=10);

//for of loop
// let str="Hello World";
// let size= 0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("String size=",size);

//for in loop
let student={
    name: "Ronak Rajput",
    age: 21,
    cgpa: 8.5,
    isPass: true,
};
for(let key in student){
    console.log("key=", key, "value=",student[key]);
}