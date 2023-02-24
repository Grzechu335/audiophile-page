import { useAppDispatch } from '@/hooks/redux'
import { navStatus, setCart, setNav, toggleNav } from '@/store/UISlice'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { HamburgerSliderReverse } from 'react-animated-burgers'
import { useSelector } from 'react-redux'

const MenuIcon: React.FC = () => {
    const dispatch = useAppDispatch()
    const isNavOpen = useSelector(navStatus)
    const { query } = useRouter()

    useEffect(() => {
        dispatch(setNav(false))
    }, [query])
    return (
        <div className="xl:hidden mr-0 md:mr-[32px] xl:mr-0 cursor-pointer">
            <HamburgerSliderReverse
                isActive={isNavOpen}
                toggleButton={() => dispatch(toggleNav())}
                buttonWidth={25}
                barColor="#FFF"
            />
        </div>
    )
}

export default MenuIcon
