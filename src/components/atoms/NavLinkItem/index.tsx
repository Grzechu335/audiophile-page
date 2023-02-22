import Link from 'next/link'
import React from 'react'

type NavItemProps = {
    text: string
    url: string
    id: number
}

const NavLinkItem: React.FC<NavItemProps> = ({ text, url, id }) => {
    return (
        <Link href={id === 1 ? '/' : `${url}`}>
            <li className="cursor-pointer hover:text-color-orange-dark uppercase font-[700]">
                {text}
            </li>
        </Link>
    )
}

export default NavLinkItem
