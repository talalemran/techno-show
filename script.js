// Shopping Cart Logic
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartSubtotal = document.getElementById('cart-subtotal');
const checkoutSubtotal = document.getElementById('checkout-subtotal');
const checkoutTax = document.getElementById('checkout-tax');
const checkoutTotal = document.getElementById('checkout-total');
const cartItemsList = document.getElementById('cart-items');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.dataset.name;
    const productPrice = parseFloat(button.dataset.price);
    addToCart(productName, productPrice);
  });
});

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  cartSubtotal.textContent = `$${subtotal}`;
  checkoutSubtotal.textContent = subtotal;

  // Update tax and total
  const tax = (subtotal * 0.1).toFixed(2); // 10% tax
  checkoutTax.textContent = tax;
  checkoutTotal.textContent = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  // Update cart items list
  cartItemsList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItemsList.appendChild(li);
  });
}
