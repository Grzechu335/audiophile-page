import React from 'react'
import { HamburgerSliderReverse } from 'react-animated-burgers'

type MenuIconProps = {
    navToggler: () => void
    isNav: boolean
}

const MenuIcon: React.FC<MenuIconProps> = ({ navToggler, isNav }) => {
    return (
        // <Menu
        //     size={25}
        //     fill="white"
        //     onClick={navToggler}
        //     className="cursor-pointer hover:fill-color-orange-dark xl:hidden mr-0 md:mr-[32px] xl:mr-0"
        // />
        <div className="xl:hidden mr-0 md:mr-[32px] xl:mr-0 cursor-pointer">
            <HamburgerSliderReverse
                isActive={isNav}
                toggleButton={navToggler}
                buttonWidth={25}
                barColor="#FFF"
            />
        </div>
    )
}

export default MenuIcon
