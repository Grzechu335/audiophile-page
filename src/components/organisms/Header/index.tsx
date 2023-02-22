import React, { useEffect, useState } from 'react'
import MenuIcon from '@/components/atoms/MenuIcon'
import Logo from '@/components/atoms/Logo'
import CartIcon from '@/components/atoms/CartIcon'
import NavLinks from '@/components/molecules/NavLinks'
import MobileNav from '../MobileNav'
import { useRouter } from 'next/router'
const Header = (): JSX.Element => {
    const [nav, setNav] = useState(false)
    const navToggler = (): void => {
        setNav((prev) => !prev)
    }
    const { query } = useRouter()
    useEffect(() => {
        setNav(false)
    }, [query])
    return (
        <header className="w-full bg-[#181818] h-[96px]">
            <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto border-b md:justify-start xl:justify-between border-b-color-white/20 main-padding">
                <MenuIcon
                    navToggler={navToggler}
                    isNav={nav}
                />
                <Logo />
                <NavLinks />
                <CartIcon />
                {nav && <MobileNav navToggler={navToggler} />}
            </div>
        </header>
    )
}

export default Header
