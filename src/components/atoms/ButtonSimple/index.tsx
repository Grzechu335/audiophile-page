import React from 'react'
import iconArrow from 'public/images/shared/desktop/icon-arrow-right.svg'
import Image from 'next/image'
// interface ButtonProps {
//     children?: React.ReactNode
// }

const ButtonSimple: React.FC = () => {
    return (
        <div className="flex">
            <button className="uppercase font-bold text-[13px] leading-[18px] tracking-[1px] text-color-black/50 mr-[13px] hover:text-color-orange-dark">
                Shop
            </button>
            <Image
                src={iconArrow}
                width={10}
                height={2}
                alt="arrow icon"
            />
        </div>
    )
}

export default ButtonSimple
