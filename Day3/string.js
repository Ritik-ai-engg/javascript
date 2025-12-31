//string
// let str1="Hello world";
// let str2="Ritik";

// console.log(str1[6]);
// console.log(str2[1]);


// let obj={
//     item: "pen",
//     price: 10
// };
// console.log("the cost of",obj.item,"is",obj["price"],"rupees");
// //another way is template 
// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
//template
// let specialString =`this is the template literal ${1+2+3}`;
// console.log(specialString);

//escape characters
// console.log("Hello\nWorld");
// let x="Hello\tWorld";
// console.log(x.length);

//string built in methods

//toUpperCase()
let str="   Hello World";
let newstr = str.toUpperCase();
console.log(newstr);


//str.trim()
console.log(str.trim());

//str.slice(start,end?)
let str1 ="Hello world";
console.log(str1.slice(3,7));

//str.concat(str2)
let str2="Hello world ";
let str3="by Ritik";
let res= str2.concat(str3);/// another way str2 + str3
console.log(res);

//str.replace(searchVal,newVal)
let str4= "Hellololo";
console.log(str4.replace("lo","p"));   //it replace only first word from same one
console.log(str4.replaceAll("lo","p"));//it replace all same word 

//str.charAt(idx)
let str5 = "i love JS";

//str[5]="r";  /// this method not work for word replacement because  we need personal string to replace word
console.log(str5.charAt(5));
console.log(str5.replace("J","S"));

