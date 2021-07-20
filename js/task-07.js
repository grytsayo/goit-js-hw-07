const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
}



const handleInput = (value) => {
    refs.spanEl.style.fontSize = `${refs.inputEl.value}px`;
};

refs.inputEl.addEventListener("input", handleInput);