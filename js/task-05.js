const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
      if (inputRef.value === '') {
        spanRef.innerHTML = 'незнакомец';
  } else {
    spanRef.innerHTML = inputRef.value;
  }
};
// console.log(spanRef);