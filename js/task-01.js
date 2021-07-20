const navItemsEl = document.querySelectorAll('.item');
console.log(`В списке ${navItemsEl.length} категории.`);

navItemsEl.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}.`);

console.log (`Количество элементов: ${item.querySelectorAll("li").length}.`);
});