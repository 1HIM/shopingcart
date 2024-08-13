class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to add items to the cart
    addItem(product, quantity) {
      const cartItem = new ShoppingCartItem(product, quantity);
      this.items.push(cartItem);
    }
  
    // Method to remove items from the cart by product ID
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to get the total of all items in the cart
    getTotal() {
      return this.items.reduce((total, item) => total += item.getTotalPrice(), 0);
    }
  
    // Method to display cart items
    displayCart() {
      this.items.forEach(item => {
        console.log(`${item.product.name} - Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice()}`);
      });
      console.log(`Cart Total: $${this.getTotal()}`);
    }
  }
      