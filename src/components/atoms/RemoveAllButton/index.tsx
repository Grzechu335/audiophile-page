import { useAppDispatch } from '@/hooks/redux'
import { deleteAllItems } from '@/store/CartSlice'
import React from 'react'

const RemoveAllButton: React.FC = () => {
    const dispatch = useAppDispatch()

    return (
        <div onClick={() => dispatch(deleteAllItems())}>
            <button className="text-[15px] leading-[25px] underline text-color-black/50 hover:text-color-black">
                Remove all
            </button>
        </div>
    )
}

export default RemoveAllButton
