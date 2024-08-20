import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product} from '@/app/page'



export interface CartState {
  products: Product[];
  totalQuantity: number;
  totalPrice: number;
}

export interface RootState {
  cart: CartState;
}

const initialState: CartState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload
      );

      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.totalQuantity -= product.quantity;
        state.totalPrice -= product.price * product.quantity;
        state.products.splice(productIndex, 1);
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
