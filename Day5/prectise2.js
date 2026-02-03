//filter out of the marks of students that scored 90+
let marks=[97,64,32,49,96,99,86];

let toppers=marks.filter((val)=>{
    return val>90;
});
console.log(toppers);


//take number n as input from user.create an array of  numbers from 1 to n
//use the reduce method to calculate sum of all numbers in the array
//use the reduce method to calculate product of all numbers in the array.
let n=prompt("enter a number");
let arr=[];

for (let i=1;i<=n;i++){
    arr[i-1]=i;///1,2,3,4
}
console.log(arr);

//sum of all numbers
let Sum=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("Sum=",Sum);

//product of all
let Product=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("product=",Product);