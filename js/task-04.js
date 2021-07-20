  
const counterValue = {
    value: 0,
    increment () {
        // console.log('increment -> this', this);
        this.value += 1;
    },
    decrement () {
        // console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const actionBtn = document.querySelectorAll('#counter button');
const valueEl = document.getElementById('value');
// console.log(actionBtn.dataset.action);
// console.log(actionBtn[1].dataset.action);
actionBtn[0].addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

actionBtn[1].addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});