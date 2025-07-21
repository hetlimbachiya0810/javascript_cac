// learn bout Truthy and Falsy values

// Falsy value = False, 0, null, undefined, NaN, "", BigInt(0) or 0n, 

// Truthy value = any on empty string- " " or "False" or "0" or "0n", [], {}, function(){}, Symbol()

// Nullish Coalescing Operator (??) : null undefined

// used as checking for the values where program do not have controls. helps in checking if some 3rd party is returning proper values and not null.

const name = null;
const name2 = "het";

const name3 = name ?? name2; // if one of those are null or undefined... return to me first not one of them.

//Ternary operator

// const age = Math.floor((Math.random() * 100 + 1));
// console.log(age);

// const canVote = age >= 18 ? "yeah bro you are cool" : "nah nig you ain't that old enough yet.";
// console.log(canVote);

// let's experiment with Math.random()
const max = 60;
const min = 0;
const someage = Math.floor((Math.random() * (max-min) + min));
console.log(someage);

const canvote = someage >= 18 ? "yeah bro you are cool" : "nah nig you ain't that old enough yet.";
console.log(canvote);