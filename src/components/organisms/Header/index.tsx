import React from 'react'
import MenuIcon from '@/components/atoms/MenuIcon'
import Logo from '@/components/atoms/Logo'
import CartIcon from '@/components/atoms/CartIcon'
import NavLinks from '@/components/molecules/NavLinks'
const Header = (): JSX.Element => {
    return (
        <header className="fixed z-[100] top-0 w-full bg-color-dark h-[96px]">
            <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto border-b md:justify-start xl:justify-between border-b-color-white/20 main-padding">
                <MenuIcon />
                <Logo />
                <NavLinks />
                <CartIcon />
            </div>
        </header>
    )
}

export default Header
