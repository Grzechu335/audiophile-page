import NavLinkItem from '@/components/atoms/NavLinkItem'
import { links } from '@/utils/links'
import React from 'react'

const NavLinks = () => {
    return (
        <ul className="uppercase text-color-white space-x-[34px] hidden xl:flex">
            {links.map(({ id, ...props }) => (
                <NavLinkItem
                    key={id}
                    id={id}
                    {...props}
                />
            ))}
        </ul>
    )
}

export default NavLinks
