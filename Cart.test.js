/* // src/components/Cart.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/cartSlice";
import Cart from "./src/components/Cart/Cart";
//import { RootState } from "@/redux/cartSlice";
import "@testing-library/jest-dom"; 



const renderWithRedux = (
  component,
  {
    initialState,
    store = configureStore({
      reducer: { cart: cartReducer },
      preloadedState: initialState,
    }),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Cart Component", () => {
  test("renders an empty cart message when there are no items", () => {
    renderWithRedux(<Cart />, {
      initialState: {
        cart: {
          products: [],
          totalPrice: 0,
          totalQuantity: 0,
        },
      },
    });

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
  });

  

  test("renders cart items correctly", () => {
    renderWithRedux(<Cart />, {
      initialState: {
        cart: {
          products: [
            {
              id: 1,
              title: "Product 1",
              price: 10,
              quantity: 2,
              thumbnail: "/product1.jpg",
              category: "category",
              description: "description",
              discountPercentage: 0,
              rating: 0,
              stock: 0,
              tags: [],
              sku: "sku",
              weight: 0,
              dimensions: { width: 0, height: 0, depth: 0 },
              warrantyInformation: "warrantyInformation",
              shippingInformation: "shippingInformation",
              availabilityStatus: "availabilityStatus",
              reviews: [{ rate: 0, comment: "" }],
              returnPolicy: "returnPolicy",
              minimumOrderQuantity: 0,
              meta: { title: "", description: "", keywords: [] },
              images: [],
            },
            {
              id: 2,
              title: "Product 2",
              price: 20,
              quantity: 1,
              thumbnail: "/product2.jpg",
              category: "category",
              description: "description",
              discountPercentage: 0,
              rating: 0,
              stock: 0,
              tags: [],
              sku: "sku",
              weight: 0,
              dimensions: { width: 0, height: 0, depth: 0 },
              warrantyInformation: "warrantyInformation",
              shippingInformation: "shippingInformation",
              availabilityStatus: "availabilityStatus",
              reviews: [{ rate: 0, comment: "" }],
              returnPolicy: "returnPolicy",
              minimumOrderQuantity: 0,
              meta: { title: "", description: "", keywords: [] },
              images: [],
            },
          ],
          totalPrice: 40,
        },
      },
    });

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("$20.00")).toBeInTheDocument(); // Total price for Product 1
    expect(screen.getByText("$20.00")).toBeInTheDocument(); // Total price for Product 2
    expect(screen.getByText("Total: $40.00")).toBeInTheDocument();
  });
});
 */