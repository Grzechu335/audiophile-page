import React from 'react'
import logo from 'public/images/shared/desktop/logo.svg'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Link href="/">
            <Image
                src={logo}
                alt="logo"
                className="cursor-pointer"
            />
        </Link>
    )
}

export default Logo
