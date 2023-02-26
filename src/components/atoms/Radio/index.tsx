import React from 'react'

type RadioButtonProps = {
    label: string
    setRadioValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    checked: boolean
}

const Radio: React.FC<RadioButtonProps> = ({
    label,
    setRadioValue,
    checked,
}) => {
    return (
        <label
            htmlFor={label.toLowerCase()}
            className="flex items-center font-extrabold focus-within:border-color-orange-dark cursor-pointer p-[18px] rounded-xl border-[#CFCFCF] border"
        >
            <input
                type="radio"
                className="custom-radio-button mr-[21px]"
                name="payment"
                id={label.toLowerCase()}
                value={label.toLowerCase()}
                onChange={(e) => setRadioValue(e)}
                checked={checked}
            />
            {label.toUpperCase()}
        </label>
    )
}

export default Radio
