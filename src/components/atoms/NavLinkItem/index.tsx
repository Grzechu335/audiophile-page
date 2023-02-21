import Link from 'next/link'
import React from 'react'

type NavItemProps = {
    text: string
    url: string
}

const NavLinkItem: React.FC<NavItemProps> = ({ text, url }) => {
    return (
        <Link href={url}>
            <li className="cursor-pointer hover:text-color-orange-dark uppercase font-[700]">
                {text}
            </li>
        </Link>
    )
}

export default NavLinkItem
