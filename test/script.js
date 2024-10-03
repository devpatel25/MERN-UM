const services = [
    { id: 1, name: 'Web Development', price: 500 },
    { id: 2, name: 'Graphic Design', price: 300 },
    { id: 3, name: 'SEO Optimization', price: 200 }
  ];
  
  let currentServiceIndex = 0;
  let cart = [];
  let totalAmount = 0;
  
  const servicesContainer = document.getElementById('services');
  const cartItems = document.getElementById('cart-items');
  const totalAmountEl = document.getElementById('total-amount');
  
  // Function to display the next service
  function displayNextService() {
    if (currentServiceIndex < services.length) {
      const service = services[currentServiceIndex];
      servicesContainer.innerHTML = `
        <div class="service-card">
          <div>
            <h3>${service.name}</h3>
            <p>Price: $${service.price}</p>
          </div>
          <div>
            <button onclick="skipItem()">Skip Item</button>
            <button onclick="addItem()">Add to Cart</button>
          </div>
        </div>
      `;
    } else {
      servicesContainer.innerHTML = '<p>No more services available</p>';
    }
  }
  
  // Add item to cart and move to the next service
  function addItem() {
    const service = services[currentServiceIndex];
    cart.push(service);
    totalAmount += service.price;
    updateCart();
    currentServiceIndex++;
    displayNextService();
  }
  
  // Skip current service and move to the next
  function skipItem() {
    currentServiceIndex++;
    displayNextService();
  }
  
  // Update cart display
  function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach(service => {
      const li = document.createElement('li');
      li.textContent = `${service.name} - $${service.price}`;
      cartItems.appendChild(li);
    });
    totalAmountEl.textContent = totalAmount;
  }
  
  // Initial call to display the first service
  displayNextService();
  