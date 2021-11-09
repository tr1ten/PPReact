import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCart: false,
    "carts": [],
    items: [
        { "id": 0, "title": "first", "description": "this is first", "price": 2 },
        { "id": 1, "title": "second", "description": "this is second", "price": 3 }
    ]
};

const orderSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        decrementCart(state, action) {
            const cartitem = state.carts.find((e) => e.id === action.payload)
            if (cartitem.quantity === 1) {
                state.carts = state.carts.filter((e) => e.id != cartitem.id)
            }
            cartitem.quantity--;

        },
        incrementCart(state, action) {
            const cartitem = state.carts.find((e) => e.id === action.payload)
            cartitem.quantity++;

        },


        addToCart(state, action) {
            const cartitem = state.carts.find((e) => e.id === action.payload)
            if (cartitem) {
                cartitem.quantity++;
            }
            else {
                console.log('item id ', action.payload)
                state.carts.push({ id: action.payload, quantity: 1 })
            }


        }
    },
});

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;