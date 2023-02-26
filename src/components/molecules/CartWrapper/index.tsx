import Button from '@/components/atoms/ButtonRectangle'
import RemoveAllButton from '@/components/atoms/RemoveAllButton'
import { useAppDispatch } from '@/hooks/redux'
import { cartItems, totalAmount, totalPrice } from '@/store/CartSlice'
import Link from 'next/link'
import { GiShoppingCart as CartIcon } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { currencyFormat } from 'simple-currency-format'
import CartItem from '../CartItem'

const CartWrapper: React.FC = () => {
    const amount = useSelector(totalAmount)
    const allItems = useSelector(cartItems)
    const dispatch = useAppDispatch()
    const totalValue = useSelector(totalPrice)
    const price = currencyFormat(Number(totalValue), 'en-US', 'USD')

    return (
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
                        <h6>CART &#40;{amount}&#41;</h6>
                        <RemoveAllButton />
                    </div>
                    <div className="flex flex-col space-y-[24px]">
                        {allItems.length > 0 &&
                            allItems.map(({ id, ...props }) => (
                                <CartItem
                                    type="cart"
                                    key={id}
                                    id={id}
                                    {...props}
                                />
                            ))}
                    </div>
                    <div className="flex justify-between">
                        <p className="uppercase text-color-black/50">Total</p>
                        <p className="font-extrabold tracking-widest">
                            {price}
                        </p>
                    </div>
                    <Link
                        href="/checkout"
                        className="w-full"
                    >
                        <Button type="full">Checkout</Button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default CartWrapper
