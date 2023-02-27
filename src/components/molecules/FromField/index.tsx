import clsx from 'clsx'
import React, { forwardRef, HTMLInputTypeAttribute } from 'react'
import { FieldError } from 'react-hook-form'

type FormFieldProps = {
    label: string
    placeholder: string
    type?: HTMLInputTypeAttribute
    full?: boolean
    errors: FieldError | undefined
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>((props, ref) => {
    const { label, placeholder, full = false, type, errors, ...other } = props

    const errorMessage = errors?.message

    return (
        <div
            className={clsx('flex flex-col', {
                'col-span-full': full === true,
            })}
        >
            <label
                htmlFor={label.toLowerCase()}
                className="relative checkout-description"
            >
                {label}
                {errorMessage && (
                    <p className="text-[#CD2C2C] absolute top-0 right-0 text-[12px] leading-[16px] font-medium tracking-[-0.2px]">
                        {errorMessage}
                    </p>
                )}
            </label>
            <input
                ref={ref}
                {...other}
                type={type}
                placeholder={placeholder}
                id={label.toLowerCase()}
                className="py-[18px] px-[24px] border border-[#CFCFCF] rounded-lg mt-[9px]"
            />
        </div>
    )
})

FormField.displayName = 'FormField'
export default FormField
