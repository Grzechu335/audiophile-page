import React from 'react'
import { HiMenu as Menu } from 'react-icons/hi'

const MenuIcon = () => {
    return (
        <Menu
            size={25}
            fill="white"
            className="cursor-pointer hover:fill-color-orange-dark xl:hidden mr-0 md:mr-[32px] xl:mr-0"
        />
    )
}

export default MenuIcon
