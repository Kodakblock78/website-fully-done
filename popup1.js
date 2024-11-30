let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = []; // Unused but kept for potential future usage
const cartListHTML = document.querySelector('#cart-list');
const totalPriceHTML = document.querySelector('#total-price');



// Load cart from localStorage or initialize it
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to cart confirmation message
const showAddToCartMessage = () => {
    const message = document.createElement('div');
    message.classList.add('add-to-cart-message');
    message.textContent = 'Added to cart!';
    body.appendChild(message);
    setTimeout(() => message.remove(), 2000);
};

// Toggle cart visibility
iconCart.addEventListener('click', () => body.classList.toggle('showCart'));
closeCart.addEventListener('click', () => body.classList.toggle('showCart'));

// Handle adding products to the cart
document.addEventListener('click', (event) => {
    let product = null;

    // Determine which product was clicked
    if (event.target.id === 'jordan-4-black') {
        product = {
            id: 'jordan-4-black',
            name: 'Jordan 4s',
            price: 289,
            image: 'jordan-4.webp',
            quantity: 1,
        };
    } else if (event.target.id === 'crochet-hat-product') {
        product = {
            id: 'crochet-hat-product',
            name: 'Crochet Hat',
            price: 25,
            image: 'x.png',
            quantity: 1,
        };
    } else if (event.target.id === 'Laces-rope-btn') {
        product = {
            id: 'Laces-rope-btn',
            name: 'Rope Laces',
            price: 14,
            image: 'downloaden.png',
            quantity: 1,
        };
    } else if (event.target.id === 'Adidas-campus-blue') {
        product = {
            id: 'Adidas-campus-blue',
            name: 'Adidas Campus 00s',
            price: 270,
            image: '7G5TkQ5O0ZIIQ0QThctdXems3Fu8vYuYFfNW2siw-e1709897895234.webp',
            quantity: 1,
        };
    } else if (event.target.id === 'adidas-gazelle') {
        product = {
            id: 'adidas-gazelle',
            name: 'Adidas Gazelle',
            price: 139,
            image: 'adidas-gazelle.avif',
            quantity: 1,
        };
    } else if (event.target.id === 'Adidas-campus-black') {
        product = {
            id: 'Adidas-campus-black',
            name: 'Adidas Campus 00s',
            price: 139,
            image: 'adidas campus black.webp',
            quantity: 1,
        };
    }else if (event.target.id === 'nike-blazer-low') {
        product = {
            id: 'nike-blazer-low',
            name: 'nike blazer',
            price: 105,
            image: 'nike-blazer-low.webp',
            quantity: 1,
        };
    }else if (event.target.id === 'nike-dunks') {
        product = {
            id: 'nike-dunks',
            name: 'nike dunks',
            price: 135,
            image: 'nike-dunk.webp',
            quantity: 1,
        };
    }else if (event.target.id === 'new-balance') {
        product = {
            id: 'new-balance',
            name: 'new balance 9060',
            price: 210,
            image: 'new--balanc.webp',
            quantity: 1,
        };
    }else if (event.target.id === 'air-force-1') {
        product = {
            id: 'air-force-1',
            name: 'Air force 1',
            price: 125,
            image: 'af-1.webp',
            quantity: 1,
        };
    }else if (event.target.id === 'uggs-boots') {
        product = {
            id: 'uggs-boots',
            name: 'uggs',
            price: 135,
            image: 'uggs-trans.webp',
            quantity: 1,
        };
    }


    // If a product was selected
    if (product) {
        // Check if the product already exists in the cart
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1; // Increase quantity if it already exists
        } else {
            cart.push(product); // Add the product to the cart if it's new
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        showAddToCartMessage(); // Show the "Added to cart" message
        updateCart(); // Update the cart UI
    }
});

// Update the cart HTML and icon count
const updateCart = () => {
    listCartHTML.innerHTML = ''; // Clear the current cart HTML

    // Loop through the cart array and render each item
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h2>${item.name}</h2>
                <p>Price: €${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <button class="remove-btn" data-index="${index}">&times;</button> <!-- Remove button -->
        `;

        listCartHTML.appendChild(cartItem);
    });

    // Update the cart icon count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    iconCartSpan.textContent = totalItems;

    // Add event listeners to the remove buttons
    document.querySelectorAll('.remove-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index; // Get the index from the button's data attribute
            cart.splice(index, 1); // Remove the item from the cart array
            localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
            updateCart(); // Refresh the cart UI
        });
    });
};

// Redirect to payment-page.html when the checkout button is clicked
document.querySelector('.checkOut').addEventListener('click', () => {
    window.location.href = 'payment-page.html'; // Redirect to the payment page
});





// Initialize the cart UI on page load
updateCart();
const renderCartItems = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve the cart from localStorage
    const listContainer = document.getElementById('list1'); // The div where the cart items will be displayed
    const totalPriceElement = document.getElementById('total-price'); // Total price element

    listContainer.innerHTML = ''; // Clear any existing items
    let totalPrice = 0; // Initialize total price

    // Loop through the cart items and display them
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: €${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-price">Subtotal: €${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-btn" data-index="${index}">x</button>
        `;

        listContainer.appendChild(cartItemDiv); // Append the cart item to the container
        totalPrice += item.price * item.quantity; // Add to total price
    });

    // Update the total price in the DOM
    totalPriceElement.textContent = `Total: €${totalPrice.toFixed(2)}`;

    // Add event listeners to the remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const itemIndex = e.target.getAttribute('data-index');
            removeCartItem(itemIndex); // Call the remove function
        });
    });
};

// Function to remove an item from the cart
const removeCartItem = (index) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the given index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    renderCartItems(); // Re-render the cart
};

// Call the renderCartItems function on page load
document.addEventListener('DOMContentLoaded', renderCartItems);
