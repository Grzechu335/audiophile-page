import React from 'react'
import {
    AiFillFacebook as FacebookIcon,
    AiOutlineTwitter as TwitterIcon,
    AiOutlineInstagram as InstagramIcon,
} from 'react-icons/ai'

const SocialIcons: React.FC = () => {
    return (
        <div className="order-3 xl:order-2 flex items-end justify-center md:mt-0 xl:pb-[56px] md:justify-end w-full md:w-1/2 space-x-[16px]">
            <FacebookIcon
                size={24}
                fill="white"
                className="icon"
            />
            <TwitterIcon
                size={24}
                fill="white"
                className="icon"
            />
            <InstagramIcon
                size={24}
                fill="white"
                className="icon"
            />
        </div>
    )
}

export default SocialIcons
