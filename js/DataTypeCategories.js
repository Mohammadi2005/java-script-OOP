console.log("Primitive");

let a = 10;
let b = a;
a = 20;

console.log(`a : ${a}`);
console.log(`b : ${b}`);


let str_a = "amir";
let str_b = str_a;
str_a = "hossein";

console.log(`str_a : ${str_a}`);
console.log(`str_b : ${str_b}`);


////////////////////////////////////////////////////

console.log("Reference");

let Arr_a = [1,2,3];
let Arr_b = Arr_a;
Arr_a.push(4);

console.log(`Arr_a : ${Arr_a}`);
console.log(`Arr_b : ${Arr_b}`);


let obj_a = { value : 70};
let obj_b = obj_a;
obj_a.value = 80;

console.log(`obj_a.value : ${obj_a.value}`);
console.log(`obj_b.value : ${obj_b.value}`);