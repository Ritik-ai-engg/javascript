////Create a H2 heading element with text-"Hello javascript".Append "from quest college students"
////to this text using js
// let h2= document.querySelector("h2")
// console.dir(h2.innerText);

// h2.innerText= h2.innerText + " from quest college students";


////Creat 3 divs with common class name-"box". Access them & add some unique text to each
////of them
let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}
// divs[0].innerText="new uniques value 1";
// divs[1].innerText="new uniques value 2";
// divs[2].innerText="new uniques value 3";