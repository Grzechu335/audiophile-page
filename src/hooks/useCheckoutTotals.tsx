import { totalPrice } from '@/store/CartSlice'
import { SHIPPING, TAX_FEE } from '@/utils/checkoutConstans'
import React from 'react'
import { useSelector } from 'react-redux'
import { currencyFormat } from 'simple-currency-format'

const useCheckoutTotals = (): {
    total: string
    shipping: string
    tax: string
    grandTotal: string
} => {
    const total = useSelector(totalPrice)
    const shipping = SHIPPING
    const tax = total * TAX_FEE
    const formattedTotal = currencyFormat(total, 'en-US', 'USD')
    const formattedShipping = currencyFormat(shipping, 'en-US', 'USD')
    const formattedTax = currencyFormat(tax, 'en-US', 'USD')
    return {
        total: formattedTotal,
        shipping: formattedShipping,
        tax: formattedTax,
        grandTotal: currencyFormat(total + shipping + tax, 'en-US', 'USD'),
    }
}

export default useCheckoutTotals
