import Button from '@/components/atoms/ButtonRectangle'
import CartItem from '@/components/molecules/CartItem'
import useCheckoutTotals from '@/hooks/useCheckoutTotals'
import { cartItems } from '@/store/CartSlice'
import React from 'react'
import { useSelector } from 'react-redux'

const CheckoutSummary = () => {
    const allItems = useSelector(cartItems)
    const { total, tax, shipping, grandTotal } = useCheckoutTotals()
    return (
        <div className="col-span-1 p-[32px] flex flex-col space-y-[24px] bg-color-white rounded-lg">
            <h6>summary</h6>
            {allItems.map(({ id, ...props }) => (
                <CartItem
                    key={id}
                    id={id}
                    {...props}
                    type="checkout"
                />
            ))}
            <div className="text-[15px] leading-[25px] text-color-black/50 uppercase flex flex-col space-y-[8px]">
                <div className="flex justify-between">
                    <p>Total</p>
                    <p className="font-extrabold text-color-black">{total}</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping</p>
                    <p className="font-extrabold text-color-black">
                        {shipping}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p>Vat (included)</p>
                    <p className="font-extrabold text-color-black">{tax}</p>
                </div>
            </div>
            <div className="uppercase text-color-black/50 text-[15px] leading-[25px] flex justify-between">
                <p>Grant total</p>
                <p className="font-extrabold text-color-orange-dark">
                    {grandTotal}
                </p>
            </div>
            <Button>Continue & Pay</Button>
        </div>
    )
}

export default CheckoutSummary
