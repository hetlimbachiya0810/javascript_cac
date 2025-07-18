function chai() 
{
// chai.js code goes here
    console.log("before chai initialization");
    
    const Chai = 'chai'
    // console.log(this);
    
    // return Chai;
}

// console.log(chai(this));


// IIFE = Imediately ivoked function expression

// (name_of_func = () => console.log("inside IIFE function"))();

// Proper IIFE format:
(function name_of_func(name) {
    console.log(`hello ${name}`)
})("het");

(() => {console.log("inside arrow IIFE function");})();


// name_of_func()