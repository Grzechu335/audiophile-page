import { ProductAsProp } from '@/shared/types/Product'
import React, { useState } from 'react'
import Button from '../../ButtonRectangle'
import { currencyFormat } from 'simple-currency-format'
import ProductQuantity from '../../ProductQuantity'
import CartItem from '@/shared/types/CartItem'
import { addItemToCart } from '@/store/CartSlice'
import { useAppDispatch } from '@/hooks/redux'

const ProductDescription: React.FC<ProductAsProp> = ({ product }) => {
    const dispatch = useAppDispatch()
    const [quantity, setQuantity] = useState(1)
    const decrementQuantity = (): void => {
        if (quantity === 0) setQuantity(0)
        else setQuantity((prev) => prev - 1)
    }
    const incrementQuantity = (): void => {
        setQuantity((prev) => prev + 1)
    }
    const addToCart = (): void => {
        const lastWordIndex = product.name.lastIndexOf(' ')
        const shortName = product.name.substring(0, lastWordIndex)
        const newItem: CartItem = {
            id: product.id,
            shortName: shortName,
            price: product.price,
            quantity: quantity,
            image: product.image.mobile,
        }
        dispatch(addItemToCart(newItem))
        setQuantity(1)
    }

    const price = currencyFormat(Number(product.price), 'en-US', 'USD')

    return (
        <div className="flex flex-col justify-center space-y-[32px]">
            {product.isNew && (
                <p className="custom-overline text-color-orange-dark">
                    New product
                </p>
            )}
            <h2>{product.name}</h2>
            <p className="text-justify text-color-black/50">
                {product.description}
            </p>
            <h6 className="leading-[1.28px]">{price}</h6>
            <div className="flex items-center space-x-[16px]">
                <ProductQuantity
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    quantity={quantity}
                />
                <div onClick={addToCart}>
                    <Button>Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription
