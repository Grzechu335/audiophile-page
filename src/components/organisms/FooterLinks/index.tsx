import NavLinkItem from '@/components/atoms/NavLinkItem'
import { links } from '@/utils/links'
import React from 'react'

const FooterLinks: React.FC = () => {
    return (
        <ul className="flex flex-col mx-auto md:mx-0 md:flex-row uppercase text-color-white space-y-[16px] md:space-y-0 md:space-x-[34px] md:mt-[32px] xl:mt-0">
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

export default FooterLinks
