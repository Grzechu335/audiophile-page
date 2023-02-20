import React from 'react'
import CategoriesLinks from '../organisms/CategoriesLinks'
import Hero from '../organisms/Hero'

const HomePage: React.FC = () => {
    return (
        <section>
            <Hero />
            <CategoriesLinks />
        </section>
    )
}

export default HomePage
