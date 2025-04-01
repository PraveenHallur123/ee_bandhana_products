// Persistent Cart using localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on all pages
function updateCartCount() {
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    });
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Product data logic
        updateCartCount();
    });
});

// Mobile Menu Toggle
const menuToggle = document.createElement('i');
menuToggle.className = 'fas fa-bars menu-toggle';
document.querySelector('.nav').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});