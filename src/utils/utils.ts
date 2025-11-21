import type { ShoppingCartItem, UpdatedCart } from "../types/types";

export const updateCartWithQuantity = (
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

export const getTotalPriceOfCartItems = (
  updatedCartWithQuantity: UpdatedCart[]
): number => {
  const totalPriceOfCartItems = updatedCartWithQuantity.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );
  return totalPriceOfCartItems;
};

export const getTotalQuantityOfCartItems = (
  updatedCartWithQuantity: UpdatedCart[]
): number => {
  const totalQuantityOfCartItems = updatedCartWithQuantity.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );
  return totalQuantityOfCartItems;
};
