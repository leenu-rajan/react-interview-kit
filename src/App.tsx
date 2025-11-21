import "./App.css";
import ShoppingCart from "./components/shopping_cart/ShoppingCart";
import { cartMockData } from "./mock_data/mockdata";
function App() {
  return (
    <>
      <h2>React Shopping Cart</h2>
      <ShoppingCart shoppingCartItems={cartMockData} />
    </>
  );
}
export default App;
