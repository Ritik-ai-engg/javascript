//for a given array with marks of students. find the average marks of the entire class
let marks=[85,97,44,37,76,60];

let sum =  0;

for(let val of marks){
    sum += val;
}

let avg= sum/marks.length;
console.log(`avg marks of the class = ${avg}`);


//for a given array with prices of 5 items.all items have an offer 
//of 10% OFF on them. change the array to store final price after applying offer 
let items =[250,645,300,900,50];

let i=0;
// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i]= items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }


// another way with simple loop
for(let i=0; i< items.length; i++){
     let offer = items[i]/10;
     items[i] -= offer;
}
console.log(items);