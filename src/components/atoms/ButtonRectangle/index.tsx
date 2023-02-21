import React from 'react'
import clsx from 'clsx'

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'transparent'
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
    return (
        <button
            className={clsx(
                'px-[29px] py-[12px] focus:outline-none cursor-pointer uppercase font-bold mt-[28px] md:mt-[40px] relative',
                {
                    'bg-color-orange-dark text-color-white hover:bg-color-orange-light':
                        variant === 'primary',
                    'bg-color-black text-color-white hover:bg-color-gray-button':
                        variant === 'secondary',
                    'bg-transparent border border-black hover:bg-color-black hover:border-color-dark hover:text-color-white':
                        variant === 'transparent',
                }
            )}
        >
            {children}
        </button>
    )
}

export default Button
