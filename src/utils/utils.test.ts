import { describe, expect, it } from "vitest";
import {
  cartMockData,
  updatedCartWithQuantityMock,
} from "../mock_data/mockdata";
import {
  getTotalPriceOfCartItems,
  getTotalQuantityOfCartItems,
  updateCartWithQuantity,
} from "./utils";

describe("test for utility functions", () => {
  it("Update the quanity field shopping cart for an item", () => {
    const result = updateCartWithQuantity(cartMockData);
    expect(result).toEqual([
      { name: "Sofa", price: 10000, quantity: 3 },
      { name: "Chair", price: 5000, quantity: 1 },
      { name: "Study Table", price: 6000, quantity: 1 },
    ]);
  });
  it("test the total price calculation of cart items", () => {
    const result = getTotalPriceOfCartItems(updatedCartWithQuantityMock);
    expect(result).toEqual(41000);
  });
  it("test the total quantity calculation of cart items", () => {
    const result = getTotalQuantityOfCartItems(updatedCartWithQuantityMock);
    expect(result).toEqual(5);
  });
});
