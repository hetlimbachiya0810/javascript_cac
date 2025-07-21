const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    // console.log(e.target);
    // console.log(e.type);
    // console.log(e.timeStamp);

    if (e.target.id === 'grey') { body.style.backgroundColor = e.target.id; }
    if (e.target.id === 'black') { body.style.backgroundColor = e.target.id; }
    if (e.target.id === 'blue') { body.style.backgroundColor = e.target.id; }
    if (e.target.id === 'yellow') { body.style.backgroundColor = e.target.id; }
  });
});