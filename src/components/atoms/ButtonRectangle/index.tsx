import React from 'react'
import clsx from 'clsx'

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'transparent'
    type?: 'normal' | 'full'
    submit?: boolean
    children?: React.ReactNode
    formId?: string
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    type = 'normal',
    children,
    submit = false,
    formId: form,
    disabled,
}) => {
    return (
        <button
            className={clsx(
                'px-[29px] py-[12px] focus:outline-none cursor-pointer uppercase font-bold relative',
                {
                    'bg-color-orange-dark text-color-white hover:bg-color-orange-light':
                        variant === 'primary',
                    'bg-color-black text-color-white hover:bg-color-gray-button':
                        variant === 'secondary',
                    'bg-transparent border border-black hover:bg-color-black hover:border-color-dark hover:text-color-white':
                        variant === 'transparent',
                    'w-full': type === 'full',
                }
            )}
            type={submit ? 'submit' : 'button'}
            form={form}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
