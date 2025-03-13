let cartCount = 0;
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });

    document.getElementById('cart-btn').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
});
