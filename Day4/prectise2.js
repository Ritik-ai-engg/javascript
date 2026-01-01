let companies=["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//remove the first company form the array
companies.shift();
//remove the uber and add Ola on its place
companies.splice(1,1,"Ola");
//add Amazon at the end
companies.push("Amazon");