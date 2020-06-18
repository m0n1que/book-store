let bestSellingBook = document.querySelectorAll("button.btn-best-sell");
for (const btn of bestSellingBook) {
    btn.addEventListener('click', () => {
        window.location.replace('shop-item/index.html?id='+btn.id);
    });
}
