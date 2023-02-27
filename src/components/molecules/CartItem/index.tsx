import ProductQuantity from '@/components/atoms/ProductQuantity'
import { useAppDispatch } from '@/hooks/redux'
import CartItemProps from '@/shared/types/CartItem'
import { decreaseQuantity, increaseQuantity } from '@/store/CartSlice'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { currencyFormat } from 'simple-currency-format'

interface CartProps extends CartItemProps {
    type?: 'cart' | 'checkout' | 'modal'
}

const CartItem: React.FC<CartProps> = ({
    image,
    price,
    shortName,
    quantity,
    id,
    type,
}) => {
    const formattedPrice = currencyFormat(Number(price), 'en-US', 'USD')
    const dispatch = useAppDispatch()
    return (
        <div
            className={clsx('flex space-x-[16px]', {
                'items-start': type === 'modal',
                'items-center': type === 'checkout' || type === 'cart',
            })}
        >
            <Image
                src={image}
                width={type === 'modal' ? 50 : 64}
                height={type === 'modal' ? 50 : 64}
                alt="item image"
                className="rounded-lg"
            />
            <div className="flex flex-col flex-grow">
                <p className="font-extrabold">{shortName}</p>
                <p className="font-extrabold tracking-widest text-color-black/50">
                    {formattedPrice}
                </p>
            </div>

            {type === 'cart' ? (
                <ProductQuantity
                    buttonType="small"
                    quantity={quantity}
                    decrementQuantity={() => dispatch(decreaseQuantity(id))}
                    incrementQuantity={() => dispatch(increaseQuantity(id))}
                />
            ) : (
                <div>
                    <p className="font-extrabold text-color-black/50">
                        x{quantity}
                    </p>
                </div>
            )}
        </div>
    )
}

export default CartItem
