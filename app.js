console.log("bismillahir rahmanir rahim");
// relational operator

// console.log("PI" in Math);
// let fruits = ["apple", "banana", "orange"];
// let mans = {
//     name : "fahad hossain",
//     age : 19,
//     study : "FPI"
// }
// console.log(fruits instanceof Array);
// console.log(fruits instanceof Number);
// console.log(fruits instanceof Object);
// console.log(fruits instanceof String);
// console.log(mans instanceof Object);
// console.log(mans instanceof Array);
// console.log(mans instanceof String);
// console.log(5 ^ 3);
// console.log(10 > 5 ? "true": "false");
// console.log(yield 10);

// using yield..............................

function* coundStudent(){
    const rollNumber = [5, 6, 4, 8, 9];
    for(i = 0; i < rollNumber.length; i++){
        yield rollNumber[i];
    }
}
const rollNumber = coundStudent();
console.log(rollNumber.next());
console.log(rollNumber.next());
console.log(rollNumber.next());
console.log(rollNumber.next());
console.log(rollNumber.next());
console.log(rollNumber.next());
console.log(rollNumber.next());
console.log(rollNumber.next());


