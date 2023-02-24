import { useAppDispatch } from '@/hooks/redux'
import { toggleNav } from '@/store/UISlice'
import React from 'react'
import CategoriesLinks from '../CategoriesLinks'

const MobileNav: React.FC = () => {
    const dispatch = useAppDispatch()
    return (
        <div
            className="absolute top-[96px] left-0 w-full h-full bg-color-black/50 z-[100] xl:hidden"
            onClick={() => dispatch(toggleNav())}
        >
            <div
                className="bg-color-white pt-[84px] pb-[35px] md:pb-[67px] rounded-b-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <CategoriesLinks />
            </div>
        </div>
    )
}

export default MobileNav
