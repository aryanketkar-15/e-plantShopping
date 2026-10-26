import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find(item => item.id === plant.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...plant, cost: plant.cost ?? plant.price, quantity: 1 });
    },
    removeItem(state, action) {
      const payload = action.payload;
      state.items = state.items.filter(item => {
        if (payload && typeof payload === 'object') {
          return item.id !== payload.id && item.name !== payload.name;
        }
        return item.id !== payload && item.name !== payload;
      });
    },
    updateQuantity(state, action) {
      const { id, quantity } = typeof action.payload === 'object'
        ? action.payload
        : { id: action.payload.id, quantity: action.payload.quantity };
      const item = state.items.find(entry => entry.id === id);
      if (!item) return;
      if (quantity <= 0) state.items = state.items.filter(entry => entry.id !== id);
      else item.quantity = quantity;
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
// Compatibility aliases for any existing component imports.
export const addToCart = addItem;
export const removeFromCart = removeItem;
export const selectCartItems = state => state.cart.items;
export const selectCartCount = state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((sum, item) => sum + (item.cost ?? item.price) * item.quantity, 0);
export default cartSlice.reducer;
