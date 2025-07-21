const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    console.log(height);

    const weight = parseInt(document.querySelector('#weight').value);
    console.log(weight);

const results = document.querySelector('#results');

function calBMI(height,weight) {
    if( height === '' || isNaN(height) || height <= 0){
        console.log("Enter valid Height");
    }else if (weight === '' || isNaN(weight) || weight <= 0){
        console.log("Enter valid Weight");
    }else{
        results.textContent = (weight / (height* height) * 10000).toFixed(2);
    }    
}
calBMI(height, weight);
});