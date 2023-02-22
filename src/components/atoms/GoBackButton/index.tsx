import { useRouter } from 'next/router'
import React from 'react'

const GoBackButton = () => {
    const { back } = useRouter()
    return (
        <button
            className="text-color-black/50 font-medium text-[15px] leading-[25px] hover:text-color-black cursor-pointer mt-[79px]"
            onClick={back}
        >
            Go Back
        </button>
    )
}

export default GoBackButton
