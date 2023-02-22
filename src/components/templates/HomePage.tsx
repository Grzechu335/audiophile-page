import React from 'react'
import CategoriesLinks from '../organisms/CategoriesLinks'
import Gallery from '../organisms/Gallery'
import Hero from '../organisms/Hero'

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <CategoriesLinks />
            <Gallery />
        </>
    )
}

export default HomePage
