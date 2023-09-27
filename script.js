//const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.button');
const operatorButtons = document.querySelectorAll('.operator');
const calculator   = document.querySelector('.calculator'); 
const reset   = document.querySelector('.reset');
const deleteButton   = document.querySelector('.delete');
const equalButton = document.querySelector('.equal');
const display_input = document.querySelector('.input');
const display_output = document.querySelector('.output');


// Prevent form submission
calculator.addEventListener('submit', event => {
  event.preventDefault();
});

//display
let originalInputContent = '';

buttons.forEach(button => {
button.addEventListener('click', () => {
  const buttonText = button.textContent;
  originalInputContent += buttonText;
  display_input.innerHTML = originalInputContent;
});
});

// Delete one item
deleteButton.addEventListener('click', () => {
originalInputContent = originalInputContent.slice(0, -1);
display_input.innerHTML = originalInputContent;
});


// reset 
reset.addEventListener('click', () => {
originalInputContent = '';
display_input.textContent = '';
display_output.textContent = '';
});


// calculation
equalButton.addEventListener('click', () => {
const result = eval(display_input.textContent);

const resultString = result.toString();
if (resultString.length > 8 && !Number.isInteger(result)) {

  const formattedResult = parseFloat(result.toFixed(8));
  display_output.textContent = formattedResult;

} else if (resultString.length > 8 && Number.isInteger(result)) {
  const formattedResult = result.toExponential();
  display_output.textContent = formattedResult;

} else {
  display_output.textContent = result;
}
});





