import React from 'react'
import MenuIcon from '@/components/atoms/MenuIcon'
import Logo from '@/components/atoms/Logo'
import CartIcon from '@/components/atoms/CartIcon'
import NavLinks from '@/components/molecules/NavLinks'
import MobileNav from '../MobileNav'
import { useSelector } from 'react-redux'
import { navStatus } from '@/store/UISlice'
const Header = (): JSX.Element => {
    const navState = useSelector(navStatus)
    return (
        <header className="w-full bg-[#181818] h-[96px]">
            <div className="flex items-center justify-between h-full max-w-screen-xl mx-auto border-b md:justify-start xl:justify-between border-b-color-white/20 main-padding">
                <MenuIcon />
                <Logo />
                <NavLinks />
                <CartIcon />
                {navState && <MobileNav />}
            </div>
        </header>
    )
}

export default Header
