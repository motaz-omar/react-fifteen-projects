import { AppProvider } from "./context";

import Cart from "./Cart";

function CartApp() {
  return (
    <AppProvider>
      <Cart />
    </AppProvider>
  );
}

export default CartApp;
