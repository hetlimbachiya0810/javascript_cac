marvel = ["Captain", "ironman", "hulk", "thor", "howkeye"];
dc = ["superman", "batman", "wonderwoman", "flash", "aquaman"];


// for (let index = 0; index < marvel.length; index++) {
//     const element = marvel[index];
//     process.stdout.write(` ${element}`);
// }
// console.log(marvel.length);
// console.log(marvel);

// while ( marvel.length > 0 && marvel.length < 6) {
//     const element = marvel.pop();
//     console.log(`Removed: ${element}`);
//     // console.log(`Remaining elements: ${marvel.join(", ")}`);
//     console.log(` ${element}`);
// }
// console.log(marvel);


// marvel.forEach(element => {process.stdout.write(` ${element}`);});

// for (const element of marvel) {
//     process.stdout.write(` ${element}`);
// }


// marvel.forEach((element) => {console.log(element);})

// console.log(marvel.map(item => item.charAt(0).toUpperCase() + item.slice(1)));

// If you want to see all capitalized items in an array, use this instead:

// const capitalizedMarvel = marvel.map(item => item.charAt(0).toUpperCase() + item.slice(1));
// console.log(capitalizedMarvel);


const var1 = dc.filter( ()=>{
    const uperkeys = dc.map();
    return uperkeys.length > 0; 
});
console.log(var1);
