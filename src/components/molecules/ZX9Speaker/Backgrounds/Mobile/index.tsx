import Image from 'next/image'
import React from 'react'
import circles from 'public/images/home/desktop/pattern-circles.svg'
import mobileImage from 'public/images/home/mobile/image-speaker-zx9.png'

const ZX9MobileBackground = () => {
    return (
        <>
            <Image
                src={mobileImage}
                width={172}
                height={207}
                className="relative z-10 md:hidden"
                alt="speaker image"
            />
            <Image
                src={circles}
                className="absolute md:hidden left-1/2 transform translate-x-[-50%] scale-[330%] translate-y-[-50%] top-1/2  z-0"
                alt="circles"
            />
        </>
    )
}

export default ZX9MobileBackground
