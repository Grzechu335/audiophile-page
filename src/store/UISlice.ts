import { RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialUIState {
    navView: boolean
    cartView: boolean
}

const initialState: initialUIState = {
    navView: false,
    cartView: false,
}

const UISlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        toggleNav: (state) => {
            return {
                ...state,
                navView: !state.navView,
            }
        },
        setNav: (state, action: PayloadAction<boolean>) => {
            return { ...state, navView: action.payload }
        },
        toggleCart: (state) => {
            return {
                ...state,
                cartView: !state.cartView,
            }
        },
        setCart: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                cartView: action.payload,
            }
        },
    },
})

export const navStatus = ({ ui }: RootState) => {
    return ui.navView
}

export const cartStatus = ({ ui }: RootState) => {
    return ui.cartView
}

export const { toggleCart, toggleNav, setCart, setNav } = UISlice.actions

export default UISlice.reducer
