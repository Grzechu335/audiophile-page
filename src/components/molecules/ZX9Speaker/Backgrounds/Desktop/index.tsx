import Image from 'next/image'
import React from 'react'
import circles from 'public/images/home/desktop/pattern-circles.svg'
import desktopImage from 'public/images/home/desktop/image-speaker-zx9.png'

const ZX9DesktopBackground = () => {
    return (
        <>
            <Image
                src={desktopImage}
                width={410}
                height={493}
                className="relative mt-[96px] bottom-[-10px] z-10 hidden xl:block"
                alt="speaker image"
            />
            <Image
                src={circles}
                className="absolute bottom-0 left-1/2 transform translate-x-[-50%] scale-[220%] z-0 hidden xl:block"
                alt="circles"
            />
        </>
    )
}

export default ZX9DesktopBackground
