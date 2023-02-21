import Button from '@/components/atoms/ButtonRectangle'
import React from 'react'

import ZX9DesktopBackground from './Backgrounds/Desktop'
import ZX9TabletBackground from './Backgrounds/Tablet'
import ZX9MobileBackground from './Backgrounds/Mobile'

const ZX9Speaker: React.FC = () => {
    return (
        <div className="flex flex-col items-center xl:items-start xl:flex-row xl:space-x-[138px] rounded-lg justify-evenly bg-color-orange-dark  overflow-hidden xl:pb-0 md:py-[64px] py-[55px] mt-[120px] md:mt-[96px] xl:mt-[168px]">
            {/* Image div */}
            <div className="relative">
                <ZX9DesktopBackground />
                <ZX9TabletBackground />
                <ZX9MobileBackground />
            </div>
            {/* Content */}
            <div className="flex relative flex-col items-center justify-center h-full xl:items-start md:w-[350px] xl:text-start text-center xl:w-[350px] mt-[32px] md:mt-[65px]">
                <h1 className="text-color-white">
                    ZX9 <br /> Speaker
                </h1>
                <p className="text-color-white mt-[24px]">
                    Upgrade to premium speakers that are phenomenally built to
                    deliver truly remarkable sound.
                </p>
                <Button variant="secondary">See product</Button>
            </div>
        </div>
    )
}

export default ZX9Speaker
