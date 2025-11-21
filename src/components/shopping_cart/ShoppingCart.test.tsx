import { describe, expect, it } from "vitest";
import ShoppingCart from "./ShoppingCart";
import { fireEvent, render, screen } from "@testing-library/react";
import { cartMockData } from "../../mock_data/mockdata";

describe("Shopping cart tests", () => {
  it("render Shopping cart with []  data", () => {
    render(<ShoppingCart shoppingCartItems={[]} />);
    expect(
      screen.getByText("Your shopping cart is empty.")
    ).toBeInTheDocument();
  });
  it("render Shopping cart with mock data", () => {
    render(<ShoppingCart shoppingCartItems={cartMockData} />);
    expect(screen.getByTestId("shopping_cart_icon")).toBeInTheDocument();
    expect(screen.getByTestId("cart_details_table")).toBeInTheDocument();
    expect(screen.getByTestId("total_price_section")).toBeInTheDocument();
  });
  it("invokes increment, decremnet and remove buttons", () => {
    render(<ShoppingCart shoppingCartItems={cartMockData} />);
    screen.debug();
    const decrementButton = screen.getByTestId("decrement-button-Sofa");
    fireEvent.click(decrementButton);
    expect(screen.getByText("2")).toBeInTheDocument();
    const incrementButton = screen.getByTestId("increment-button-Sofa");
    fireEvent.click(incrementButton);
    expect(screen.getByText("3")).toBeInTheDocument();
    const removeButton = screen.getByTestId("remove-button-Sofa");
    fireEvent.click(removeButton);
    expect(screen.queryByText("Sofa")).toBeNull();
  });
});
