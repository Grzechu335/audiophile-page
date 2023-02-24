import clsx from 'clsx'
import React from 'react'
import {
    AiOutlineMinus as MinusIcon,
    AiOutlinePlus as PlusIcon,
} from 'react-icons/ai'

interface ProductQuantityProps {
    buttonType?: 'big' | 'small'
    incrementQuantity: () => void
    decrementQuantity: () => void
    quantity: number
}

const ProductQuantity: React.FC<ProductQuantityProps> = ({
    incrementQuantity,
    decrementQuantity,
    quantity,
    buttonType = 'big',
}) => {
    return (
        <div
            className={clsx(
                'grid grid-cols-3 bg-color-gray-dark  custom-overline font-bold text-color-black/25 ',
                {
                    'gap-[20px] p-[15px]': buttonType === 'big',
                    'py-[7px] px-[11px] gap-[12px]': buttonType === 'small',
                }
            )}
        >
            <div className="w-[16px] grid place-content-center">
                <MinusIcon
                    size={16}
                    fill="#00000040"
                    className="cursor-pointer hover:fill-color-orange-dark"
                    onClick={decrementQuantity}
                />
            </div>
            <div className="w-[16px] grid place-content-center">
                <p className="text-center text-color-black tracking-[1px] text-[13px] leading-[16px]">
                    {quantity}
                </p>
            </div>
            <div className="grid place-content-center">
                <PlusIcon
                    size={16}
                    fill="#00000040"
                    className="cursor-pointer hover:fill-color-orange-dark"
                    onClick={incrementQuantity}
                />
            </div>
        </div>
    )
}

export default ProductQuantity
