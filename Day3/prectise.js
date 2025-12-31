//enter your fullname using prompt and generate username based on the 
//input.start username with @,followed by their fullname and ending
//with the fullname length

let FullName= prompt("Enter your fullname without space");

let userName= "@"+FullName+FullName.length;

console.log(userName);
