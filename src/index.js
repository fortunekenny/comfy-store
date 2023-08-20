import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// domain: dev-8gku3zh65f2z0rvv.us.auth0.com
// clientID: KOkWHzLMqoOAhQ2nAawIk3OvS7uajGy0

root.render(
  <Auth0Provider
    domain="dev-8gku3zh65f2z0rvv.us.auth0.com"
    clientId="KOkWHzLMqoOAhQ2nAawIk3OvS7uajGy0"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
