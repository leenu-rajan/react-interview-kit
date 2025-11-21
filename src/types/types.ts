export interface ShoppingCartItem {
  id: number;
  name: string;
  price: number;
}

export interface ShoppingCartProps {
  shoppingCartItems: ShoppingCartItem[];
}

export interface UpdatedCart {
  name: string;
  price: number;
  quantity: number;
}
