//create a function using the "function"keyword thst that takrs a string as an 
//argument & retuns the number of vowels in the string
function countVowels(str){
   let count=0;
   for(const char of str){
    if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
        count++;
    }
   }
   return count;
}



//create an arrow function to perform the same task

const countVow=(str) => {
    let count=0;
   for(const char of str){
    if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
        count++;
    }
   }
   return count;

}


// for a given arraay of numbers, print the sqaure of each value using the forEach loop
let nums=[77,67];

nums.forEach((num)=>{
    console.log(num*num);
});

//another way
let calcSquare = (num) => {
    console.log("another way");
    console.log(num * num);
};
nums.forEach(calcSquare);