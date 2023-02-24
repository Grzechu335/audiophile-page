import { useAppDispatch } from '@/hooks/redux'
import { totalQuantity } from '@/store/CartSlice'
import { toggleCart } from '@/store/UISlice'
import React from 'react'
import { AiOutlineShoppingCart as ShoppingCartIcon } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const CartIcon: React.FC = () => {
    const quantity = useSelector(totalQuantity)
    const dispatch = useAppDispatch()
    return (
        <div
            className="relative md:ml-auto xl:ml-0"
            onClick={() => dispatch(toggleCart())}
        >
            <span className="absolute block rounded-full w-[18px] font-bold h-[18px] text-color-dark top-0 right-0 transform translate-y-[-50%] leading-[18px] translate-x-[50%] text-xs bg-color-orange-dark text-center">
                {quantity}
            </span>
            <ShoppingCartIcon
                size={24}
                fill="white"
                className="cursor-pointer hover:fill-color-orange-dark"
            />
        </div>
    )
}

export default CartIcon
