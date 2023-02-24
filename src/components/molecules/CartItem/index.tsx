import ProductQuantity from '@/components/atoms/ProductQuantity'
import { useAppDispatch } from '@/hooks/redux'
import CartItemProps from '@/shared/interfaces/CartItem'
import { decreaseQuantity, increaseQuantity } from '@/store/CartSlice'
import Image from 'next/image'
import React from 'react'
import { currencyFormat } from 'simple-currency-format'

const CartItem: React.FC<CartItemProps> = ({
    image,
    price,
    shortName,
    quantity,
    id,
}) => {
    const formattedPrice = currencyFormat(Number(price), 'en-US', 'USD')
    const dispatch = useAppDispatch()
    return (
        <div className="flex items-center space-x-[16px]">
            <Image
                src={image}
                width={64}
                height={64}
                alt="item image"
                className="rounded-lg"
            />
            <div className="flex flex-col flex-grow">
                <p className="font-extrabold">{shortName}</p>
                <p className="font-extrabold tracking-widest text-color-black/50">
                    {formattedPrice}
                </p>
            </div>
            <ProductQuantity
                buttonType="small"
                quantity={quantity}
                decrementQuantity={() => dispatch(decreaseQuantity(id))}
                incrementQuantity={() => dispatch(increaseQuantity(id))}
            />
        </div>
    )
}

export default CartItem
