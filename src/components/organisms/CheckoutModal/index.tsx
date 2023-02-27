import React from 'react'
import orderIcon from 'public/images/checkout/icon-order-confirmation.svg'
import Image from 'next/image'
import Button from '@/components/atoms/ButtonRectangle'
import { useAppDispatch } from '@/hooks/redux'
import { setModal } from '@/store/ModalSlice'
import useCheckoutTotals from '@/hooks/useCheckoutTotals'
import { useSelector } from 'react-redux'
import { cartItems, deleteAllItems } from '@/store/CartSlice'
import CartItem from '@/components/molecules/CartItem'
import { useRouter } from 'next/router'
const CheckoutModal = () => {
    const dispatch = useAppDispatch()
    const { grandTotal } = useCheckoutTotals()
    const allItems = useSelector(cartItems)
    const router = useRouter()
    return (
        <div className="absolute left-0 justify-center top-[96px] w-full h-full bg-color-black/40">
            <div className="max-w-screen-xl mx-auto main-padding">
                <div className="bg-color-white mt-[125px] rounded-lg p-[48px] flex  flex-col space-y-[23px] md:space-y-[46px] mx-auto max-w-[540px]">
                    <Image
                        alt="order confirm"
                        src={orderIcon}
                        width={64}
                        height={64}
                    />
                    <h3>
                        Thank you <br /> for your order
                    </h3>
                    <p className="text-[15px] leading-[25px] text-color-black/50">
                        You will receive an email confirmation shortly.
                    </p>
                    <div className="flex flex-col md:flex-row">
                        <div className="p-[24px] bg-color-gray-dark flex flex-col space-y-[12px] flex-grow rounded-t-lg md:rounded-l-lg">
                            {allItems.slice(1).map((item) => (
                                <CartItem
                                    key={item.id}
                                    type="modal"
                                    {...item}
                                />
                            ))}
                            <span className="block w-full h-[1px] bg-color-black/[0.08]"></span>
                            <p className="text-center checkout-description text-color-black/50">
                                and {allItems.length} other items(s)
                            </p>
                        </div>
                        <div className="bg-color-black flex flex-col p-[32px] justify-center rounded-b-lg md:rounded-r-lg">
                            <p className="custom-sub-title text-color-white/50">
                                Grand Total
                            </p>
                            <p className="text-color-white">{grandTotal}</p>
                        </div>
                    </div>
                    <div
                        onClick={() => {
                            dispatch(setModal(false))
                            dispatch(deleteAllItems())
                            router.push('/')
                        }}
                    >
                        <Button type="full">Back to Home</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutModal
