document.addEventListener("DOMContentLoaded", function() {

    fetch('popularproducts.json')
        .then(response => response.json())
        .then(products => {
            const container = document.getElementById('products-container');
            products.forEach(product => {
                const productBox = document.createElement('div');
                productBox.classList.add('img-box');

                productBox.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <strong>${product.name}</strong>
                    <span class="price">${product.price}</span>
                    <button class="cart-btn">Add To Cart <i class="ri-shopping-bag-4-fill"></i></button>
                    <button class="like-btn">Like <i class="ri-heart-3-fill"></i></button>
                `;

                container.appendChild(productBox);

                // Add event listener for "Add To Cart" button
                const addToCartBtn = productBox.querySelector('.cart-btn');
                addToCartBtn.addEventListener('click', function() {
                    addToCart(product);
                    showAlert(`${product.name} has been added to your cart!`);
                });
            });
        })
        .catch(error => console.error('Error loading products:', error));

    // Function to show the custom alert
    function showAlert(message) {
        const alertBox = document.getElementById('custom-alert');
        const alertMessage = document.getElementById('alert-message');
        const closeAlert = document.getElementById('close-alert');

        // Set the alert message
        alertMessage.textContent = message;

        // Show the alert box
        alertBox.style.display = 'flex';

        // Close the alert when the OK button is clicked
        closeAlert.addEventListener('click', function() {
            alertBox.style.display = 'none';
        });
    }

    function addToCart(product) {
        // Retrieve existing cart items from localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Check if the product is already in the cart
        let existingProduct = cartItems.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            // Add new product to cart with quantity 1
            cartItems.push({ 
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1 
            });
        }

        // Save updated cart items back to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
});
