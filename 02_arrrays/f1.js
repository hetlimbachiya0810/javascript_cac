// Here we will learn about arrays and how to manipulate them in JavaScript


console.log("Knock knock, who's there? \nDarwaze pe me khada hoon, aur ye puch rahe\n");


const arr1 = [1, 2, 3, 4, 5];
console.log("1", arr1);

const arr2 = new Array(6, 7, 8, 9, 10);
console.log("2", arr2);

const arr3 = arr1.join();
console.log("3", arr3);
// console.log("arr3 is now a [" + typeof arr3 + "] : " + arr3);

const arr4 = arr1.concat(arr2);
console.log("4", arr4);

const arr5 = [...arr1, ...arr2];
console.log("5", arr5);

let numbers = 1234;
numToString = String(numbers);
const arr6 = Array.from(numToString);
console.log("6", arr6);

const ofArray = Array.of(arr1, arr2);
console.log("7", ofArray);