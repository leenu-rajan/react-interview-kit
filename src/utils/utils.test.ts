import { describe, expect, it } from "vitest";
import { cartMockData } from "../mock_data/mockdata";
import { UpdateCartWithQuantity } from "./utils";

describe(`test for utility functions`, () => {
  it("Update the shopping cart with a quanity field", () => {
    const result = UpdateCartWithQuantity(cartMockData);
    expect(result).toEqual([
      { name: "Sofa", price: 10000, quantity: 3 },
      { name: "Chair", price: 5000, quantity: 1 },
      { name: "Study Table", price: 6000, quantity: 1 },
    ]);
  });
});
