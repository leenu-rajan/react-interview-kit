import type { ShoppingCartItem, UpdatedCart } from "../types/types";

export const UpdateCartWithQuantity = (
  shoppingCartItems: ShoppingCartItem[]
): UpdatedCart[] => {
  const updatedCart: UpdatedCart[] = [];

  for (const item of shoppingCartItems) {
    const existingItem = updatedCart.find(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({
        name: item.name,
        price: item.price,
        quantity: 1,
      });
    }
  }
  return updatedCart;
};
