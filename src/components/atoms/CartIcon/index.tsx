import React from 'react'
import { AiOutlineShoppingCart as ShoppingCartIcon } from 'react-icons/ai'

const CartIcon = () => {
    return (
        <ShoppingCartIcon
            size={24}
            fill="white"
            className="cursor-pointer md:ml-auto xl:ml-0 hover:fill-color-orange-dark"
        />
    )
}

export default CartIcon
