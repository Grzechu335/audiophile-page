import { combineReducers, createStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import CartSliceReducer from './CartSlice'
import ModalSliceReducer from './ModalSlice'
import UISliceReducer from './UISlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}

const rootReducer = combineReducers({
    cart: CartSliceReducer,
    ui: UISliceReducer,
    modal: ModalSliceReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)

export const persistor = persistStore(store)

// export const store = configureStore({
//     reducer: rootReducer,
// })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
