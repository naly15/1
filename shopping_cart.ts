class ShoppingCart {
  private items: string[];

  constructor() {
    this.items = [];
  }

  addItem(item: string): void {
    this.items.push(item);
    console.log(`${item} added to the shopping cart.`);
  }

  removeItem(item: string): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      console.log(`${item} removed from the shopping cart.`);
    } else {
      console.log(`${item} is not in the shopping cart.`);
    }
  }

  replaceItem(oldItem: string, newItem: string) {
    const index = this.items.indexOf(oldItem);
    this.items.splice(index, 1, newItem);
  }

  getItems(): string[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
    console.log('Shopping cart cleared.');
  }
}

const cart = new ShoppingCart();
cart.addItem('Apple');
cart.addItem('Banana');
cart.addItem('Orange');
console.log('Items in the cart:', cart.getItems());

cart.removeItem('Banana');
console.log('Items in the cart:', cart.getItems());

cart.clearCart();
console.log('Items in the cart:', cart.getItems());
