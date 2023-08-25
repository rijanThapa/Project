
let cartItems = [];

// Function to add an item to the cart
function addToCart(productName, price) {
  // Check if the item is already in the cart
  let existingItem = cartItems.find(item => item.productName === productName);

  if (existingItem) {
    // If the item already exists in the cart, increase its quantity
    existingItem.quantity += 1;
  } else {
    // If the item doesn't exist in the cart, add it with a quantity of 1
    cartItems.push({
      productName: productName,
      price: price,
      quantity: 1
    });
  }

  // Save the updated cart items to local storage
  saveCartToLocalStorage();

  // Update the cart icon with the total item count
  updateCartIcon();
  // Refresh the cart table
  refreshCartTable();
}

// Function to remove an item from the cart
function removeFromCart(productName) {
  cartItems = cartItems.filter(item => item.productName !== productName);

  // Save the updated cart items to local storage
  saveCartToLocalStorage();

  // Update the cart icon with the total item count
  updateCartIcon();
  // Refresh the cart table
  refreshCartTable();
}

// Function to clear the entire cart
function clearCart() {
  cartItems = [];

  // Save the empty cart to local storage
  saveCartToLocalStorage();

  // Update the cart icon with the total item count
  updateCartIcon();
  // Refresh the cart table
  refreshCartTable();
}

// Function to update the cart icon with the total item count
function updateCartIcon() {
  const cartIcon = document.querySelector('.cart-item-count');
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  cartIcon.textContent = totalItems;
}

// Function to calculate the total price of all items in the cart
function calculateTotalPrice() {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return totalPrice;
}

// Function to save the cart items to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to retrieve cart items from local storage
function getCartFromLocalStorage() {
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    cartItems = JSON.parse(storedCartItems);
  }
}

// Function to refresh the cart table with the updated cart items and total price
function refreshCartTable() {
  const cartTableBody = document.querySelector('#cart-table tbody');
  const totalPriceElement = document.querySelector('#total-price');
  cartTableBody.innerHTML = '';

  cartItems.forEach(item => {
    const totalPrice = item.price * item.quantity;
    const row = `
          <tr>
            <td>${item.productName}</td>
            <td>${item.quantity}</td>
            <td>RS ${item.price}</td>
            <td>RS ${totalPrice}</td>
            <td>
              <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.productName}')">Remove</button>
            </td>
          </tr>
        `;
    cartTableBody.insertAdjacentHTML('beforeend', row);
  });

  const totalCartPrice = calculateTotalPrice();
  totalPriceElement.textContent = `Total Price: RS ${totalCartPrice}`;
}

// Call this function at the beginning to retrieve cart items from local storage (if any)
getCartFromLocalStorage();

// Refresh the cart table on page load
refreshCartTable();
// ... (your existing code) ...

// Function to check if the cart is empty
function isCartEmpty() {
  return cartItems.length === 0;
}

// Function to display a message based on cart status
function displayCartStatus() {
  const cartMessage = document.querySelector('.cart-message');

  if (isCartEmpty()) {
    cartMessage.textContent = 'No items in the cart.';
  } else {
    cartMessage.textContent = 'Proceed to the next page.';
  }
}

// Call the function to display the cart status message on page load
displayCartStatus();
