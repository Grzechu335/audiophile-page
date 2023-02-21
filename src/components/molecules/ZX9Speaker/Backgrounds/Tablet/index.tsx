import Image from 'next/image'
import React from 'react'
import circles from 'public/images/home/desktop/pattern-circles.svg'
import tabletImage from 'public/images/home/tablet/image-speaker-zx9.png'

const ZX9TabletBackground = () => {
    return (
        <>
            <Image
                src={tabletImage}
                width={197}
                height={237}
                className="relative z-10 hidden md:block xl:hidden "
                alt="speaker image"
            />
            <Image
                src={circles}
                className="absolute hidden md:block xl:hidden left-1/2 transform translate-x-[-50%] scale-[500%] translate-y-[-50%] top-1/2  z-0"
                alt="circles"
            />
        </>
    )
}

export default ZX9TabletBackground
