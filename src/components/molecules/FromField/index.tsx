import clsx from 'clsx'
import React, { HTMLInputTypeAttribute } from 'react'

type FormFieldProps = {
    label: string
    placeholder: string
    type?: HTMLInputTypeAttribute
    full?: boolean
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    placeholder,
    type = 'text',
    full = false,
}) => {
    return (
        <div
            className={clsx('flex flex-col', {
                'col-span-full': full === true,
            })}
        >
            <label
                htmlFor={label.toLowerCase()}
                className="checkout-description"
            >
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                id={label.toLowerCase()}
                className="py-[18px] px-[24px] border border-[#CFCFCF] rounded-lg mt-[9px]"
            />
        </div>
    )
}

export default FormField
