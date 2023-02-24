import Button from '@/components/atoms/ButtonRectangle'
import RemoveAllButton from '@/components/atoms/RemoveAllButton'
import CartItem from '@/components/molecules/CartItem'
import { useAppDispatch } from '@/hooks/redux'
import { cartItems, productsNumber, totalPrice } from '@/store/CartSlice'
import { cartStatus, toggleCart } from '@/store/UISlice'
import clsx from 'clsx'
import React from 'react'
import { GiShoppingCart as CartIcon } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { currencyFormat } from 'simple-currency-format'

const Cart: React.FC = () => {
    const numberOfItems = useSelector(productsNumber)
    const allItems = useSelector(cartItems)
    const dispatch = useAppDispatch()
    const cart = useSelector(cartStatus)
    const totalValue = useSelector(totalPrice)
    const price = currencyFormat(Number(totalValue), 'en-US', 'USD')

    return (
        <div
            className={clsx(
                'absolute top-[96px] left-0 w-screen h-full bg-color-black/50 z-[100]',
                cart ? 'block' : 'hidden'
            )}
            onClick={() => dispatch(toggleCart())}
        >
            <div className="relative max-w-screen-xl mx-auto px-[24px]">
                <div
                    className="bg-color-white mx-auto mt-[24px] md:absolute right-0  top-[32px] max-w-[377px] md:w-[377px] p-[30px]"
                    onClick={(e) => e.stopPropagation()}
                >
                    {allItems.length === 0 ? (
                        <div className="flex flex-col items-center space-y-5 text-center">
                            <h6>Your cart is empty</h6>
                            <CartIcon
                                fill="#000"
                                size={100}
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-[32px]">
                            <div className="flex justify-between">
                                <h6>CART &#40;{numberOfItems}&#41;</h6>
                                <RemoveAllButton />
                            </div>
                            <div className="flex flex-col space-y-[24px]">
                                {allItems.length > 0 &&
                                    allItems.map(({ id, ...props }) => (
                                        <CartItem
                                            key={id}
                                            id={id}
                                            {...props}
                                        />
                                    ))}
                            </div>
                            <div className="flex justify-between">
                                <p className="uppercase text-color-black/50">
                                    Total
                                </p>
                                <p className="font-extrabold tracking-widest">
                                    {price}
                                </p>
                            </div>
                            <Button>Checkout</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cart
