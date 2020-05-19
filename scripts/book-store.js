var bestSellingBook = document.querySelectorAll("button.btn-best-sell");
console.log(bestSellingBook);
for (const btn of bestSellingBook) {
    btn.addEventListener('click', () => {
        window.location.replace('shop-item/index.html?id='+btn.id);
    });
}
