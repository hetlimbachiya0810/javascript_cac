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
        results.style.color = 'red';
        results.innerHTML = "Enter valid Height";
    }else if (weight === '' || isNaN(weight) || weight <= 0){
        results.style.color = 'red';
        results.innerHTML = "Enter valid Weight";
    }else{
        results.innerHTML = (weight / (height* height) * 10000).toFixed(2);
    }
    const displayBMI = document.querySelector('#bmi-category');
    displayBMI.innerHTML = results.innerHTML;
    switch (true) {
        case (results.innerHTML < 18.6):
            displayBMI.innerHTML += " - Under Weight";
            break;
        case (results.innerHTML >= 18.6 && results.innerHTML <= 24.9):
            displayBMI.innerHTML += " - Normal Range";
            break;
        case (results.innerHTML > 24.9):
            displayBMI.innerHTML += " - Overweight";
            break;
        default:
            break;
    }
}
calBMI(height, weight);
});