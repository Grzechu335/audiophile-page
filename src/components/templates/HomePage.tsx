import React from 'react'
import BestGear from '../molecules/BestGear'
import CategoriesLinks from '../organisms/CategoriesLinks'
import Gallery from '../organisms/Gallery'
import Hero from '../organisms/Hero'

const HomePage: React.FC = () => {
    return (
        <section>
            <Hero />
            <CategoriesLinks />
            <Gallery />
        </section>
    )
}

export default HomePage
