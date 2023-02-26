import CartWrapper from '@/components/molecules/CartWrapper'
import { useAppDispatch } from '@/hooks/redux'
import { cartStatus, setCart, toggleCart } from '@/store/UISlice'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Cart: React.FC = () => {
    const cart = useSelector(cartStatus)
    const { query } = useRouter()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setCart(false))
    }, [query, dispatch])
    return (
        <div
            className={clsx(
                'absolute top-[96px] left-0 w-screen h-full bg-color-black/50 z-[100]',
                cart ? 'block' : 'hidden'
            )}
            onClick={() => dispatch(toggleCart())}
        >
            <div className="relative max-w-screen-xl mx-auto px-[24px]">
                <CartWrapper />
            </div>
        </div>
    )
}

export default Cart
