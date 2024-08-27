const cartItems = document.querySelectorAll('.cart-item');
const totalPriceElement = document.getElementById('total-price');

cartItems.forEach(item => {
    const increaseBtn = item.querySelector('.increase');
    const decreaseBtn = item.querySelector('.decrease');
    const quantityElement = item.querySelector('.item-quantity');
    const priceElement = item.querySelector('.item-price');
    const deleteBtn = item.querySelector('.delete-item');
    const likeBtn = item.querySelector('.like-item');

    let quantity = parseInt(quantityElement.textContent);
    let itemPrice = parseFloat(priceElement.textContent);

    // Increase quantity
    increaseBtn.addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
    });

    // Decrease quantity
    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
        }
    });

    // Delete item
    deleteBtn.addEventListener('click', () => {
        item.remove();
        updateTotal();
    });

    // Like item
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
    });

    // Update total price
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(cartItem => {
            const price = parseFloat(cartItem.querySelector('.item-price').textContent);
            const quantity = parseInt(cartItem.querySelector('.item-quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }
});

// Add to cart button action
document.querySelector('.add-to-cart').addEventListener('click', () => {
    alert('Items added to the cart!');
});
