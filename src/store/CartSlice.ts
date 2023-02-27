import { RootState } from './index'
import CartItem from '@/shared/types/CartItem'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartSliceType = CartItem[]

const initialState: CartSliceType = []

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState: initialState,
    reducers: {
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const productId = action.payload
            const updatedItems = state.map((stateItem) => {
                if (stateItem.id === productId)
                    return {
                        ...stateItem,
                        quantity: stateItem.quantity + 1,
                    }
                else return stateItem
            })
            return updatedItems
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const productId = action.payload
            const updatedItems = state
                .map((stateItem) => {
                    if (stateItem.id === productId)
                        return {
                            ...stateItem,
                            quantity: stateItem.quantity - 1,
                        }
                    else return stateItem
                })
                .filter((item) => item.quantity > 0)
            return updatedItems
        },
        addItemToCart: (state, action: PayloadAction<CartItem>) => {
            const newItem = action.payload
            const isExistItemIndex = state.findIndex(
                (cartItem) => cartItem.id === newItem.id
            )
            if (isExistItemIndex === -1) {
                return [...state, newItem]
            } else {
                return state.map((cartItem, i) => {
                    if (i === isExistItemIndex)
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity + newItem.quantity,
                        }
                    else return cartItem
                })
            }
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const updatedCart = state.filter((el) => el.id === action.payload)
            return updatedCart
        },
        deleteAllItems: (state) => {
            return initialState
        },
    },
})

export const {
    addItemToCart,
    decreaseQuantity,
    deleteAllItems,
    increaseQuantity,
    removeItemFromCart,
} = CartSlice.actions

export default CartSlice.reducer

export const totalQuantity = (state: RootState): number => {
    const total = state.cart.reduce(
        (acc: number, cur) => (acc += cur.quantity),
        0
    )
    return total
}

export const totalAmount = (state: RootState): number => {
    return state.cart.length
}

export const cartItems = (state: RootState) => {
    return state.cart
}

export const totalPrice = (state: RootState): number => {
    const totalPrice = state.cart.reduce((acc: number, cur) => {
        return (acc += cur.quantity * cur.price)
    }, 0)
    return totalPrice
}
