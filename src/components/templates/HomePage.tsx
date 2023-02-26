import React from 'react'
import BestGear from '../molecules/BestGear'
import CategoriesLinks from '../organisms/CategoriesLinks'
import Gallery from '../organisms/Gallery'
import Hero from '../organisms/Hero'

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <CategoriesLinks />
            <Gallery />
            <BestGear />
        </>
    )
}

export default HomePage
