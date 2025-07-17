// there are two ways to create Objects in JavaScript
obj_literal = {
    name: "Het",
    age : 25,
    city : "Bengaluru"};     /*1. Object Literal Notation*/

// console.log("Object Literal Notation:", obj_literal);

obj_const = new Object(); /*2. Object Constructor Notation*/
obj_const.name1 = "Het";
obj_const.age1 = 25;
obj_const.city1 = "Bengaluru";

// console.log("Object Constructor Notation:", obj_const); 

// or we can do
const obj_const2 = Object.create({});
obj_const2.name2 = "Het";
obj_const2.age2 = 25;
obj_const2.city2 = ["Mumbai", "Bengaluru", "Hyderabad"];
// console.log("Object created using Object.create:", obj_const2);
// console.log(obj_const2.city2?.[0]); // Optional chaining to avoid errors if city is undefined

const obj_assign = Object.assign({}, obj_literal, obj_const2);
// console.log("Object.assign result:", obj_assign);

console.log(obj_assign.hasOwnProperty('age'));
