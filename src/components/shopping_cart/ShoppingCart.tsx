import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import "./ShoppingCart.css";
import {
  getTotalPriceOfCartItems,
  getTotalQuantityOfCartItems,
  updateCartWithQuantity,
} from "../../utils/utils";
import type { ShoppingCartProps, UpdatedCart } from "../../types/types";
import { useState, useEffect, useMemo, useCallback } from "react";
import { CART_CONSTANTS } from "../../constants/constants";

const ShoppingCart: React.FC<ShoppingCartProps> = ({ shoppingCartItems }) => {
  const [updatedCartWithQuantity, setUpdatedCartWithQuantity] = useState<
    UpdatedCart[]
  >([]);

  useEffect(() => {
    const updatedCart = updateCartWithQuantity(shoppingCartItems);
    setUpdatedCartWithQuantity(updatedCart);
  }, [shoppingCartItems, shoppingCartItems.length]);

  const totalPriceOfCartItems = useMemo(() => {
    return getTotalPriceOfCartItems(updatedCartWithQuantity);
  }, [updatedCartWithQuantity]);

  const totalQuantity = useMemo(() => {
    return getTotalQuantityOfCartItems(updatedCartWithQuantity);
  }, [updatedCartWithQuantity]);

  const handleIncrement = useCallback((nameOfTheItem: string) => {
    setUpdatedCartWithQuantity((prevCartItems) =>
      prevCartItems.map((item) =>
        item.name === nameOfTheItem
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }, []);

  const handleDecrement = useCallback((nameOfTheItem: string) => {
    setUpdatedCartWithQuantity((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.name === nameOfTheItem
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const handleRemoval = useCallback((nameOfTheItem: string) => {
    setUpdatedCartWithQuantity((prevCartItems) =>
      prevCartItems.filter((item) => item.name != nameOfTheItem)
    );
  }, []);

  return (
    <>
      <div data-testid="shopping_cart_icon" className="shopping-cart-icon">
        {" "}
        <FaShoppingCart size={30}></FaShoppingCart>
        <span className="shopping-cart-total-quantity">{totalQuantity}</span>
      </div>

      {updatedCartWithQuantity && updatedCartWithQuantity.length > 0 ? (
        <div>
          <table
            data-testid="cart_details_table"
            className="cart-details-table"
          >
            <thead>
              <tr>
                <th>{CART_CONSTANTS.NAME}</th>
                <th>{CART_CONSTANTS.PRICE}</th>
                <th>{CART_CONSTANTS.QUANTITY}</th>
                <th>{CART_CONSTANTS.DECREMENT}</th>
                <th>{CART_CONSTANTS.INCREMENT}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {updatedCartWithQuantity.map((item) => {
                return (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td data-testid={`quantity_${item.name}`}>
                      {item.quantity}
                    </td>
                    <td>
                      <button
                        data-testid={`decrement-button-${item.name}`}
                        onClick={() => handleDecrement(item.name)}
                      >
                        <FaMinus />
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        data-testid={`increment-button-${item.name}`}
                        onClick={() => handleIncrement(item.name)}
                      >
                        <FaPlus />
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        data-testid={`remove-button-${item.name}`}
                        onClick={() => handleRemoval(item.name)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            data-testid="total_price_section"
            className="total-price-section"
          >
            {" "}
            <strong>Total price - INR {totalPriceOfCartItems} </strong>
          </div>
        </div>
      ) : (
        <h4 className="shopping-cart-empty-message">
          Your shopping cart is empty.
        </h4>
      )}
    </>
  );
};

export default ShoppingCart;
