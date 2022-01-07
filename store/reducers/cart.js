import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
    items: {},
    totalAmount: 0,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            const existingItem = state.items[addedProduct.id];
            let cartEntry;
            if (existingItem) {
                const updatedCartItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                    sum: existingItem.sum + prodPrice,
                    title: prodTitle,
                }
                cartEntry = updatedCartItem;
            } else {
                const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
                cartEntry = newCartItem;
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [addedProduct.id]: cartEntry,
                },
                totalAmount: state.totalAmount + prodPrice,
            }
        case REMOVE_FROM_CART:
            const productId = action.pid;
            const { [productId]: productToRemove, ...filteredCartItems } = state.items;
            let updatedTotal = state.totalAmount;
            let updatedCartItems;
            if (productToRemove.quantity > 1) {
                const { productPrice, sum, quantity } = productToRemove;
                updatedCartItems = { ...state.items, [productId]: { ...productToRemove, quantity: quantity - 1, sum: sum - productPrice } }
            } else {
                updatedCartItems = filteredCartItems;
            }
            updatedTotal -= productToRemove.productPrice
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: updatedTotal,
            }
    }
    return state;
} 