let marks=[97,82,75,64,36];
console.log(marks);
console.log(marks.length);  //property


console.log(marks[3]);
marks[3]=66;    //this thing only approve in array not in string so we use str.replace in string
console.log(marks);

// let heroes =[ "ironman","thor","hulk","shaktiman","spiderman","antman"];
// console.log(heroes);

// //print value one by one
// // console.log(heroes[0]);
// // console.log(heroes[1]);

// //print all value using for loop
// // for(let idx=0; idx< heroes.length; idx++){
// //     console.log(heroes[idx]);
// // }

// //for of
// for(let hero of heroes){
//     console.log(hero);
// }


//another example 
let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];

for(let city of cities){
    console.log(city.toUpperCase());
}


//array methods
let foodItems=["potato","apple","litchi","tomato"];

foodItems.push("chips","burger","paneer");  //push method
console.log(foodItems);

foodItems.pop();    //pop method 
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log("deleted item=",deletedItem);

console.log(foodItems);
console.log(foodItems.toString());  ///toString method


let marvelHeroes=["thor","spiderman","ironman"];
let dcHeroes=["superman","batman"];
let indianHeroes=["shaktiman","krish"];
let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);  //concat method
console.log(heroes);

marvelHeroes.unshift("antman");     //unshift method
console.log("new marvel heroes",marvelHeroes);

marvelHeroes.shift();  //shift method
console.log(marvelHeroes);

console.log(marvelHeroes.slice(1,3)); //slice methode

//splice method
let learn=[1,2,3,4,5,6,7];

//learn.splice(1,2,111,112);

//add element
//learn.splice(3,0,111);

//delete element
//learn.splice(3,1);

//replace element
learn.splice(3,1,111);




