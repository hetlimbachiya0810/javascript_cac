// here we will explore objects in javascript
const sym = Symbol("unique");

const obj1 = { 
    a: 1,
    "a 1": 1.5,
    b: 2,
    c: 3,
    [sym]: "symbol value"
};
console.log("Object 1:", obj1);
console.log(obj1.a);
console.log(obj1["a 1"]);
console.log(typeof obj1[sym]);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
