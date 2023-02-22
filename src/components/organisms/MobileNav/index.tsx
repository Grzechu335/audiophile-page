import React from 'react'
import CategoriesLinks from '../CategoriesLinks'

type MobileNavProps = {
    navToggler: () => void
}

const MobileNav: React.FC<MobileNavProps> = ({ navToggler }) => {
    return (
        <div
            className="absolute top-[96px] left-0 w-full h-full bg-color-black/50 z-[100] xl:hidden"
            onClick={navToggler}
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
