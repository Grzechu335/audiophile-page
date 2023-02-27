import { RootState } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialModalState {
    modal: boolean
}

const initialState: initialModalState = {
    modal: false,
}

const ModalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        toggleModal: (state) => {
            return {
                modal: !state.modal,
            }
        },
        setModal: (state, action: PayloadAction<boolean>) => {
            const newState = action.payload
            return {
                modal: newState,
            }
        },
    },
})

export const modalStatus = ({ modal }: RootState): boolean => {
    return modal.modal
}

export const { toggleModal, setModal } = ModalSlice.actions

export default ModalSlice.reducer
