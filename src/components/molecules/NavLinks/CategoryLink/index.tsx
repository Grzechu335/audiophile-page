import ButtonSimple from '@/components/atoms/ButtonSimple'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CategoryLinkProps = {
    text: string
    url: string
    img: string
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ text, url, img }) => {
    return (
        <Link href={url}>
            <div className="relative flex flex-col items-center rounded-lg shadow-lg bg-color-gray-dark pt-[50px] pb-[30px]">
                <Image
                    alt="thumbnail image"
                    src={img}
                    width={80}
                    height={100}
                    className="absolute left-1/2 transform translate-x-[-50%] scale-[190%] md:scale-[200%] top-0 translate-y-[-50%] md:hover:scale-[220%] transition duration-200"
                />
                <p className="categories-text mb-[17px] mt-[36px]">{text}</p>
                <ButtonSimple />
            </div>
        </Link>
    )
}

export default CategoryLink
