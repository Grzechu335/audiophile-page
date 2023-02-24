import { configureStore } from '@reduxjs/toolkit'
import CartSliceReducer from './CartSlice'
import UISliceReducer from './UISlice'

export const store = configureStore({
    reducer: {
        cart: CartSliceReducer,
        ui: UISliceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
